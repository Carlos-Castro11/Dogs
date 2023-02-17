import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./userHeaderNav.module.css";
import { ReactComponent as MyPhotos } from "../../Assets/feed.svg";
import { ReactComponent as Stats } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Out } from "../../Assets/sair.svg";
import useMedia from "../../Hooks/useMedia";

// CONTEXTS
import { UserContext } from "../../UserContext";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileMenuActive
          }`}
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end onClick={() => setMobileMenu(false)}>
          <MyPhotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/account/stats" onClick={() => setMobileMenu(false)}>
          <Stats />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/account/post" onClick={() => setMobileMenu(false)}>
          <AddPhoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Out />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
