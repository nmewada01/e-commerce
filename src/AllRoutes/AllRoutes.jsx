import React from "react";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
import AllProducts from "../Pages/AllProducts";
import Men from "../Pages/Men";
import Women from "../Pages/Women";

import DescriptionPage from "../components/Description/DescriptionPage";
import AllshoesD from "../Pages/Shoes";
import Cart from "../Pages/Cart";
import WishList from "../Pages/WishList";
import Login from "../Pages/Login";
import Register from "../Pages/SignUp";
import Checkout from "../Pages/Checkout";
import Authentication from "../PrivateRoute/Authentication";
import MyAccount from "../Pages/MyAccount";
import AdminPage from "../Admin/AdminPage";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/shoes" element={<AllshoesD />} />
        <Route path="/description/:id" element={<DescriptionPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/wishlist"
          element={
            <Authentication>
              <WishList />
            </Authentication>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/myaccount" element={<MyAccount />} />

        <Route path="/register" element={<Register />} />
        <Route
          path="/checkout"
          element={
            <Authentication>
              <Checkout />
            </Authentication>
          }
        />
        <Route
          path="/admin"
          element={
            <Authentication>
              <AdminPage />
            </Authentication>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
