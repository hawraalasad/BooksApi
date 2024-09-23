const express = require("express");
const {
  getAllBooks,
  createBook,
  getOneBook,
  deleteBook,
  updateBook,
} = require("./books.controllers");
const upload = require("../middleware/multer");
const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.get("/:id", getOneBook);
booksRouter.post("/", upload.single("Image"), createBook);
booksRouter.delete("/:id", deleteBook);
booksRouter.put("/:id", updateBook);

module.exports = booksRouter;
