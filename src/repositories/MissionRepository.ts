import { getRepository } from 'typeorm';
import { Mission } from '../models/Mission';

export class MissionRepository {
    async create(missionData: Partial<Mission>): Promise<Mission> {
        const mission = getRepository(Mission).create(missionData);
        return await getRepository(Mission).save(mission);
    }

    async findAll(): Promise<Mission[]> {
        return await getRepository(Mission).find();
    }

    async deleteById(id: number): Promise<void> {
        await getRepository(Mission).delete(id);
    }
}
