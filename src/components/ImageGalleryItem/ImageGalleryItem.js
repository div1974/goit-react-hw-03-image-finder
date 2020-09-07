import React from "react";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

export default function ImageGalleryItem({ url, openModal, largeImg }) {
  return (
    <li className={styles.ImageGalleryItem} onClick={() => openModal(largeImg)}>
      <img src={url} alt="ups..." className={styles.ImageGalleryItemImage} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
};
