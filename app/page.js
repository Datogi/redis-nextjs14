"use client"
import { useContext, useEffect, useState } from "react";
import ItemContext from "@/Context/ItemContext";
import { Oval } from "react-loader-spinner";
import BookListPage from "@/components/BookListPage";

export default function Home() {
  const ctx = useContext(ItemContext);
  const [loading, isLoading] = useState(!ctx.books.length > 0);

  const getBooks = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/books").then((res) =>
        res.json()
      );
      console.log(JSON.stringify(res.books) );
      ctx.setBooks(res.books);
      ctx.setFilteredArr(res.books);
      isLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    ctx.books.length <= 0 && getBooks();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center  w-screen h-screen">
          <Oval
            height={80}
            width={80}
            color="orange-200"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#2658ceeb"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <div className="h-screem z-20 bg-orange-200">
          <BookListPage />
        </div>
      )}
    </>
  );
}