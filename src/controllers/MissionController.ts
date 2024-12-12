import { Request, Response } from 'express';
import { MissionRepository } from '../repositories/MissionRepository';

export class MissionController {
    private missionRepo = new MissionRepository();

    async create(req: Request, res: Response) {
        const mission = await this.missionRepo.create(req.body);
        res.status(201).json(mission);
    }

    async findAll(req: Request, res: Response) {
        const missions = await this.missionRepo.findAll();
        res.json(missions);
    }

    async delete(req: Request, res: Response) {
        await this.missionRepo.deleteById(parseInt(req.params.id));
        res.status(204).send();
    }
}
