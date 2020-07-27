import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

class BookList extends Component {
  state = {
    selected: null,
  };

  updateSelected(id) {
    this.setState({ selected: id });
  }

  render() {
    const { data } = this.props;
    console.log(this.state);
    if (data.loading) return <p>Loading...</p>;
    return (
      <div>
        <ul className="booklist">
          {data.books.map((book) => {
            return (
              <li key={book.id} onClick={() => this.updateSelected(book.id)}>
                {book.name}
              </li>
            );
          })}
        </ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
