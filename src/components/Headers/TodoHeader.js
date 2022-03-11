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

const TodoHeader = () => {

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
        </Container>

        {/* Waves Container */}
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        {/* Waves end */}
      </div>
    </>
  );
};

export default TodoHeader;
