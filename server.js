const express = require("express");

const app = express();
const morgan = require("morgan");
const passport = require("passport");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { ApiError } = require("./utils/utiles");
const globalError = require("./middleware/Error");
const dbConnection = require("./config/db");
// init our enviroment varibals
require("dotenv").config({
  path: "./.env/config.env",
});

//db conncetion
dbConnection();

// mildllwere
if (process.env.NODE_ENV === "devlopment") {
  app.use(morgan("dev"));
}
passport.use(require("./config/passport"));

app.use(passport.initialize());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: "self",
      scriptSrc: "self",
      styleSrc: "self",
    },
    useDefaults: true,
  })
);
/*
 * It can help to protect against a variety of attacks, including XSS, CSRF, and clickjacking.
 * It can help to improve the security of your web application without negatively impacting performance.
 * It can help to comply with security regulations, such as PCI DSS and HIPAA.
 */

app.use(express.json());
app.use(cookieParser());

// routes
const todoRoutes = require("./routes/todo.routes");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

app.use("/api/todo", todoRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.get("/", (req, res) => {
  res.send("hellow app");
});

// routes that are not found in app

app.all("*", (req, res, next) => {
  next(new ApiError(`can't find this route: ${req.originalUrl}`, 404));
});
// err handling
app.use(globalError);
const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`app run on: http://localhost:${port}`);
});

// handle error outside express
process.on("unhandledRejection", (err) => {
  console.log(`unhandledRejection Errors ${err.name} || ${err.message}`);
  server.close(() => {
    console.error(`Shtuing down...!`);
    process.exit(1);
  });
});
