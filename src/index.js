import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "react-bootstrap-typeahead/css/Typeahead.css";

import AdminLayout from "layouts/Admin.js";
import CryptoLayout from "layouts/Crypto.js";
import AuthLayout from "layouts/Auth.js";
import PostLayout from "layouts/Post.js";
import SingleLayout from "layouts/Single.js";

import { Provider } from "react-redux";
import store from "./redux/store";
import IsAuthenticated from "helpers/IsAuthenticated";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/management" render={(props) => <AdminLayout {...props} />} />

        <Route path="/crypto" render={(props) => <CryptoLayout {...props} />} />

        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/post" render={(props) => <PostLayout {...props} />} />
        <Route path="/single" render={(props) => <SingleLayout {...props} />} />
        {IsAuthenticated() ? (
          <Redirect from="/" to="/admin/index" />
        ) : (
          <Redirect from="/" to="/auth/login" />
        )}
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
