import { Sequelize } from 'sequelize';
import Product from '../models/product';
import Supplier from '../models/supplier';

const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'inventory',
  username: process.env.DB_USER || 'user',
  password: process.env.DB_PASS || 'password',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
});

Supplier.hasMany(Product, { foreignKey: 'supplierId' });
Product.belongsTo(Supplier, { foreignKey: 'supplierId' });

export default sequelize;
