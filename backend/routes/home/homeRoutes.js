const router = require("express").Router();
const homeController = require("../../controllers/home/homeController");

router.get("/get-categories", homeController.get_categories);
router.get("/get-products", homeController.get_products);
router.get("/price-range-latest-product", homeController.price_range_product);
router.get("/query-products", homeController.query_products);

module.exports = router;
