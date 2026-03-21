import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: 'docker',
  database: 'gostack_gobarber',
  migrations: ['./src/database/migrations/*.ts'],
});
