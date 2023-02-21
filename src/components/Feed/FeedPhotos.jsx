import React from "react";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import styles from "./feedPhotos.module.css";

// COMPONENTS
import FeedPhotosItem from "./FeedPhotosItem";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";

const FeedPhotos = ({ setInfinite, page, user, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            setModalPhoto={setModalPhoto}
            key={photo.id}
            photo={photo}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
