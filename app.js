//imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./Database");
const booksRouter = require("./api/books.routes");
const path = require("path");
//init
const app = express();
connectDB();
const PORT = process.env.PORT;

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/books", booksRouter);
app.use("/media", express.static(path.join(__dirname, "media")));

//Starting
app.listen(PORT, () => {
  console.log("Server is running");
});
