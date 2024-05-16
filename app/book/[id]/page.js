"use client"

import ItemContext from "@/Context/ItemContext";
import AddCommentUser from "@/components/AddComment";
import BookDescription from "@/components/BookDescription";
import Comment from "@/components/Comment";
import { signIn, useSession } from "next-auth/react";

import React, { useContext, useEffect, useState } from "react";

function DetailsScreen() {
  const [id, setId] = useState(null);
  const ctx = useContext(ItemContext);
  const [book, setBook] = useState();
  const { data: session } = useSession();

  useEffect(() => {
    setId(window.location.href.split("/")[4]);
    console.log(window.location.href.split("/")[4]);

    ctx.books.length > 0
      ? setBook(
          ctx.books.find((el) => el._id == window.location.href.split("/")[4])
        )
      : getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/books").then((res) =>
        res.json()
      );

      ctx.setBooks(res.books);
      ctx.setFilteredArr(res.books);

      setBook(
        res.books.find((el) => el._id == window.location.href.split("/")[4])
      );
    } catch (error) {
      console.log(error);
    }
  };

  function handleComment(newComment) {
    newComment = {
      ...newComment,
      name: session.user.name,
      userImage: session.user.image,
    };
    const updatedComments = [...book.comments, newComment];
    console.log(updatedComments);
    const newbook = { ...book, comments: [...book.comments, newComment] };
    console.log(newbook);
    editBooks(newbook);
  }

  const editBooks = async (newbook) => {
    try {
      const res = await fetch(`http://localhost:3000/api/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newbook),
      });
      if (res.ok) {
        setBook(newbook);
        console.log(book);
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="z-50">
      <BookDescription book={book} />
      <div className="flex justify-center bg-blue-100">
        <div className="container my-8 mx-5 p-6 border-2 w-11/12 bg-gradient-to-b ">
          <div className="mb-4"></div>
          {ctx.isAdmin ? (
            <AddCommentUser onAddComment={handleComment} />
          ) : (
            <div className="flex items-center justify-center bg-gray-100">
              <div className="text-center p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  You must sign in to post a comment
                </h2>
                <p className="text-gray-600 mb-8">
                  Sign in to your account to join the conversation and share
                  your thoughts.
                </p>
                <button
                  onClick={signIn}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Sign In
                </button>
              </div>
            </div>
          )}
          {book?.comments?.length > 0 ? (
            book.comments.map((comment, index) => (
              <Comment
                key={index}
                avatar={comment.userImage}
                name={comment.name}
                time={comment.time}
                text={comment.text}
              />
            ))
          ) : (
            <p className="text-gray-600">There is no comments.</p>
          )}

          {/* Add more comments as needed */}
        </div>
      </div>
    </div>
  );
}

export default DetailsScreen;
