import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
  iat: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session?.passport?.user?.jwt) {
    req.user = jwt.verify(
      req.session?.passport?.user?.jwt,
      process.env.jwt!
    ) as UserPayload;
  }

  if (!req.user) {
    throw new NotAuthorizedError();
  }
  next();
};
