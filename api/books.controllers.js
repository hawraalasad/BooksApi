const { response } = require("express");
const BookSchema = require("../Models/BookSchema");

const getAllBooks = async (request, response) => {
  try {
    const books = await BookSchema.find();
    return response.status(200).json({ data: books });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: error });
  }
};

const getOneBook = async (req, response, next) => {
  try {
    const { id } = req.params;
    const foundBook = await BookSchema.findById();
    return response.status(200).json({ data: foundBook });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: error });
  }
};

const createBook = async (request, response) => {
  try {
    const bookInfo = request.body;
    request.body.Image = `http://localhost:8000/media/${request.file.filename}`;
    const newBook = await BookSchema.create(bookInfo);
    return response.status(201).json({ data: newBook });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: error });
  }
};

const updateBook = async (request, response, next) => {
  try {
    const { id } = req.params;
    const updatedBook = await BookSchema.findByIdAndUpdate(id, request.body);
    return response.status(200).json({ data: updatedBook });
  } catch (error) {
    next(error);
    console.log(error);
    return response.status(500).json({ error: error });
  }
};

const deleteBook = async (req, response, next) => {
  try {
    const { id } = req.params;
    const deletedBook = await BookSchema.findByIdAndDelete(id);
  } catch (error) {
    next(error);
    console.log(error);
    return response.status(500).json({ error: error });
  }
};

module.exports = {
  getAllBooks,
  createBook,
  getOneBook,
  deleteBook,
  updateBook,
};
