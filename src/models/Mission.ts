import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() 
export class Mission {
    @PrimaryGeneratedColumn() 
    id!: number; 

    @Column() 
    name!: string; 

    @Column() 
    targetPlanet!: string; 

    @Column('float')
    durationInYears!: number; 

    @Column() 
    crewCount!: number; 

    @Column('text', { array: true }) 
    technologies!: string[]; 
}
