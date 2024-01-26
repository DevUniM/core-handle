import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId, UpdateDateColumn } from 'typeorm';


@Entity({ name: 'statuscodes' })
export class Statuscode {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'code' })
    code: number

    @Column({ name: 'eng_version' })
    engVer: string

    @Column({ name: 'th_version' })
    thVer: string
    
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({  name: 'updated_at' ,type: 'timestamp' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' , type: 'timestamp' })
    deletedAt: Date;
}
