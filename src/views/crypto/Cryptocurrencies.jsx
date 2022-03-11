import React, { useState, useEffect } from "react";

import {
  Card,
  CardTitle,
  CardBody,
  Form,
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  UncontrolledTooltip,
} from "reactstrap";
import { useGetCryptosQuery } from "services/cryptoApi";
import CryptoHeader from "components/Headers/CryptoHeader.js";
import millify from "millify";
import { Link } from "react-router-dom";
import Loader from "share/components/Loader";
import CryptoSearch from "share/components/CryptoSearch";


const Cryptocurrencies = ({ simplified }) => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery(
    simplified ? 10 : 100
  );

  const [cryptos, setCryptos] = useState([]);
  // const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    // const filteredData = cryptosList?.data?.coins.filter(
    //   (item) =>
    //     item.name.toLowerCase().includes(searchTerm) ||
    //     item.symbol.toLowerCase().includes(searchTerm)
    // );
    // setCryptos(filteredData);
  // }, [cryptosList, searchTerm]);
  },[cryptosList]);

  const filterCryptos = (crptoList) => {
    setCryptos(crptoList)
  }


  if (isFetching) return <Loader />;

  return (
    <>
      {/* Just show in Cryptocurrencies page */}
      {!simplified && <CryptoHeader />}
      {/* Page content */}
      <Container fluid>
        {/* Just show in Cryptocurrencies page */}
        {!simplified && <CryptoSearch Listdata= {cryptosList} onSaveCrypto = {filterCryptos}/>}
        {/* {!simplified && (
          <Form className="mt-3 mb-3 search-crypto">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search Cryptocurrency"
                className="form-control-rounded form-control-prepended"
                placeholder="Search Cryptocurrency"
                type="search"
                onChange={(e) => setsearchTerm(e.target.value)}
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        )} */}
        <Row className="crypto-card-container">
          {cryptos?.map((currency) => (
            <Col lg="6" xl="3" className="crypto-card" key={currency.uuid}>
              <Link to={`/crypto/detail/${currency.uuid}`}>
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase font-weight-bold mb-0"
                        >
                          {`${currency.rank}. ${currency.name}`}
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          $
                          {millify(currency.price, {
                            precision: 3,
                          })}
                          {/* ${currency.price} */}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape text-white rounded-circle crypto-icon-shadow">
                          {/* <i className="fas fa-chart-bar" /> */}
                          <img
                            className="crypto-image"
                            src={currency.iconUrl}
                          />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span
                        id={`change-${currency.uuid}`}
                        // className="text-success mr-2"
                        style={{color : currency.change.includes("-") ? '#CF304A': '#03A66D', fontSize: '16px', fontWeight:'500'}}
                      >
                        {/* {millify(currency.change)}% */}
                        {currency.change.includes("-") == false ? `+${millify(currency.change)}` : millify(currency.change)}%
                      </span>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target={`change-${currency.uuid}`}
                      >
                        Daily Change: {millify(currency.change)}%
                      </UncontrolledTooltip>
                    </p>
                    <span className="text-nowrap">
                      Market Cap: {millify(currency.marketCap)}
                    </span>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cryptocurrencies;
