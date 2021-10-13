import express from 'express';
import { cartController } from '../controllers';

const cartRouter = express.Router();

cartRouter
  .post('', cartController.addToCart)
  .get('', cartController.getCart)
  .patch('', cartController.updateItemQuantity)
  .delete('', cartController.deleteItem);
// .post('', cartController.cartToOrder);

export default cartRouter;
