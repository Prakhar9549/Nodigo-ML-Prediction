import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-heskf6g5d7izzvbf.us.auth0.com"
    clientId="auaw2gfgUjWVdfdeYfQOvknBMqqfBAAy"
    redirectUri={URL"../../index.html"}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
