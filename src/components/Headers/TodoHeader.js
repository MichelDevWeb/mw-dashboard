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

import { useState } from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col,
          Form, FormGroup, Input, Button } from "reactstrap";

const Header = () => {

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])

  console.log(job);  

  const handleSubmit = () => {
    setJobs(pre => {
      console.log([...pre, job]);    
      return [...pre, job]
    })
    setJob('')
  }

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Form>
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <Input
                        className="form-control-alternative"
                        value={job}
                        onChange={e => setJob(e.target.value)}
                        id="add-todo"
                        placeholder="Thêm việc cần làm ..."
                        type="text"
                      />
                      <Button onClick={handleSubmit} className="my-4" color="primary" type="button">
                        Thêm
                      </Button>
                    </FormGroup>
                  </Col>
                </Row>
            </Form>
          </div>
          <Row className="mb-4">
              {jobs.map((job, index) => (
                <Col className="mb-4" lg="6" xl="3" key={index}>
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            {job}
                          </CardTitle>
                          {/* <span className="h2 font-weight-bold mb-0">
                            350,897
                          </span> */}
                        </div>
                        {/* <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                        </Col> */}
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> High
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              ))}


              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Traffic
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          350,897
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
