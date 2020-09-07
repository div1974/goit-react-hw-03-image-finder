import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ type, handleOnClick }) {
  return (
    <button className={styles.Button} type={type} onClick={handleOnClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};
