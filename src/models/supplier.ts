import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { ISupplier, ISupplierCreationAttributes } from '../types/Supplier';

class Supplier extends Model<ISupplier, ISupplierCreationAttributes>
  implements ISupplier {
  public id!: number;
  public name!: string;
  public contactInformation!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Supplier.init(
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
    contactInformation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'suppliers',
  }
);

export default Supplier;
