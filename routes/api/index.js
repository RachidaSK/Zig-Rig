const router = require("express").Router();
const projectRoutes = require("./projects");
// const userRoutes = require("./user");
const loadRoutes = require("./loads");


// project routes
router.use("/project", projectRoutes);

// user routes
// router.use("/user", userRoutes);

// load routes
router.use("/template", loadRoutes);

module.exports = router;
