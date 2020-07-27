import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

class AddBook extends Component {
  render() {
    const { data } = this.props;
    return (
      <form className="addBook">
        <label>Book Name</label>
        <input type="text" />
        <label>Genre</label>
        <input type="text" />
        <label>Author</label>
        <select>
          {data.loading ? (
            <option disabled>Loading authors...</option>
          ) : (
            data.authors.map((author) => {
              return (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              );
            })
          )}
        </select>
        <button> + </button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
