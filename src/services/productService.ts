import { Op } from "sequelize";
import Product from "../models/product";
import Supplier from "../models/supplier";
import { IProduct, IProductCreationAttributes } from "../types/Product";
import { ERRORS } from "../utils/Errors";
import SupplierService from "./supplierService";

const createProduct = async (product: IProductCreationAttributes): Promise<IProduct> => {
    const supplierExistsWithId = await SupplierService.checkSupplierWithId(product.supplierId);

    if (!supplierExistsWithId) throw ERRORS.SUPPLIER.NOT_FOUND;

    return (await Product.create(product)).get();
};

const updateProduct = async (pid: number, updateAttributes: IProductCreationAttributes) => {
    const [updated] = await Product.update(updateAttributes, { where: { id: Number(pid) } });

    if (!updated) throw ERRORS.PRODUCT.NOT_FOUND;
}

const deleteProduct = async (pid: number) => {
    const deleted = await Product.destroy({ where: { id: Number(pid) } });

    if (!deleted) throw ERRORS.PRODUCT.NOT_FOUND;
}

const getAllProducts = ({ sids, minPrice, maxPrice }: { sids?: number[], minPrice?: number, maxPrice?: number } = {}): Promise<IProduct[]> => {
    const opts = {} as any;

    if (sids?.length) opts.supplierId = sids;

    if (minPrice) opts.price = { [Op.gte]: minPrice };

    if (maxPrice) opts.price = { ...(opts.price || {}), [Op.lte]: maxPrice };

    return Product.findAll({ where: opts, raw: true });
}

const getProductDetails = async (pid: number): Promise<IProduct> => {
    const product = await Product.findOne({ where: { id: Number(pid) }, include: Supplier, raw: true }) as IProduct;

    if (!product) throw ERRORS.PRODUCT.NOT_FOUND;

    return product;
}

const adjustStockForProduct = async (pid: number, { quantity, isIncrement }: { quantity?: number, isIncrement?: boolean }): Promise<IProduct> => {
    const product = await Product.findByPk(Number(pid), { attributes: ['id', 'stockQuantity'] });

    if (!product) throw ERRORS.PRODUCT.NOT_FOUND;

    product.set('stockQuantity', quantity || (Number(product.get('stockQuantity')) + (isIncrement ? 1 : -1)));
    await product.save();

    return product.get();
}

export default {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getProductDetails,
    adjustStockForProduct
}