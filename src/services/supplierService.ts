import Supplier from "../models/supplier";
import { ISupplierCreationAttributes } from "../types/Supplier";

const createSupplier = (supplier: ISupplierCreationAttributes) => Supplier.create(supplier);

const checkSupplierWithId = async (sid: number) => !!(await Supplier.findByPk(sid, { attributes: ['id'], raw: true }));

export default {
    createSupplier,
    checkSupplierWithId,
}