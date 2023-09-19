const {
  registerUser,
  loginUser,
  logoutUser,
  //   forgotPassword,
  //   resetPassword,
  getUserDetails,
  getAllUsers,
  getSingleUser,
  deleteUser,
} = require("../controllers/userController");
const {
  isUserAuthenticated,
  authorizeRoles,
} = require("../middleware/authMiddleware");
const checkUserRole = require("../middleware/roleMiddleware");

const userRoutes = (app) => {
  app.post("/api/register", registerUser);
  app.post("/api/login", loginUser);
  app.get("/api/logout", logoutUser);
  //   app.post("/api/password/forgot", forgotPassword);
  //   app.put("/api/password/reset/:token", resetPassword);
  app.get("/api/profile", isUserAuthenticated, getUserDetails);
  //   app.put("/api/password/change", isUserAuthenticated, changePassword);
  //   app.put("/api/profile/update", isUserAuthenticated, updateProfile);
  app.get(
    "/api/admin/users",
    isUserAuthenticated,
    authorizeRoles("GovAdmin"),
    getAllUsers
  );
  app.get(
    "/api/admin/user/:id",
    isUserAuthenticated,
    authorizeRoles("GovAdmin"),
    getSingleUser
  );
  //   app.put(
  //     "/api/admin/user/role/:id",
  //     isUserAuthenticated,
  //     authorizeRoles("GovAdmin"),
  //     updateUserRole
  //   );
  app.delete(
    "/api/admin/user/remove/:id",
    isUserAuthenticated,
    authorizeRoles("GovAdmin"),
    deleteUser
  );
};

module.exports = userRoutes;
