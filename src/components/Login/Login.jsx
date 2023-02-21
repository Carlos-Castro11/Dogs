import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import styles from "./login.module.css";

// CONTEXTS
import { UserContext } from "../../UserContext";

// COMPONENTS
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import NotFound from "../NotFound";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="lost" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
