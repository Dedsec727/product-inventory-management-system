import { NextFunction, Request, Response } from 'express';
import { ERRORS } from '../utils/Errors';
import SupplierService from '../services/supplierService';

export const createSupplier = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const { name, contactInformation } = req.body;

    if (!name) throw ERRORS.SUPPLIER.NAME_IS_MANDATORY;

    if (!contactInformation) throw ERRORS.SUPPLIER.CONTACT_INFO_IS_MANDATORY;

    const supplier = await SupplierService.createSupplier({ name, contactInformation });

    return res.status(200).json(supplier);
  } catch (err) {
    res.locals.body = err;
    next();
  }
};