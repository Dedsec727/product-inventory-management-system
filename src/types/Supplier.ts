export interface ISupplier {
    id: number;
    name: string;
    contactInformation: string;
};

export interface ISupplierCreationAttributes extends Omit<ISupplier, 'id'> { };
