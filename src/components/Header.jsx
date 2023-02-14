import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

// CONTEXTS
import { UserContext } from "../UserContext";

// COMPONENTS
import { ReactComponent as Dogs } from "../Assets/dogs.svg";

const Header = () => {
  const { data, login } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {login ? (
          <div>
            <Link className={styles.login} to="/account">
              {data && data.nome}
            </Link>
          </div>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
