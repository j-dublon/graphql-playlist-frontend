import React from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../queries/queries";

function BookDetails(props) {
  const { book } = props.data;
  if (book) {
    return (
      <div className="bookDetails">
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All books by this author:</p>
        <ul>
          {book.author.books.map((book) => {
            return <li key={book.id}>{book.name}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return <div className="bookDetails none">Please select a book</div>;
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId,
      },
    };
  },
})(BookDetails);
