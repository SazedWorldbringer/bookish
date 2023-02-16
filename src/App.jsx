import { Typography } from "@mui/material"

function App() {
  const books = [{ name: "Refactoring" }, { name: "Domain-driven design" }];

  const renderBooks = (books) => {
    return <div data-test="book-list">
        {books.map((book, id) => (
          <div key={id} className="book-item">
            <h2 className="title">{book.name}</h2>
          </div>
        ))}
      </div>;
  }

  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      {renderBooks(books)}
    </div>
  )
}

export default App
