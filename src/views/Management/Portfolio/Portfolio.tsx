import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Container,
  Row,
  Col,
  Label,
} from "reactstrap";
// core components
import ManagementHeader from "components/Headers/ManagementHeader";

const Portfolio = () => {
  return (
    <>
      <ManagementHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My portfolio</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first"
                          >
                            Firstname
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Hieu"
                            id="input-firstname"
                            placeholder="Firstname"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-lastname"
                          >
                            Lastname
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Nguyen"
                            id="input-lastname"
                            placeholder="Lastname"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-othername"
                          >
                            Othername
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Micheo"
                            id="input-othername"
                            placeholder="Othername"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="michel.nguyen@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-phonenumber"
                          >
                            Phonenumber
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="0909009900"
                            id="input-phonenumber"
                            placeholder="Phonenumber"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Binh Duong"
                            id="input-address"
                            placeholder="Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Social information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-linkedin"
                          >
                            LinkedIn
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Micheo Nguyen"
                            id="input-linkedin"
                            placeholder="LinkedIn"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-skype"
                          >
                            Skype
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Micheo Nguyen"
                            id="input-skype"
                            placeholder="Skype"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-facebook"
                          >
                            Facebook
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-facebook"
                            placeholder="Facebook"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-file-resume"
                      >
                        File Resume
                      </label>
                      <InputGroup>
                        <Input
                          className="form-control"
                          id="inputFile"
                          type="file"
                        />
                        {/* <Label className="input-group-text" for="inputFile">
                            Upload
                          </Label> */}
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                      Open Source."
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
