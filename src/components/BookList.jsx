import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

class BookList extends Component {
  render() {
    const { data } = this.props;
    if (data.loading) return <p>Loading...</p>;
    return (
      <div>
        <ul className="booklist">
          {data.books.map((book) => {
            return <li key={book.id}>{book.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
