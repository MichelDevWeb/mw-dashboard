import React from "react";
import { useLocation, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import CryptoFooter from "components/Footers/CryptoFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import getRoutes from "helpers/getRoutes";

const Admin = (props) => {

  // Filter route not show in sidebar
  const routesSidebar = () => routes.filter(route => { return route.path === "/index" || (route.layout === "/crypto" && route.isCrypto)});
  
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routesSidebar()}
        // routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/argon-react.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes, "/crypto")}
          <Redirect from="*" to="/crypto" />
        </Switch>
        <Container fluid>
          <CryptoFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
