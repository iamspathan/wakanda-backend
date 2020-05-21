import { EntitySchema } from "typeorm";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

type Entity = Function | string | EntitySchema<any>;

export function createProdTypeORMConfig(): TypeOrmModuleOptions {
  return ({
    type: 'postgres',
    database: 'wakandadb',
    username: 'wakandauser',
    password: 'wakandapass',
    entities: ['src/orm/*.entity.ts'],
    synchronize: true,
    logging: true
  })
}

export function createTestTypeORMConfig(): TypeOrmModuleOptions {
  return ({
    type: 'sqlite',
    database: ':memory:',
    entities: ['src/orm/*.entity.ts'],
    dropSchema: true,
    synchronize: true,
    logging: true
  })
}