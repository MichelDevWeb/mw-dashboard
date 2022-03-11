/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import PostsNavbar from "components/Navbars/PostsNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import PostContent from "views/examples/PostContent";

import routes from "routes.js";
import LoveStory from "views/single/LoveStory";

const Single = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  // const getRoutes = (routes) => {
  //   alert(JSON.stringify(routes))
  //   return routes.map((prop, key) => {
  //     if (prop.layout === "/post") {
  //       return (
  //         <Route
  //           path={prop.layout + prop.path}
  //           component={prop.component}
  //           key={key}
  //         />
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  // };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <LoveStory />
      </div>
      {/* <AuthFooter /> */}
    </>
  );
};

export default Single;
