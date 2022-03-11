import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";

import {
  Col,
  Card,
  CardBody,
  CardHeader,
  Row,
  Button,
  Table,
  Container,
} from "reactstrap";

import millify from "millify";

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../services/cryptoApi";
import CryptoHeader from "components/Headers/CryptoHeader.js";
import LineChart from "share/components/LineChart";
import Loader from "share/components/Loader";

const CryptoDetail = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState("1y");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loader />;

  const time = ["24h", "7d", "30d", "1y", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: "fas fa-comment-dollar",
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: "fas fa-list-ol" },
    {
      title: "24h Volume",
      value: `$${
        cryptoDetails?.["24hVolume"] && millify(cryptoDetails?.["24hVolume"])
      }`,
      icon: "fas fa-chart-line",
    },
    {
      title: "Market Cap",
      value: `$${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: "fas fa-search-dollar",
    },
    {
      title: "All-time-high (daily avg.)",
      value: `$${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: "fas fa-trophy",
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: "fas fa-sort-numeric-up",
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: "fas fa-exchange-alt",
    },
    {
      isAprrove: true,
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed
        ? "fas fa-check"
        : "fas fa-minus-circle",
      icon: "fas fa-info-circle",
    },
    {
      title: "Total Supply",
      value: `$${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: "fas fa-info-circle",
    },
    {
      title: "Circulating Supply",
      value: `$${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: "fas fa-info-circle",
    },
  ];

  const chartData = {
    coinHistory: coinHistory?.data,
    currentPrice: millify(cryptoDetails?.price),
    coinName: cryptoDetails?.name,
    filter: time,
  };

  const handleApprovedSupply = (value) => {
    return <i className={`${value} mr-2`}></i>;
  };

  const handleChangeFilter = (value) => {
    console.log(value);
    setTimeperiod(value);
  };
  return (
    <>
      <CryptoHeader
        display={{
          showCryptoDetail: true,
          data: { name: cryptoDetails?.name, symbol: cryptoDetails?.symbol },
        }}
      />
      <Container fluid>
        {/* Chart */}
        <LineChart onChangeFilter={handleChangeFilter} data={chartData} />

        {/* Statistic content */}
        <Row>
          <Col xl="4" className="coin-detail-container mb-3">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0 text-center">
                      {cryptoDetails.name} Value Statistics
                    </h3>
                  </div>
                  {/* <div className="col text-right">
                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    See all
                  </Button>
                </div> */}
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">
                      {/* An overview showing the statistics of {cryptoDetails.name} */}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {stats?.map(({ icon, title, value }, i) => (
                    <tr key={i}>
                      <th scope="row" className="d-flex">
                        <span>
                          <i className={`${icon} mr-2`}></i> {title}
                        </span>
                        <span className="ml-auto">{value}</span>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>

          <Col xl="4" className="other-stats-info mb-3">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0 text-center">Other Stats Info</h3>
                  </div>
                  {/* <div className="col text-right">
                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    See all
                  </Button>
                </div> */}
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">
                      {/* An overview showing the statistics of all cryptocurrencies */}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {genericStats?.map(({ icon, title, value, isAprrove }, i) => (
                    <tr key={i}>
                      <th scope="row" className="d-flex">
                        <span>
                          <i className={`${icon} mr-2`}></i> {title}
                        </span>
                        <span className="ml-auto">
                          {isAprrove ? handleApprovedSupply(value) : value}
                        </span>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>

          <Col xl="4" className="coin-link mb-3">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0 text-center">
                      {cryptoDetails.name} Links
                    </h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  {/* <tr>
                    <th scope="col">
                      An overview showing the statistics of all cryptocurrencies
                    </th>
                  </tr> */}
                </thead>
                <tbody>
                  {cryptoDetails.links?.map((link, i) => (
                    <tr key={i}>
                      <th scope="row" className="d-flex">
                        <span>
                          <i className="ni ni-support-16 mr-2"></i> {link.type}
                        </span>
                        <a
                          className="ml-auto"
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.name}
                        </a>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="coin-detail-container mb-3">
          <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0 text-center">
                    What is {cryptoDetails.name}?
                    </h3>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <span>{HTMLReactParser(cryptoDetails.description)}</span>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CryptoDetail;
