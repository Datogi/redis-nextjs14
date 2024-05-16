import { connectMongo } from "@/utils/connectMongo";
import { Book } from "@/models/book"; // Assuming Book is a Mongoose model

export default async function handler(req, res) {
  try {
    await connectMongo();

    if (req.method !== "PUT") {
      return res.status(405).json({ error: "Method not allowed" }); // Handle non-PUT requests
    }

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

    const updatedBook = await Book.findOneAndUpdate(
      { _id },
      { publisher, title, description, image, comments, author, genre, age, pages, isbn, publishingYear, language },
      { new: true } // Return the updated document
    );

    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" }); // Handle not found case
    }

    return res.status(200).json({
      status: "success",
      data: { updatedBook },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
