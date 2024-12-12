import { Request, Response } from 'express';
import { User } from '../models/User';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserController {
    async register(req: Request, res: Response) {
        const { name, email, password } = req.body;


        const existingUser = await getRepository(User).findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User();
        user.name = name;
        user.email = email;
        user.password = hashedPassword;

        await getRepository(User).save(user);
        res.status(201).json({ message: 'Usuário registrado com sucesso' });
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await getRepository(User).findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        // Gerar token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secreta', { expiresIn: '1h' });
        
        res.json({ token });
    }
}
