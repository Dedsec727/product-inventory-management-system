import { NextFunction, Request, Response } from 'express';
import { ERRORS } from '../utils/Errors';
import ProductService from '../services/productService';
import { IProductCreationAttributes } from '../types/Product';

export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const { name, supplierId, price, stockQuantity, images } = req.body;

    if (!name) throw ERRORS.PRODUCT.NAME_IS_MANDATORY;
    if (!supplierId) throw ERRORS.PRODUCT.SID_IS_MANDATORY;
    if (!price) throw ERRORS.PRODUCT.PID_IS_MANDATORY;
    if (!stockQuantity) throw ERRORS.PRODUCT.STOCK_IS_MANDATORY;
    if (Array.isArray(images) && images.length > 10) throw ERRORS.PRODUCT.IMAGES_LIMIT_REACHED;

    const product = await ProductService.createProduct({ name, supplierId, price, stockQuantity, images });

    return res.status(201).json(product);
  } catch (err) {
    res.locals.body = err;
    next();
  }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const { id } = req.params;

    if (!id) throw ERRORS.PRODUCT.PID_IS_MANDATORY;

    await ProductService.updateProduct(+id, req.body as IProductCreationAttributes);

    return res.status(200).send('Product Updated');
  } catch (err) {
    res.locals.body = err;
    next();
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const { id } = req.params;

    if (!id) throw ERRORS.PRODUCT.PID_IS_MANDATORY;

    await ProductService.deleteProduct(+id);

    return res.status(204);
  } catch (err) {
    res.locals.body = err;
    next();
  }
};

export const listProducts = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const { supplierIds, minPrice, maxPrice } = req.body;

    const products = await ProductService.getAllProducts({ sids: supplierIds, minPrice, maxPrice });

    return res.status(200).json(products);
  } catch (err) {
    res.locals.body = err;
    next();
  }
};

export const getProductDetails = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const { id } = req.params;

    if (!id) throw ERRORS.PRODUCT.PID_IS_MANDATORY;

    const product = await ProductService.getProductDetails(+id);

    return res.status(200).json(product);
  } catch (err) {
    res.locals.body = err;
    next();
  }
};

export const adjustStock = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const { id } = req.params;

    if (!id) throw ERRORS.PRODUCT.PID_IS_MANDATORY;

    const { quantity, isIncrement } = req.body;

    const product = await ProductService.adjustStockForProduct(+id, { quantity: +quantity, isIncrement });

    return res.status(200).json(product);
  } catch (err) {
    res.locals.body = err;
    next();
  }
};

