// BookCard.js

import Link from "next/link";
import React from "react";

const BookCard = ({ title, author, genre, age, description, _id, image }) => {
  return (
    <Link href={`/book/${_id}`}>
      <div
        key={title}
        className="group relative  transform transition-transform hover:scale-105"
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={image}
            alt={title}
            className="h-20 w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="">
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{author}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{genre}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
