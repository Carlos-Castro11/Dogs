import React from "react";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api";
import styles from "./photoCommentsForm.module.css";

// COMPONENTS
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import Error from "../Helper/Error";

const PhotoCommentsForm = ({ id, setComments, form, single }) => {
  const [comment, setComment] = React.useState("");

  const { error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = COMMENT_POST(id, { comment });

    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
