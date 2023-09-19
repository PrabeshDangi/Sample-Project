const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config({ path: "config/config.env" });

const genAuthToken = (user) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const jwtExpirationTime = process.env.JWT_EXPIRATION_TIME;
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    },
    jwtSecretKey,
    { expiresIn: jwtExpirationTime }
  );

  return token;
};

module.exports = genAuthToken;
