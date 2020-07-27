import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

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
