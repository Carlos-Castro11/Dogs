import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./user.module.css";

// CONTEXTS
import { UserContext } from "../../UserContext";

// COMPONENTS
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import NotFound from "../NotFound";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className={`${styles.user} container`}>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
