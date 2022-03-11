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
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  Form,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Button,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const CryptoNews = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1 mb-5 mb-xl-0" xl="3">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    Jessica Jones
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                  <hr className="my-4" />
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-2" xl="9">
            <Card className="bg-secondary shadow mb-3">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="9">
                    <h3 className="mb-0">Title 12333333333333333333333333333333333333333333333333333333333333333333333333333333333333333</h3>
                  </Col>
                  <Col className="text-right" xs="3">
                    {/* <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6> */}
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-ellipsis-h" />
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="8">
                    <p className="mb-4">Content 1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <div className="align-items-center d-flex text-sm">
                      <a
                        className="avatar avatar-sm"
                        href="#pablo"
                        id="tooltip742438047"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={
                            require("../../assets/img/theme/team-1-800x800.jpg")
                              .default
                          }
                        />
                      </a>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip742438047"
                      >
                        Ryan Tompson
                      </UncontrolledTooltip>
                      <span className="post-info-dot">~</span>
                      <span>Tue 12/07/2021</span>
                      <span className="post-info-dot">~</span>
                      <span>1m read</span>

                    </div>
                  </Col>
                  <Col className="text-right" xs="4">
                    {/* <div className="card"
                    >
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="card-img-top"
                          src={
                            require("../../assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </a>
                    </div> */}

                    <div 
                    className="thumnail-image"
                    >
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          // className="rounded-circle"
                          src={
                            require("../../assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Card className="bg-secondary shadow mb-3">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="9">
                    <h3 className="mb-0">Title 1</h3>
                  </Col>
                  <Col className="text-right" xs="3">
                    {/* <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6> */}
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-ellipsis-h" />
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="8">
                    <p className="mb-4">Content 1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <div className="align-items-center d-flex text-sm">
                      <a
                        className="avatar avatar-sm"
                        href="#pablo"
                        id="tooltip742438047"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={
                            require("../../assets/img/theme/team-1-800x800.jpg")
                              .default
                          }
                        />
                      </a>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip742438047"
                      >
                        Ryan Tompson
                      </UncontrolledTooltip>
                      <span className="post-info-dot">~</span>
                      <span>Tue 12/07/2021</span>
                      <span className="post-info-dot">~</span>
                      <span>1m read</span>

                    </div>
                  </Col>
                  <Col className="text-right" xs="4">
                    {/* <div className="card thumnail-image"
                    >
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="card-img-top"
                          src={
                            require("../../assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </a>
                    </div> */}

                    <div 
                    className="thumnail-image"
                    >
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          // className="rounded-circle"
                          src={
                            require("../../assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>


        {/* Latest News Table */}
          {/* <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <div className="d-flex">
                  <h3 className="mb-0 mr-auto">Latest News</h3>

                  <div className="custom-control custom-control-alternative custom-radio mb-3 mr-3">
                    <input
                      className="custom-control-input"
                      id="customRadio1"
                      name="custom-radio-1"
                      type="radio"
                    />
                    <label className="custom-control-label" htmlFor="customRadio1">
                      Today
                    </label>
                  </div>
                  <div className="custom-control custom-control-alternative custom-radio mb-3">
                    <input
                      className="custom-control-input"
                      defaultChecked
                      id="customRadio2"
                      name="custom-radio-1"
                      type="radio"
                    />
                    <label className="custom-control-label" htmlFor="customRadio2">
                      7 days
                    </label>
                  </div>
                </div>
                
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Status</th>
                    <th scope="col">Users</th>
                    <th scope="col">Completion</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={
                              require("../../assets/img/theme/bootstrap.jpg")
                                .default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Argon Design System
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$2,500 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        pending
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip742438047"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-1-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip742438047"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip941738690"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-2-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip941738690"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip804044742"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-3-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip804044742"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip996637554"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../../assets/img/theme/team-4-800x800.jpg")
                                .default
                            }
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip996637554"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div> */}
        </Row>
      </Container>
    </>
  );
};

export default CryptoNews;
