import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./component/PageNotFound";
import SearchBox from "./component/SearchBox";
import Layout from "./component/Layout";
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <SearchBox />
              <Home />
            </Layout>
          }
        />
        <Route path="/productdetail/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
