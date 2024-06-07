export interface IProduct {
    id: number;
    name: string;
    supplierId: number;
    price: number;
    stockQuantity: number;
    images?: string[];
};

export interface IProductCreationAttributes extends Omit<IProduct, 'id'> { };
