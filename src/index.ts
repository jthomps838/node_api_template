import express, { Application, Router } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc, {Options, SwaggerDefinition} from 'swagger-jsdoc';

import userRoutes from './routes/userRoutes';
import prisma from './prisma';

const PORT = process.env.PORT || 8000;
const app: Application = express();

// Swagger setup
const swaggerOptions: Options = {
    swaggerDefinition: require('./swagger.json'),
    apis: ['./routes/*.js'], // Path to your route files
  };

  const swaggerDocs = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

//  Routes
app.use('/api/users', userRoutes);


/**
 * @swagger
 * /:
 *   get:
 *     summary: API Health Check
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: documentation about current API
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Health'
 *       500:
 *         description: Internal server error
 */
app.get('/', (req, res) => {
    res.status(200).json({
        version: '0.0.1',
        status: 'ok'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
})

export default app;
