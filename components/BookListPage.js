// BookListPage

import React, { useContext, useEffect, useState } from "react";
import BookCard from "./BookCard";
import Pagination from "./Pagination";
import ItemContext from "@/Context/ItemContext";

const BookListPage = () => {
  const ctx = useContext(ItemContext);
  const [genreFilter, setGenreFilter] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [titleFilter, setTitleFilter] = useState("");

  useEffect(() => {
    const filteredBooks = ctx.books.filter((book) => {
      if (
        (titleFilter === "" ||
          book.title.toLowerCase().includes(titleFilter.toLowerCase())) &&
        (genreFilter === "" ||
          book.genre.toLowerCase() === genreFilter.toLowerCase()) &&
        (authorFilter === "" ||
          book.author.toLowerCase().includes(authorFilter.toLowerCase())) &&
        (ageFilter === "" || book.age.toLowerCase() === ageFilter.toLowerCase())
      ) {
        return book;
      }
    });
    ctx.filteredArr.length != filteredBooks.length && ctx.setPage(1);
    ctx.setFilteredArr(filteredBooks);
    console.log(filteredBooks.keys());
  }, [genreFilter, authorFilter, ageFilter, titleFilter]);
  const genres = [
    "Fiction",
    "Dystopian",
    "Classic",
    "Coming-of-Age",
    "Fantasy",
    "Romance",
    "Post-Apocalyptic",
    "Horror",
    "Epic",
    "Gothic",
    "Magical Realism",
    "Philosophical",
    "Science Fiction",
    "Non-Fiction",
    "Thriller",
  ];

  return (
    <div className="w-screen bg-orange-200 text-white">
      <div className="p-4 max-w-screen-md mx-auto">
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-3 border rounded-md placeholder-white text-gray-800 bg-white text-center focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            placeholder="Search by Book Title"
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Genre
            </label>
            <select
              className="w-full p-3 border rounded-md text-gray-800 bg-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              onChange={(e) => setGenreFilter(e.target.value)}
            >
              <option value="">none</option>
              {genres.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Author
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-md placeholder-gray-500 text-gray-800 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              placeholder="Filter by Author"
              value={authorFilter}
              onChange={(e) => setAuthorFilter(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Age
            </label>
            <select
              className="w-full p-3 border rounded-md text-gray-800 bg-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              onChange={(e) => setAgeFilter(e.target.value)}
            >
              <option value="Adult">Adult</option>
              <option value="Young Adult">Child</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-orange-200">
        <div className="w-11/12 mx-auto mt-8 p-4 shadow-lg rounded-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {ctx.filteredArr.length > 0 ? (
              ctx.filteredArr
                .slice((ctx.page - 1) * 10, (ctx.page - 1) * 10 + 10)
                .map((book, index) => <BookCard key={book._id} {...book} />)
            ) : (
              <p className="text-gray-600">No matching books found.</p>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-2 mx-3 h-20">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default BookListPage;
