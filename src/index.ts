import express, { Application, Router } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc, { Options } from 'swagger-jsdoc';

import userRoutes from './routes/userRoutes';
import healthRouter from './routes/healthRoute';
import prisma from './prisma';
import errorHandling from './middlewares/errors';

class Server {
  private app: Application;
  private port: number | string;
  private swaggerOptions: Options;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.swaggerOptions = {
      swaggerDefinition: require('../swagger.json'),
      apis: ['./routes/*.js'],
    };

    this.initializeMiddlewares();
    this.initializeSwagger();
    this.initializeRoutes();
    this.initializeErrorHandling();
    this.handleShutdown();
  }

  private initializeMiddlewares() {
    // Middleware
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('dev'));
  }

  private initializeSwagger() {
    const swaggerDocs = swaggerJsdoc(this.swaggerOptions);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }

  private initializeRoutes() {
    //  Routes
    this.app.use('/', healthRouter);
    this.app.use('/api/users', userRoutes);
  }

  private handleShutdown() {
    process.on('SIGINT', async () => {
      await prisma.$disconnect();
      process.exit(0);
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorHandling);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on ${this.port}`);
    });
  }

  public getApp(): Application {
    return this.app;
  }
}

if (process.env.NODE_ENV !== 'test') {
  const port = Number(process.env.PORT) || 8000;

  const server = new Server(port);

  server.listen();
}

export default Server;
