import React, { useState } from "react";
import { Line } from "react-chartjs-2";

import {
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
} from "reactstrap";

import millify from "millify";

const LineChart = (props) => {
  const { coinHistory, currentPrice, coinName, filter } = props.data;
  const coinPrice = [];
  const coinTimestamp = [];

  console.log(props);
  console.log(coinHistory, currentPrice, coinName, filter);

  for (let i = 0; i < coinHistory?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.history[i].timestamp * 1000).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) {
            content += label;
          }

          content += "$ " + millify(yLabel);
          return content;
        },
      },
    },
  };

  const setTimeperiod = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.onChangeFilter(e.target.value ?? "1y");
  };

  return (
    <Row>
      <Col className="mb-4 mb-xl-4">
        <Card className="bg-gradient-default shadow">
          <CardHeader className="bg-transparent">
            <Row className="align-items-center">
              <div className="col-10">
                <h4 className="text-uppercase text-light ls-1 mb-1">
                  Change: {coinHistory?.change}%
                </h4>
                <h2 className="text-white mb-0">
                  Current price {coinName} : $ {currentPrice}
                </h2>
              </div>
              <div className="col">
                <FormGroup>
                  {/* <Label for="exampleSelect">Select</Label> */}
                  <Input
                    type="select"
                    name="select"
                    defaultValue="1y"
                    id="exampleSelect"
                    onChange={(value) => setTimeperiod(value)}
                  >
                    {filter?.map((date) => (
                      <option key={date}>{date}</option>
                    ))}
                  </Input>
                </FormGroup>
              </div>
            </Row>
          </CardHeader>
          <CardBody>
            {/* Chart */}
            <div className="chart">
              {/* <Line
                data={chartExample1[chartExample1Data]}
                options={chartExample1.options}
                getDatasetAtEvent={(e) => console.log(e)}
              /> */}
              <Line type='bar'data={data} options={options} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default LineChart;
