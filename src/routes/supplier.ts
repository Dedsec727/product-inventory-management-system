import { Router } from 'express';
import { createSupplier } from '../controllers/supplierController';

const router = Router();

router.post('/', createSupplier);

export default router;
