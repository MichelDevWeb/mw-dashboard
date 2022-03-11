import React from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import { useGetCryptosQuery } from "services/cryptoApi";
import millify from "millify";
import Loader from "share/components/Loader";

const CryptoStats = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        {/* Total Cryptocurrencies */}
        <Col lg="6" xl="3">
          <Card className="card-stats mb-4 mb-xl-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle
                    tag="h5"
                    className="text-uppercase text-muted mb-0"
                  >
                    Total Cryptocurrencies
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">
                    {globalStats?.total}
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
                </span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </CardBody>
          </Card>
        </Col>

        {/* Total Market Cap */}
        <Col lg="6" xl="3">
          <Card className="card-stats mb-4 mb-xl-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle
                    tag="h5"
                    className="text-uppercase text-muted mb-0"
                  >
                    Total Market Cap
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">
                    {millify(globalStats.totalMarketCap)}
                  </span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                    <i className="fas fa-chart-pie" />
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className="text-danger mr-2">
                  <i className="fas fa-arrow-down" /> 3.48%
                </span>
                <span className="text-nowrap">Since last week</span>
              </p>
            </CardBody>
          </Card>
        </Col>

        {/* Total Markets */}
        <Col lg="6" xl="3">
          <Card className="card-stats mb-4 mb-xl-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle
                    tag="h5"
                    className="text-uppercase text-muted mb-0"
                  >
                    Total Markets
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">
                    {millify(globalStats.totalMarkets)}
                  </span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                    <i className="fas fa-users" />
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className="text-warning mr-2">
                  <i className="fas fa-arrow-down" /> 1.10%
                </span>
                <span className="text-nowrap">Since yesterday</span>
              </p>
            </CardBody>
          </Card>
        </Col>

        {/* Total 24h Volume */}
        <Col lg="6" xl="3">
          <Card className="card-stats mb-4 mb-xl-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle
                    tag="h5"
                    className="text-uppercase text-muted mb-0"
                  >
                    Total 24h Volume
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">
                    {millify(globalStats.total24hVolume)}
                  </span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                    <i className="fas fa-percent" />
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className="text-success mr-2">
                  <i className="fas fa-arrow-up" /> 12%
                </span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CryptoStats;
