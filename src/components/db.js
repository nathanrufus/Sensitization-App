import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'postgresql://sensitization_app_user:m43TYykCUSL9t1m9IBdSbYa5Og7n6n3g@dpg-cnin16v79t8c73bt7qr0-a.oregon-postgres.render.com/sensitization_app',
  {
    host: 'localhost',
    dialect: 'postgres', // Use 'postgres' instead of 'postgresql'
  },
);

export default sequelize;
