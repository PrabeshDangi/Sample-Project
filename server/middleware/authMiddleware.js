const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isUserAuthenticated = async (req, res, next) => {
  try {
    // const { token } = req.cookies;
    // console.log(token);
    // if (!token) {
    //   return res.status(401).json({
    //     success: false,
    //     message: "Please login to access this resource",
    //   });
    // }
    // const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // // console.log("DECODED DATA", decodedData);
    // // console.log("DECODED DATA.ID", decodedData._id);
    // req.user = await User.findById(decodedData._id);
    // next();
    // // console.log("REQ.USER", req.user);
    exports.protect = catchAsync(async (req, res, next) => {
      //checing if there is token or not
      let token;
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        token = req.headers.authorization.split(" ")[1];
      }
      //1) checing whether is logged in or not
      if (!token) {
        res.status(401).json({ message: "Get login in Firstly" });
      }
      //2) verify the token
      const decoded = await promisify(jwt.verify)(
        token,
        process.env.JWT_SECRET
      );

      //3) check if token belonging user is available or not
      const currentUser = await User.findById(decoded.id);

      if (!currentUser) {
        // res.status(401).json({
        //   status: 'Error',
        //   message: 'The token belonging user is no longer available',
        // });
        return res.status(401).json({
          success: false,
          message: "The token belonging user is no longer available",
        });
      }

      //  GRANT ACCESS TO THE USER
      req.user = currentUser;
      next();
    });
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token!" });
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res
        .status(403)
        .json({ message: `${req.user.role} cannot access this file` });
      // status code 403 means forbidden (cannot be authorized though server gets the request)
    }
    next();
  };
};

// exports.protect = async (req, res, next) => {
//   //checing if there is token or not
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     token = req.headers.authorization.split(" ")[1];
//   }
//   //1) checing whether is logged in or not
//   if (!token) {
//     // res.status(401).json({ message: 'Get login in Firstly' });
//     // return new AppError("Get log in firstly", 401);
//     return res.status(401).json({ message: Get });
//   }
//   //2) verify the token
//   const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

//   //3) check if token belonging user is available or not
//   const currentUser = await User.findById(decoded.id);

//   if (!currentUser) {
//     // res.status(401).json({
//     //   status: 'Error',
//     //   message: 'The token belonging user is no longer available',
//     // });
//     return new AppError("The token belonging user is no longer available", 401);
//   }

//   //  GRANT ACCESS TO THE USER
//   req.user = currentUser;
//   next();
// };

module.exports = { isUserAuthenticated, authorizeRoles };
