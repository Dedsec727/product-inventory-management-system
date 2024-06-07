import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/product';
import supplierRoutes from './routes/supplier';
import sequelize from './config/database';
import { ErrorHandler } from './middlewares/errorHandler';

const app = express();

app.use(bodyParser.json());
app.use('/products', productRoutes);
app.use('/suppliers', supplierRoutes);

app.use(ErrorHandler);

sequelize.sync().then(() => {
  console.log('Database connected');
}).catch((err: Error) => {
  console.error('Unable to connect to the database:', err);
});

export default app;
