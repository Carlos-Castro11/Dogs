import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./userHeader.module.css";

// COMPONENTS
import UserHeaderNav from "./UserHeaderNav";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const { pathname } = useLocation();
  React.useEffect(() => {
    switch (pathname) {
      case "/account/post":
        setTitle("Adicionar foto");
        break;
      case "/account/stats":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minhas fotos");
        break;
    }
  }, [pathname]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
