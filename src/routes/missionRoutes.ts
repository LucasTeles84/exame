import { Router } from 'express';
import { MissionController } from '../controllers/MissionController';
import { authenticateJWT } from '../middlewares/authMiddleware';

const router = Router();
const missionController = new MissionController();

router.get('/missoes', missionController.findAll.bind(missionController));
router.post('/missoes', authenticateJWT, missionController.create.bind(missionController));
router.delete('/missoes/:id', authenticateJWT, missionController.delete.bind(missionController));

export default router;
