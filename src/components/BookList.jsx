import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList({ data }) {
  const [selected, setSelected] = useState("");

  if (data.loading) return <p>Loading...</p>;
  return (
    <div>
      <ul className="booklist">
        {data.books.map((book) => {
          return (
            <li key={book.id} onClick={() => setSelected(book.id)}>
              {book.name}
            </li>
          );
        })}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
