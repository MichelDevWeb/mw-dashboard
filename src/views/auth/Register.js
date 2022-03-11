// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import React, { useState } from "react";
import isStrongPassword from "helpers/isStrongPassword";
import { signup } from "../../actions/auth";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const initialState = {
  name: "",
  email: "",
  password: "",
  strongPassword: false,
  checkPolicy: false,
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    dispatch(signup(formData, history));
  };

  const handleChange = (e) => {
    setFormData((preState) => {
      switch (e.target.name) {
        case "password":
          return {
            ...preState,
            password: e.target.value,
            strongPassword: isStrongPassword(e.target.value),
          };
        case "checkPolicy":
          return { ...preState, checkPolicy: !formData.checkPolicy };
        default:
          return { ...preState, [e.target.name]: e.target.value };
      }
    });
  };

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          {/* <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-4">
              <small>Sign up with</small>
            </div>
            <div className="text-center">
              <Button
                className="btn-neutral btn-icon mr-4"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader> */}
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-5">
              <h3>Sign up with credentials</h3>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={handleChange}
                    name="name"
                    placeholder="Name"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={handleChange}
                    name="password"
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span
                    className={`${
                      formData.strongPassword ? "text-success" : "text-warning"
                    } font-weight-700`}
                  >
                    {formData.strongPassword ? "strong" : "weak"}
                  </span>
                </small>
              </div>
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      name="checkPolicy"
                      defaultChecked={formData.checkPolicy}
                      id="customCheckRegister"
                      type="checkbox"
                      onChange={handleChange}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the <a href="#">Privacy Policy</a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button
                  disabled={!(formData.checkPolicy && formData.strongPassword)}
                  className="mt-4"
                  color="primary"
                  type="submit"
                >
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            {/* <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a> */}
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="/auth/login"
              // onClick={(e) => e.preventDefault()}
            >
              <small>Already have an account? Sign in</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Register;
