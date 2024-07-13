import express, { Application, Router } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import userRoutes from './routes/userRoutes';
import prisma from './prisma';

const PORT = process.env.PORT || 8000;
const app: Application = express();
const router: Router = express.Router();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

//  Routes
app.use('/api/users', userRoutes);

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
