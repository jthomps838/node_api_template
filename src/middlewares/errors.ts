import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

interface CustomError extends Error {
  status?: number;
}

const errorHandling: ErrorRequestHandler = (
  err: CustomError,
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal server error',
    },
  });
};

export default errorHandling;
