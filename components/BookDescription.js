import Link from "next/link";
import React from "react";

function BookDescription({ book }) {
  return (
    <div className="flex  flex-col lg:flex-row p-8 bg-gradient-to-r from-blue-400 via-blue-500 to-teal-500 relative">
      <Link
        href="/"
        className="text-white hover:underline absolute left-3 top-4"
      >
        ← Back
      </Link>
      <div className="lg:w-1/3 m-4 py-2 justify-center">
        <img
          className="object-cover w-full h-full rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
          src={book?.image}
          alt={book?.title}
        />
      </div>
      <div className="lg:w-7/12 mt-5 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
        <div className="flex flex-col lg:flex-row items-center mb-4">
          <h2 className="text-4xl font-bold font-serif text-gray-800 mb-2 lg:mb-0 lg:mr-4">
            {book?.title}
          </h2>
          <h4 className="text-lg font-extralight text-gray-600">
            {book?.author}
          </h4>
        </div>
        <div className="w-full mb-8 lg:w-11/12">
          <p className="text-gray-700">{book?.description}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <label className="font-bold text-gray-800">Age:</label>
            <div className="ml-2 text-gray-600">{book?.age}</div>
          </div>
          <div className="flex items-center">
            <label className="font-bold text-gray-800">Genre:</label>
            <div className="ml-2 text-gray-600">{book?.genre}</div>
          </div>
          <div className="flex items-center">
            <label className="font-bold text-gray-800">Pages:</label>
            <div className="ml-2 text-gray-600">{book?.pages}</div>
          </div>
          <div className="flex items-center">
            <label className="font-bold text-gray-800">ISBN:</label>
            <div className="ml-2 text-gray-600">{book?.isbn}</div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <label className="font-bold text-gray-800">Publisher:</label>
          <div className="ml-2 text-gray-600">{book?.publisher}</div>
        </div>
        <div className="flex items-center">
          <label className="font-bold text-gray-800">Publishing Year:</label>
          <div className="ml-2 text-gray-600">{book?.publishingYear}</div>
        </div>
      </div>
    </div>
  );
}

export default BookDescription;
