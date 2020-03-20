import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: "productos" })
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    producto: string;
    
    @Column()
    precio: number;
}

// Modelos