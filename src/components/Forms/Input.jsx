import React from "react";
import styles from "./input.module.css";

const Input = ({ type, value, OnChange, name, label, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        value={value}
        type={type}
        name={name}
        id={name}
        onChange={OnChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
