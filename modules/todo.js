const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title required !"],
  },
  description: {
    type: String,
    required: true,
  },
  due_date: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["TODO", "IN_PROGRESS", "DONE"],
    default: "TODO",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const ToDoList = mongoose.model("todo", ToDoSchema);

module.exports = ToDoList;
