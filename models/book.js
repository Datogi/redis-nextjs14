import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  _id: { type: String, unique: true, required: true },
  publisher: String,

  title: String,
  description: String,

  image: String,

  comments: Array,

  author: String,

  genre: String,
  age: String,

  pages: Number,

  isbn: String,

  publishingYear: Number,

  language: String,
});

const Book = mongoose.models.Books || mongoose.model("Books", bookSchema);
export default Book;
