import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { IProduct, IProductCreationAttributes } from '../types/Product';

class Product extends Model<IProduct, IProductCreationAttributes>
  implements IProduct {
  public id!: number;
  public name!: string;
  public supplierId!: number;
  public price!: number;
  public stockQuantity!: number;
  public images?: string[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    supplierId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    sequelize,
    tableName: 'products',
  }
);

export default Product;
