const router = require("express").Router();

const passport = require("passport");
const {
  delteToDoList,
  createToDoList,
  getToDoList,
  getToDoListById,
  updateToDoList,
  getToDoListForLogedUser,
  setUserData,
} = require("../services/todo.service");

// TODO: add some validation layer
const {
  CreateValidator,
  UpdateValidator,
} = require("../utils/validation/todo");
const { allowedTo, protect } = require("../services/auth.service");

router.use(
  passport.authenticate("jwt", { session: false }),
  protect,
  allowedTo("user")
);
router
  .route("/")
  .post(setUserData, CreateValidator, createToDoList)
  .get(setUserData, getToDoListForLogedUser);

router
  .route("/:id")
  .put(setUserData, UpdateValidator, updateToDoList)
  .get(getToDoListById)
  .delete(delteToDoList);

// router.use(allowedTo("admin"));
// router.route("/:id").put(updateToDoList).get(getToDoListById);
// router.route("/list").post(CreateValidator, createToDoList).get(getToDoList);
module.exports = router;
