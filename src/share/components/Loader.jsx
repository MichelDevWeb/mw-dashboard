import React from "react";
import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div className="loader">
      <Spinner className="mr-2" color="primary" type="grow">
        Loading...
      </Spinner>
      <Spinner className="mr-2" color="primary" type="grow">
        Loading...
      </Spinner>
      <Spinner color="primary" type="grow">
        Loading...
      </Spinner>
    </div>
  );
};

export default Loader;
