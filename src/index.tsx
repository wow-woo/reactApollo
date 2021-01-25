import { ApolloProvider } from "@apollo/client";
import { render } from "react-dom";
import { client } from "./apollo-client";

import App from "./App";

const rootElement = document.getElementById("root");

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , rootElement);
