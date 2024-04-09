// Routes for API
const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
// example data
//{
  //  "username": "lernantino",
    //"email": "lernantino@gmail.com"
  //}