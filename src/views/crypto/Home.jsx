import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import CryptoHeader from "components/Headers/CryptoHeader.js";
import { Cryptocurrencies, News } from "../crypto";

const Home = () => {
  return (
    <>
      <CryptoHeader display={{ showCryptoStats: true }} />
      {/* Page content */}
      <Container className="mt--5" fluid>
        <Row>
          <Col className="order-xl-2">
            {/* Top 10 Cryptocurrencies */}
            <Card className="bg-secondary shadow mb-3">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="9">
                    <h3 className="mb-0">Top 10 Cryptocurrencies</h3>
                  </Col>
                  <Col className="text-right" xs="3">
                    <span className="heading-small text-muted align-items-center">
                      <Link to="/crypto/cryptocurrencies">Show more</Link>
                    </span>
                    {/* <UncontrolledDropdown>
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
                          Show more
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
                    </UncontrolledDropdown> */}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <Cryptocurrencies simplified />
                </Row>
              </CardBody>
            </Card>

            {/* Latest Crypto News */}
            <Card className="bg-secondary shadow mb-3">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="9">
                    <h3 className="mb-0">Latest Crypto News</h3>
                  </Col>
                  <Col className="text-right" xs="3">
                    <span className="heading-small text-muted align-items-center">
                      <Link to="/crypto/news">Show more</Link>
                    </span>
                    {/* <UncontrolledDropdown>
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
                    </UncontrolledDropdown> */}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row>
                  <News simplified />
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

export default Home;
