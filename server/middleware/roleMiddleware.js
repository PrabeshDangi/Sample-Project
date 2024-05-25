const User = require("../models/userModel");

function checkUserRole(req, res, next) {
  // Assuming ywe have user information stored in the session or request object
  const userRole = req.User.role;
  console.log("USERROLE", userRole);
  // Check the user's role and redirect accordingly
  if (userRole === "Consumer") {
    res.redirect("/consumer");
  } else if (userRole === "Producer") {
    res.redirect("/producer");
  } else {
    // Handle other roles or unauthorized access as needed
    res.status(403).send("Access Forbidden");
  }
  next();
}

module.exports = checkUserRole;
