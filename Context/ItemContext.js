"use client"
import { SessionProvider } from "next-auth/react";
import { createContext, useState } from "react";

export const ItemContext = createContext({
  books: [],
  setBooks: () => {},
  filteredArr: [],
  setFilteredArr: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
  page: 1,
  setPage: () => {},
});
export const ItemContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [page, setPage] = useState(1);

  const changeBooks = (books) => {
    setBooks(books);
  };
  const changeFilterArr = (arr) => {
    setFilteredArr(arr);
  };

  const changeAdmin = (status) => {
    setIsAdmin(status);
  };
  const changePage = (page) => {
    setPage(page);
  };
  return (
    <SessionProvider>
    <ItemContext.Provider
      value={{
        books: books,
        setBooks: changeBooks,
        filteredArr: filteredArr,
        setFilteredArr: changeFilterArr,
        isAdmin: isAdmin,
        setIsAdmin: changeAdmin,
        page: page,
        setPage: changePage,
      }}
    >
      {props.children}
    </ItemContext.Provider></SessionProvider>
  );
};
export default ItemContext;
