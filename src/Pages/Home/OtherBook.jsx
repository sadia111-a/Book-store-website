import { useEffect, useState } from "react";
import BookCards from "../../components/BookCards";

const OtherBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-book")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(3, 8)));
  }, []);
  return (
    <div className="text-center">
      <BookCards books={books} headLine="Other Books"></BookCards>
    </div>
  );
};

export default OtherBook;
