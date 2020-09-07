import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";
import PropTypes from "prop-types";

export default function ImageGallery({ pictures, openModal }) {
  return (
    <ul className={styles.ImageGallery}>
      {pictures.map((picture) => (
        <ImageGalleryItem
          key={picture.id}
          url={picture.webformatURL}
          largeImg={picture.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
      PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};
