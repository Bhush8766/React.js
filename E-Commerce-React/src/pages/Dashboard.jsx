import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const Dashboard = ({ loggedUser }) => {
  return (
    <>
      <Navbar loggedUser={loggedUser} />

      <div className="container-fluid">
        <div className="row">

          {/* 🔹 LEFT SIDE (STICKY FILTER) */}
          <div
            className="col-2 bg-dark text-white p-3"
            style={{
              position: "sticky",
              top: "0",
              height: "100vh",
              overflowY: "auto"
            }}
          >
            <h5>Search</h5>

            <input
              type="search"
              className="form-control mb-2"
              placeholder="Search product..."
            />

            <button className="btn btn-primary w-100 mb-3">
              Search
            </button>

            <h6>Filters</h6>
            <div>Category</div>
            <div>Price</div>
          </div>

          {/* 🔹 RIGHT SIDE (SCROLLABLE PRODUCTS) */}
          <div
            className="col-10 p-3"
            style={{
              height: "100vh",
              overflowY: "auto"
            }}
          >
            <ProductList />
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;