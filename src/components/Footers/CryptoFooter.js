import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as NavLinkRRD } from "react-router-dom";

const CryptoFooter = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="https://www.facebook.com/michel.nguyen567"
              rel="noopener noreferrer"
              target="_blank"
            >
              Micheo World - Crypto
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink to={"/crypto/home"} tag={NavLinkRRD}>
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to={"/crypto/exchanges"} tag={NavLinkRRD}>
                Exchanges
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to={"/crypto/news"} tag={NavLinkRRD}>
                News
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default CryptoFooter;
