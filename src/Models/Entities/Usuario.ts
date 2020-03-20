import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: "usuarios" })
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    
    @Column()
    app: string;
    
    @Column()
    apm: string;
    
    @Column()
    edad: number;
}

// Modelos