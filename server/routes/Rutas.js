const express = require('express');
const ProducController = require('../controllers/ProducController');
const router = express.Router();


router.get('/products', ProducController.getProducts);
router.get('/dev/:id', ProducController.GetProductId);
router.post('/add', ProducController.AddProduct);
router.put('/update/:id', ProducController.Update_Product);
router.delete('/delete/:_id', ProducController.Delete_Product);


module.exports = router;