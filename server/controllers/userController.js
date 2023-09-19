const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const sendToken = require("../utils/sendJwtToken");
// const genPwResetToken = require("../utils/genPwResetToken");
// const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

const registerUser = async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      avatar: {
        public_id: "Sample_id",
        url: "Sample_url",
      },
    });

    // Hash the password and save it in db
    const saltRounds = 10;
    const salt = bcrypt.genSalt(saltRounds);
    user.password = await bcrypt.hash(user.password, +salt);

    await user.save();

    sendToken(user, 201, res);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ message: "Please enter your email and password" });
    }

    const user = await User.findOne({ email: req.body.email });

    // Check if the given email and password is valid or not
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    const isValid = await bcrypt.compare(req.body.password, user.password);

    // Check if the password matches the user credentials for login
    if (!isValid) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    sendToken(user, 200, res);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      success: true,
      message: "Logged out successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// const forgotPassword = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     const resetToken = genPwResetToken(user);

//     // console.log("RESET TOKEN", resetToken);

//     await user.save();

//     const resetPasswordUrl = `${req.protocol}://${req.get(
//       "host"
//     )}/api/password/reset/${resetToken}`;

//     const message = `Your password reset token is:\n\n${resetPasswordUrl}\n\nIf you have not requested for this email, then please ignore it!`;

//     try {
//       await sendEmail({
//         email: user.email,
//         subject: "Ecommerce Password Recovery",
//         message,
//       });

//       res.status(200).json({
//         success: true,
//         message: `Email sent to ${user.email} successfully`,
//       });
//     } catch (err) {
//       user.resetPasswordToken = undefined;
//       user.resetPasswordExpire = undefined;

//       return res.status(500).json({
//         success: false,
//         message: err.message,
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// const resetPassword = async (req, res) => {
//   try {
//     const resetPasswordToken = crypto
//       .createHash("sha256")
//       .update(req.params.token)
//       .digest("hex");

//     const user = await User.findOne({
//       resetPasswordToken,
//       resetPasswordExpire: { $gt: Date.now() },
//     });

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "Reset password token is invalid or has been expired!",
//       });
//     }

//     if (req.body.password !== req.body.confirmPassword) {
//       return res.status(400).json({
//         success: false,
//         message: "Password and confirmation password does not match!",
//       });
//     }

//     // Use hashed password and save it in the database later
//     const saltRounds = 10;
//     const salt = bcrypt.genSalt(saltRounds);
//     user.password = await bcrypt.hash(user.password, +salt);

//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;

//     // console.log(user);

//     await user.save();

//     sendToken(user, 200, res);
//   } catch (error) {
//     return res.status(404).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

const getUserDetails = async (req, res) => {
  const user = await User.findById(req.user.id);

  user.password = undefined;

  res.status(200).json({
    success: true,
    user,
  });
};

// const changePassword = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);

//     const isPasswordMatched = await bcrypt.compare(
//       req.body.oldPassword,
//       user.password
//     );

//     if (!isPasswordMatched) {
//       return res.status(401).json({ message: "Invalid email or password!" });
//     }

//     if (req.body.newPassword !== req.body.confirmPassword) {
//       return res.status(400).json({
//         success: false,
//         message: "Password does not match",
//       });
//     }
//     const saltRounds = 10;
//     const salt = bcrypt.genSalt(saltRounds);
//     user.password = await bcrypt.hash(req.body.newPassword, +salt);

//     await user.save();

//     sendToken(user, 200, res);
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// const updateProfile = async (req, res) => {
//   try {
//     const newUserData = {
//       name: req.body.name,
//       email: req.body.email,
//     };

//     const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
//       new: true,
//       runValidators: true,
//       useFindAndModify: false,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Profile updated successfully!",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// For admin
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    users.forEach((obj) => (obj.password = undefined));

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with id: ${req.params.id} does not exist!`,
      });
    }

    user.password = undefined;

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateUserRole = async (req, res) => {
  try {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
    };

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with id: ${req.params.id} does not exist`,
      });
    }

    res.status(200).json({
      success: true,
      message: "User's role updated successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with id: ${req.params.id} does not exist`,
      });
    }

    await user.deleteOne();

    res.status(200).json({
      success: true,
      message: "User has been removed!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  //   forgotPassword,
  //   resetPassword,
  getUserDetails,
  //   changePassword,
  //   updateProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
};
