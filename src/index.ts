import 'reflect-metadata'; 
import { DataSource } from 'typeorm'; 
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
app.use(cors());
app.use(express.json()); 

const dataSource = new DataSource({
    type: 'postgres', 
    url: process.env.DATABASE_URL,
    entities: [
        __dirname + '/../models/*.ts',
    ],
    synchronize: true,
    logging: true, 
});


dataSource
    .initialize()
    .then(() => {
        console.log('Conectado ao banco de dados com sucesso!');

        app.listen(process.env.PORT || 3000, () => {
            console.log('Servidor está rodando na porta', process.env.PORT || 3000);
        });
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados:', error);
    });
