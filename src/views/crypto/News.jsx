import CryptoHeader from "components/Headers/CryptoHeader";
import React, { useState } from "react";

import {
  Card,
  CardHeader,
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

import moment from "moment";
import { Typeahead } from "react-bootstrap-typeahead";

import { useGetCryptosQuery } from "services/cryptoApi";
import { useGetCryptoNewsQuery } from "services/cryptoNewsApi";

import { FILTER_DEFAULT } from "share/constants/CryptoConstants";
import Loader from "share/components/Loader";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { cryptos } = useGetCryptosQuery(100);
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  console.log(cryptoNews, cryptos);
  if (isFetching) return <Loader />;

  return (
    <>
      {/* Just show in Cryptocurrencies page */}
      {!simplified && <CryptoHeader />}
      {/* Page content */}
      <Container fluid>
        {/* Just show in Cryptocurrencies page */}
        {!simplified && (
          <Form className="mt-3 mb-3 search-crypto">
            <Typeahead
              clearButton
              // defaultSelected={cryptos?.data?.coins.slice(0, 1)}
              id="uuid"
              labelKey="name"
              onChange={(value) => setNewsCategory(value[0]?.name)}
              // onInputChange={(text, e) => {
                // console.log(text, e);
              // }}
              options={cryptos?.data?.coins || FILTER_DEFAULT}
              placeholder="Choose a state..."
            />
          </Form>
        )}
        <Row className="news-card-container">
          {cryptoNews?.value.map((news, i) => (
            <Col lg="6" xl="4" className="news-card" key={i}>
              <Card className="card-stats mb-4 mb-xl-0">
                <CardHeader className="bg-white border-1">
                  <CardTitle
                    tag="h5"
                    id={`title-news-${i}`}
                    className="text-uppercase font-weight-bold mb-0 text-news"
                  >
                    <a
                      className="text-darker"
                      href={news.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {news.name.length > 70
                        ? `${news.name.substring(0, 70)}...`
                        : news.name}
                    </a>
                  </CardTitle>
                  <UncontrolledTooltip
                    delay={0}
                    placement="top"
                    target={`title-news-${i}`}
                  >
                    {news.name}
                  </UncontrolledTooltip>
                </CardHeader>
                <CardBody>
                  <Row>
                    <div className="col" id={`description-news-${i}`}>
                      <p className="text-muted text-news">
                        {news.description.length > 100
                          ? `${news.description.substring(0, 100)}...`
                          : news.description}
                      </p>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target={`description-news-${i}`}
                      >
                        {news.name}
                      </UncontrolledTooltip>
                    </div>
                    <div className="news-thumnail">
                      <img
                        src={news?.image?.thumbnail?.contentUrl || demoImage}
                      />
                    </div>
                  </Row>

                  {/* <div class="d-flex">
                      <div class="mr-auto p-2">Flex item</div>
                      <div class="p-2">Flex item</div>
                    </div> */}
                  <div className="align-items-center d-flex text-sm">
                    <a
                      className="avatar provider-avatar mr-1"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          news.provider[0]?.image?.thumbnail?.contentUrl ||
                          demoImage
                        }
                      />
                    </a>
                    <p className="text-muted mb-0 h6">
                      <em>{news.provider[0]?.name}</em>
                    </p>

                    <p className="text-muted mb-0 h6 ml-auto">
                      {moment(news.datePublished).startOf("ss").fromNow()}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default News;
