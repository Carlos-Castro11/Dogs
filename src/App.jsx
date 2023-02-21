import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// CONTEXTS
import { UserStorage } from "./UserContext";

// COMPONENTS
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import Photo from "./components/Photo/Photo";
import ProtectedRoute from "./components/Helper/ProtectedRoute";
import UserProfile from "./components/User/UserProfile";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="account/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route path="photo/:id" element={<Photo />} />
            <Route path="profile/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
