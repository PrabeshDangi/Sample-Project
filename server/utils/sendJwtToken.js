const genAuthToken = require("./genAuthToken");

const sendToken = (user, statusCode, res) => {
  const token = genAuthToken(user);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, cookieOptions).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
