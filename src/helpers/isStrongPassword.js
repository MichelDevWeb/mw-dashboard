import React from "react";
import PropTypes from "prop-types";
import validator from "validator";

const isStrongPassword = (props) => {
  if (
    validator.isStrongPassword(props, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    return true;
  } else {
    return false;
  }
};

isStrongPassword.propTypes = {
  value: PropTypes.string,
};

export default isStrongPassword;
