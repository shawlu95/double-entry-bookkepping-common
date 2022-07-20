import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}

// modify existing object's interface
// add a 'currentUser' optional property
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Equivalent to (!req.session || !req.session.jwt)
  if (!req.session?.jwt && !req.session?.passport?.user?.jwt) {
    return next();
  }

  try {
    var payload;
    if (req.session?.jwt) {
      payload = jwt.verify(req.session.jwt, process.env.jwt!) as UserPayload;
    }

    if (req.session?.passport?.user?.jwt) {
      payload = jwt.verify(
        req.session?.passport?.user?.jwt,
        process.env.jwt!
      ) as UserPayload;
    }

    console.log('adhoc sess', req.session?.jwt);
    console.log('google sess', req.session?.passport?.user?.jwt);
    console.log('payload', payload);
    req.currentUser = payload;
  } catch (err) {}
  next();
};
