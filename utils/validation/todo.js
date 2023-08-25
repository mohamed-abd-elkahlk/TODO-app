const { check } = require("express-validator");
const ToDoList = require("../../modules/todo");
const validatorMiddlewer = require("../../middleware/validation");

const CreateValidator = [
  check("title")
    .notEmpty()
    .withMessage("title reqired")
    .isString()
    .withMessage("title should be a string")
    .custom((val, { req }) =>
      ToDoList.findOne({ title: val, user: req.body.user }).then((user) => {
        if (user) {
          console.log(user);
          return Promise.reject(new Error("title already exists"));
        }
      })
    ),
  validatorMiddlewer,
];
const UpdateValidator = [
  check("title").optional().isString().withMessage("title should be a string"),
  check("id")
    .isMongoId()
    .custom((vla, { req }) =>
      ToDoList.findOne({ _id: vla, user: req.body.user }).then((todo) => {
        console.log(todo);
        if (!todo) {
          return Promise.reject(
            new Error("check if this todo list belong to you")
          );
        }
      })
    ),
  validatorMiddlewer,
];

module.exports = { CreateValidator, UpdateValidator };
