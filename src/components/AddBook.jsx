import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";
import * as compose from "lodash.flowright";

class AddBook extends Component {
  state = {
    name: "",
    genre: "",
    authorId: "",
  };

  submitForm(event) {
    event.preventDefault();
  }

  render() {
    const data = this.props.getAuthorsQuery;
    return (
      <form className="addBook" onSubmit={this.submitForm.bind(this)}>
        <label>Book Name</label>
        <input
          type="text"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <label>Genre</label>
        <input
          type="text"
          onChange={(event) => this.setState({ genre: event.target.value })}
        />
        <label>Author</label>
        <select
          onChange={(event) => this.setState({ authorId: event.target.value })}
        >
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

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
