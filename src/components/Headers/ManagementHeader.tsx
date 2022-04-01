import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import PortfolioList from "share/components/portfolio/PortfolioList";

const ManagementHeader = () => {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile") || "")
  );
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/software-cover.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="align-items-center" fluid>
          <Row>
            <Col lg="5" md="5">
              <h4 className="display-2 text-white">
                Hello {user?.result?.name || "Cheems (GUEST)"}
              </h4>
              {/* <p className="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p> */}
              <Button
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Edit profile
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <PortfolioList />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ManagementHeader;
