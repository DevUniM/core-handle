import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';
import { Statuscode } from 'src/statuscode/entities/statuscode.entity';


export default registerAs(
    'orm.config',
    (): TypeOrmModuleOptions => ({
        type: 'postgres',
        replication:{
            master:{
                host: process.env.DB_HOST,
                port: 5432,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
            },
            slaves:
               [
                {
                    host: process.env.DB_HOST_READ,
                    port: 5432,
                    username: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    database: process.env.DB_NAME,
                }
               ]
        },
        entities: [
            Statuscode
        ],
        synchronize:true,
    }),
);
