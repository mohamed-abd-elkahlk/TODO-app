const asyncHandler = require("express-async-handler");
const ToDoList = require("../modules/todo");
const factory = require("./handler.service");
const { ApiError, ApiFeatures } = require("../utils/utiles");
// OPTIMIZE: create list to save the todoes messions

const setUserData = asyncHandler(async (req, res, next) => {
  req.body.user = req.user._id.toString();
  next();
});
const createToDoList = factory.createOne(ToDoList);

const getToDoList = factory.getAll(ToDoList);

const getToDoListById = factory.getOne(ToDoList);

const updateToDoList = factory.updateOne(ToDoList);

const delteToDoList = factory.deleteOne(ToDoList);

const getToDoListForLogedUser = asyncHandler(async (req, res, next) => {
  const userId = req.body.user;
  const docCounts = await ToDoList.countDocuments();
  const apiFutures = new ApiFeatures(ToDoList.find({ user: userId }), req.query)
    .filter()
    .limitFildes()
    .pagenate(docCounts)
    .serch()
    .sort();
  const { mongooseQuery, pagenation } = apiFutures;
  const todo = await mongooseQuery;
  if (!todo) {
    return next(new ApiError("there is no todo list for this user"));
  }
  res.status(200).json({ results: todo.length, pagenation, data: todo });
});

module.exports = {
  delteToDoList,
  createToDoList,
  getToDoList,
  getToDoListById,
  updateToDoList,
  getToDoListForLogedUser,
  setUserData,
};
