import React from "react";
import Image from "../Helper/Image";
import styles from "./feedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.alt} />
      <span className={styles.view}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
