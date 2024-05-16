import React, { useState } from "react";

export default function AddCommentUser({ onAddComment }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation or checks here before adding the comment
    if (comment.trim() === "") {
      alert("Please enter  comment.");
      return;
    }

    // Create a new comment object
    const newComment = {
      text: comment,
      time: new Date().toLocaleString(),
    };

    // Pass the new comment to the parent component
    onAddComment(newComment);

    // Clear the form inputs

    setComment("");
  };

  return (
    <div className="mb-4 ">
      <h2 className="text-2xl font-bold mb-4">Add Your Comment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-3 border rounded-md placeholder-gray-500 text-gray-800 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            placeholder="Enter your comment"
            rows="4"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}
