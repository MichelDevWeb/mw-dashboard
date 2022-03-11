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

const CryptoSearch = (props) => {
  
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    const filteredData = props.Listdata?.data?.coins.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.symbol.toLowerCase().includes(searchTerm)
    );
    props.onSaveCrypto(filteredData);
  }, [searchTerm]);

  return (
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
  );
};

export default CryptoSearch;
