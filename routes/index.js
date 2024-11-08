const express = require('express');
const router = express.Router();

// Import your route files
const productRoutes = require('./api/product-routes');
const categoryRoutes = require('./api/category-routes');
const tagRoutes = require('./api/tag-routes');

// Use the imported routes
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/tags', tagRoutes);

router.get('/', (req, res) => {
  res.send('Welcome to the API! Use /products, /categories, or /tags.');
});


router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/tags', tagRoutes);


module.exports = router;
