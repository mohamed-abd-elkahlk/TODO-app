// eslint-disable-next-line import/no-extraneous-dependencies
require("colors");
const path = require("path");
const dotenv = require("dotenv");
const User = require("../../modules/user");
const TodoList = require("../../modules/todo");
const dbConnection = require("../../config/db");

const envPath = path.join(__dirname, "../../.env/config.env");
dotenv.config({ path: envPath });

// connect to DB
dbConnection();
// Read users
const users = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@example.com",
    password: "password123",
    isVarvaid: true,
  },
  {
    first_name: "admin",
    last_name: "admin",
    email: "admin@admin.com",
    password: "admin",
    isVarvaid: true,
    role: "admin",
  },
  {
    first_name: "Jane",
    last_name: "Doe",
    email: "janedoe@example.com",
    password: "password123",
    isVarvaid: true,
    active: false,
  },
  {
    first_name: "Mary",
    last_name: "Smith",
    email: "marysmith@example.com",
    password: "password123",
    isVarvaid: true,
  },
];

// read todo lists
const todo = [
  {
    title: "Buy groceries",
    description: "Milk, eggs, bread, cheese",
    due_date: new Date("2023-03-08"),
    status: "TODO",
    user: "64e875d0f102b0d78236b456",
  },
  {
    title: "Clean the house",
    description: "Sweep, mop, dust, vacuum",
    due_date: new Date("2023-03-09"),
    status: "IN_PROGRESS",
    user: "64e875d0f102b0d78236b456",
  },
  {
    title: "Write a blog post",
    description: "About my recent trip to Paris",
    due_date: new Date("2023-03-10"),
    status: "DONE",
    user: "64e875d0f102b0d78236b456",
  },
  {
    title: "Call the doctor",
    description: "Make an appointment for a checkup",
    due_date: new Date("2023-03-11"),
    status: "TODO",
    user: "64e875d0f102b0d78236b456",
  },
  {
    title: "Plan a vacation",
    description: "Find a place to go, book flights and hotels",
    due_date: new Date("2023-03-12"),
    status: "IN_PROGRESS",
    user: "64e875d0f102b0d78236b458",
  },
  {
    title: "Learn a new skill",
    description: "Sign up for a class or find a tutorial online",
    due_date: new Date("2023-03-13"),
    status: "TODO",
    user: "64e875d0f102b0d78236b458",
  },
  {
    title: "Start a new project",
    description: "Brainstorm ideas and come up with a plan",
    due_date: new Date("2023-03-14"),
    status: "IN_PROGRESS",
    user: "64e875d0f102b0d78236b458",
  },
  {
    title: "Get organized",
    description:
      "Declutter your space and create a system for staying on top of things",
    due_date: new Date("2023-03-15"),
    status: "TODO",
    user: "64e875d0f102b0d78236b458",
  },
];

// Insert data into DB
const insertUsers = async () => {
  try {
    await User.create(users);
    console.log("Data Inserted".green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const insertData = async () => {
  try {
    await TodoList.create(todo);
    console.log("Data Inserted".green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delete data from DB
const destroyData = async () => {
  try {
    await User.deleteMany();
    await TodoList.deleteMany();
    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// node seeder.js -d
if (process.argv[2] === "-users") {
  insertUsers();
} else if (process.argv[2] === "-todo") {
  insertData();
} else if (process.argv[2] === "-d") {
  destroyData();
} else {
  console.log(`there are an error in the command you typed`.red.inverse);
  process.exit(1);
}
