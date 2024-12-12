import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authenticateJWT(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization')?.split(' ')[1];
    
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET!, (err) => {
            if (err) return res.sendStatus(403); // Forbidden
            next(); 
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
}
