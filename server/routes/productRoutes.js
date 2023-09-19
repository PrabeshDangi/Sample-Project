const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const {
  isUserAuthenticated,
  authorizeRoles,
} = require("../middleware/authMiddleware");

const productRoutes = (app) => {
  app.get("/api/products", getAllProducts);
  app.post(
    "/api/product/new",
    isUserAuthenticated,
    authorizeRoles("Producer"),
    createProduct
  );
  app.put(
    "/api/admin/product/:id",
    isUserAuthenticated,
    authorizeRoles("Admin"),
    updateProduct
  );
  app.get("/api/product/:id", getProductDetails);
  app.delete(
    "/api/admin/product/:id",
    isUserAuthenticated,
    authorizeRoles("Admin"),
    deleteProduct
  );
};

module.exports = productRoutes;
