// BookForm.js

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BookForm = () => {
  const [bookInfo, setBookInfo] = useState({
    title: "",
    author: "",
    genre: "",
    age: "",
    description: "",
    image: "",
    pages: "",
    isbn: "",
    publisher: "",
    publishingYear: "",
    language: "",
  });
  const addBooks = async (newbook) => {
    try {
      const res = await fetch(`http://localhost:3000/api/books`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newbook),
      });
      if (res.ok) {
        console.log("success");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
  const validateInputs = () => {
    // Check if any input field is empty
    for (const key in bookInfo) {
      if (bookInfo[key].trim() === "") {
        return false;
      }
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      setBookInfo({ ...bookInfo, _id: uuidv4() });
      console.log("Submitted Book Info:", bookInfo);

      const res = await fetch(`http://localhost:3000/api/books`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(bookInfo),
      });

      if (res.ok) {
        console.log("success");
        // Reset the form after successful submission
        /*  setBookInfo({
          title: "",
          author: "",
          genre: "",
          age: "",
          description: "",
          image: "",
          pages: "",
          isbn: "",
          publisher: "",
          publishingYear: "",
          language: "",
        });*/
      } else {
        throw new Error("Failed to create a book");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to add book. Please try again.");
    }
  };
  return (
    <div className="w-screen flex items-center justify-center bg-gray-100">
      <div className="w-3/5 bg-white p-8 rounded shadow-md m-4 ">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add Book Information
        </h2>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mx-auto mb-6   w-3/4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="title"
            >
              Title:
            </label>
            <input
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              name="title"
              value={bookInfo.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mx-auto w-3/4 mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="author"
            >
              Author:
            </label>
            <input
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              name="author"
              value={bookInfo.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mx-auto w-3/4 mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="genre"
            >
              Genre:
            </label>
            <select
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              name="genre"
              value={bookInfo.genre}
              onChange={handleChange}
            >
              <option value="">Select Genre</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              {/* Add more genre options */}
            </select>
          </div>

          <div className="mx-auto w-3/4 mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="age"
            >
              Age Group:
            </label>
            <select
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              name="age"
              value={bookInfo.age}
              onChange={handleChange}
            >
              <option value="">Select Age Group</option>
              <option value="children">Children</option>
              <option value="young-adult">Young Adult</option>
              <option value="adult">Adult</option>
            </select>
          </div>

          <div className="mx-auto w-3/4 mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="description"
            >
              Description:
            </label>
            <textarea
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              name="description"
              value={bookInfo.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mx-auto w-3/4 mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="image"
            >
              Image URL:
            </label>

            <input
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              name="image"
              value={bookInfo.image}
              onChange={handleChange}
            />
          </div>

          <div className="mx-auto w-3/4 mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="pages"
            >
              Pages:
            </label>
            <input
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              name="pages"
              value={bookInfo.pages}
              onChange={handleChange}
            />
          </div>

          <div className="mx-auto w-3/4 mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="isbn"
            >
              ISBN:
            </label>
            <input
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              name="isbn"
              value={bookInfo.isbn}
              onChange={handleChange}
            />
          </div>

          <div className="mx-auto w-3/4 mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="publisher"
            >
              Publisher:
            </label>
            <input
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              name="publisher"
              value={bookInfo.publisher}
              onChange={handleChange}
            />
          </div>

          <div className="mx-auto w-3/4 mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="publishingYear"
            >
              Publishing Year:
            </label>
            <input
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              name="publishingYear"
              value={bookInfo.publishingYear}
              onChange={handleChange}
            />
          </div>

          <div className="mx-auto w-3/4 mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="language"
            >
              Language:
            </label>
            <input
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              name="language"
              value={bookInfo.language}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end mb-6">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
              type="submit"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
