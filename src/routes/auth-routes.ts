import express from 'express';
import { Request, Response } from 'express';
import { UserController } from '../controllers/UserController';

const router = express.Router();
const userController = new UserController();

router.post('/register', async (req: Request, res: Response) => {
    await userController.register(req, res);
});

router.post('/login', async (req: Request, res: Response) => {
    await userController.login(req, res);
});

export default router;
