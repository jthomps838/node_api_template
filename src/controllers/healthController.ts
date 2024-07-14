import { Request, Response, NextFunction } from 'express';
import healthCheck from '../utils/healthCheck.interface';

class HealthController {
  static getHealth(req: Request, res: Response, next: NextFunction): void {
    try {
      const healthCheckObj: healthCheck = {
        version: '0.0.1',
        status: 'ok',
      };

      res.status(200).json(healthCheckObj);
    } catch (error: unknown) {
      next(error);
    }
  }
}

export default HealthController;
