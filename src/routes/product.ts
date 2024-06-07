import { Router } from 'express';
import {
  createProduct,
  updateProduct,
  deleteProduct,
  listProducts,
  getProductDetails,
  adjustStock
} from '../controllers/productController';

const router = Router();

router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/', listProducts);
router.get('/:id', getProductDetails);
router.patch('/:id/stock', adjustStock);

export default router;
