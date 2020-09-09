import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Roles {
    
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column("varchar", {
        length: 50
      })
    name: String = "";

    @CreateDateColumn()
    created_at: string = "";

    @UpdateDateColumn({ type: "timestamp" })
    update_at: string = "";

}