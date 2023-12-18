import React, { useEffect, useState } from "react";
import BookCards from "../../components/BookCards";

const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-book")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <BookCards books={books} headLine="Best Seller Books"></BookCards>
    </div>
  );
};

export default FavoriteBooks;
