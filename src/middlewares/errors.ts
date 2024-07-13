import { Request, Response, NextFunction } from 'express';

const errorHandling = (err: Error, req: Request, res: Response, next: Function) => {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }

export default errorHandling;
