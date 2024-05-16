import Book from "@/models/book";
import connectMongo from "@/utils/connectMongo";
import { client } from "@/utils/connectRedis";
import { NextResponse } from "next/server";

export async function GET() {
  if (!client.isOpen) {
    try {
      await client.connect();
    } catch (error) {
      console.error("Error connecting to Redis:", error);
      // Use NextResponse here for a proper response
      return NextResponse.json({ message: "Error connecting to cache" });
    }
  }

  const cachedValue = await client.get("books");
  if (cachedValue) {
    return NextResponse.json({ books: JSON.parse(cachedValue) });
  }

  console.log(cachedValue);
  await connectMongo();
  const books = await Book.find({});
  await client.set("books", JSON.stringify(books));
  // Use the correct object (books) here
  return NextResponse.json({ books });
}

export async function POST() {
  await connectMongo();

  const {
    _id,
    publisher,
    title,
    description,
    image,
    comments,
    author,
    genre,
    age,
    pages,
    isbn,
    publishingYear,
    language,
  } = req.body;

  const newBook = await Book.create({
    _id,
    publisher,
    title,
    description,
    image,
    comments,
    author,
    genre,
    age,
    pages,
    isbn,
    publishingYear,
    language,
  });

  return NextResponse.status(201).json({
    status: "success",
    message: "Data was created",
    book: newBook,
  });
}
