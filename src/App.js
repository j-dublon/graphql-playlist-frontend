import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <header className="main__header">
          <img
            src={require("./logo.png")}
            className="main__header__logo"
            alt="logo"
          />
          <h1>Jodi's Book List</h1>
        </header>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
