import { Request, Response, NextFunction } from 'express';

import prisma from '../prisma';

class UserController {
  static async getUsers(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (error: unknown) {
      next(error);
    }
  }

  static async createUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { name, email } = req.body;
      const user = await prisma.user.create({
        data: { name, email },
      });
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
