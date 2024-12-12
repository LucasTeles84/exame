import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const connectDatabase = async () => {
    try {
        const dataSource = new DataSource({
            type: 'postgres',
            url: 'postgresql://exame_user:5WhUy8TBR4c2GCzxOTUozEFX9m7tCUR5@dpg-ctd1eg3v2p9s73fo5580-a.oregon-postgres.render.com/exame',
            entities: [
                __dirname + '/../models/*.ts',
            ],
            synchronize: true, 
            logging: true, 
        });

        await dataSource.initialize();
        
        console.log('Conectado ao banco de dados com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
};
