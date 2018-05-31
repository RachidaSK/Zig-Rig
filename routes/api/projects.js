const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/project"
router.route("/")
  .get(projectController.findAll)
  .post(projectController.create);

router.route("/user/:userId")
  .get(projectController.findAll);

// Matches with "/api/project/:id"
router
  .route("/:id")
  .get(projectController.findById)
  .put(projectController.update)
  .delete(projectController.remove);

module.exports = router;
