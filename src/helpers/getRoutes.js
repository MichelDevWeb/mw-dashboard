import React from "react";
import { Route } from "react-router-dom";

const getRoutes = (routes, layout) => {
  return routes.map((prop, key) => {
    if (prop.layout === layout) {
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
};

export default getRoutes;
