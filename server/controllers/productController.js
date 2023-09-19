const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    req.body.user = req.user.id;
    // console.log("REQ.BODY.USER", req.body);
    // console.log("REQ.USER.ID", req.user.id);
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: `Resource not found! Invalid ${error.path}: ${error.value}`,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
};

const getAllProducts = async (req, res) => {
  try {
    const resultPerPage = 5;
    // const productCount = Product.collection.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query);
    // const product = await Product.find();
    const product = await apiFeature.query;

    if (!product) {
      return res
        .status(500)
        .json({ success: false, message: "Product not found" });
      // return next(new errorHandler("Product not found!!", 404));
    }

    res.status(200).json({
      success: true,
      product,
      // productCount,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: `Resource not found! Invalid ${error.path}: ${error.value}`,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
};

// Update products for admin
const updateProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(500)
        .json({ success: false, message: "Product not found" });
    }

    // if (!product) {
    //   return next(new errorHandler("Product not found!!", 404));
    // }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: `Resource not found! Invalid ${error.path}: ${error.value}`,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
};

const getProductDetails = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(500)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: `Resource not found! Invalid ${error.path}: ${error.value}`,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(500)
        .json({ success: false, message: "Product not found" });
    }

    if (!product) {
      return next(new errorHandler("Product not found!!", 404));
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: `Resource not found! Invalid ${error.path}: ${error.value}`,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  getProductDetails,
  deleteProduct,
};
