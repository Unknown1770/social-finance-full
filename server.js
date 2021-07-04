require("dotenv").config();

// NodeJs Core modules
const path = require("path");

// External Libraries
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

// Initializing the app
const app = express();

// Connecting to a loca instance of mongodb
mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// Settingup various configrations in multer
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null,  file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Setting up various parsers to parse the request'
app.use(express.static(path.join(__dirname, "build")));
// app.use('/images', express.static(path.join(__dirname, "images")));
app.use('/images',express.static('images'));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "1mb" }));
// using multer to parse nultipart form data
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single("image"));

// User Track
// req.user

// Importing Routes
const loginRoutes = require("./routes/login");
const postRoutes = require("./routes/posts");
const snfRoutes = require('./routes/searchAndFollow');
const likePostRoutes = require('./routes/likePosts');
const commentRoutes = require('./routes/comments');
const profileRoutes = require('./routes/profile');

app.use(loginRoutes);
app.use(postRoutes);
app.use(snfRoutes);
app.use(likePostRoutes);
app.use(commentRoutes);
app.use(profileRoutes);

app.get("/", (req, res, next) => {
  res.sendFile("./index.html");
});

app.listen(5000, () => {
  console.log("Server started at port 5000");
});
