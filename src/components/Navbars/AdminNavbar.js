// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import authSlice from "redux/authSlice";

const AdminNavbar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logoutHandler = () => {
    console.log("logout");
    dispatch(authSlice.actions.logout());

    history.push("/auth/login");
    setUser(null);
  };

  // Token Expired
  const token = user?.token;

  if (token) {
    const decodedToken = decode(token);

    if (decodedToken.exp * 1000 < new Date().getTime()) logoutHandler();
  }

  // useEffect(() => {
  //   const token = user?.token;

  //   if (token) {
  //     const decodedToken = decode(token);

  //     if (decodedToken.exp * 1000 < new Date().getTime()) logoutHandler();
  //   }

  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, []);

  const handleDropdownProfile = (isAuthenticated) => {
    return isAuthenticated ? (
      <>
        <DropdownItem className="noti-title" header tag="div">
          <h6 className="text-overflow m-0">Welcome!</h6>
        </DropdownItem>
        <DropdownItem to="/admin/user-profile" tag={Link}>
          <i className="ni ni-single-02" />
          <span>My profile</span>
        </DropdownItem>
        <DropdownItem to="/admin/user-profile" tag={Link}>
          <i className="ni ni-settings-gear-65" />
          <span>Settings</span>
        </DropdownItem>
        <DropdownItem to="/admin/user-profile" tag={Link}>
          <i className="ni ni-calendar-grid-58" />
          <span>Activity</span>
        </DropdownItem>
        <DropdownItem to="/admin/user-profile" tag={Link}>
          <i className="ni ni-support-16" />
          <span>Support</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem tag="button" onClick={logoutHandler}>
          <i className="ni ni-user-run" />
          <span>Logout</span>
        </DropdownItem>
      </>
    ) : (
      <>
        <DropdownItem className="noti-title" header tag="div">
          <h6 className="text-overflow m-0">Welcome!</h6>
        </DropdownItem>
        <DropdownItem to="/auth/login" tag={Link}>
          <i className="fas fa-sign-in-alt" />
          <span>Sign In</span>
        </DropdownItem>
        <DropdownItem to="/auth/register" tag={Link}>
          <i className="fas fa-user-plus" />
          <span>Sign Up</span>
        </DropdownItem>
      </>
    );
  };

  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={
                        user?.result?.imageUrl ||
                        require("../../assets/img/avatar-default.png").default
                      }
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      {user?.result?.name || "Cheems (GUEST)"}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu
                container="body"
                className="dropdown-menu-arrow"
                right
              >
                {handleDropdownProfile(user?.token && user?.result)}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
