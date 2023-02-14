import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./userHeaderNav.module.css";
import { ReactComponent as MyPhotos } from "../../Assets/feed.svg";
import { ReactComponent as Stats } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Out } from "../../Assets/sair.svg";

// CONTEXTS
import { UserContext } from "../../UserContext";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/account">
        <MyPhotos />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/account/stats">
        <Stats />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/account/post">
        <AddPhoto />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <Out />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
