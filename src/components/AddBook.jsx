import React, { useState } from "react";
import { graphql } from "react-apollo";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";
import * as compose from "lodash.flowright";

function AddBook(props) {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  function submitForm(event) {
    event.preventDefault();
    props.addBookMutation({
      variables: {
        name: name,
        genre: genre,
        authorId: authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  }

  const data = props.getAuthorsQuery;

  return (
    <form className="addBook" onSubmit={submitForm}>
      <div className="addBook__field">
        <label>Book Name:</label>
        <input type="text" onChange={(event) => setName(event.target.value)} />
      </div>

      <div className="addBook__field">
        <label>Genre:</label>
        <input type="text" onChange={(event) => setGenre(event.target.value)} />
      </div>

      <div className="addBook__field">
        <label>Author:</label>
        <select onChange={(event) => setAuthorId(event.target.value)}>
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
      </div>

      <button> + </button>
    </form>
  );
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
