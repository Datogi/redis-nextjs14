import React from "react";

function Comment({ avatar, name, time, text }) {
  return (
    <div className="flex items-start p-3 space-x-4 mt-4 bg-gray-100 rounded-md">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-gray-500 text-sm">{time}</p>
        <p className="mt-1">{text}</p>
      </div>
    </div>
  );
}

export default Comment;
