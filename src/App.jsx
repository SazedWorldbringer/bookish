import { Typography } from "@mui/material"
import axios from "axios";
import { useState } from "react";
import BookList from "./BookList";

const App = () => {
  const [books, setBooks] = useState([])

  useState(() => {
    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:8080/books");
      setBooks(res.data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookList books={books} />
    </div>
  )
}

export default App
