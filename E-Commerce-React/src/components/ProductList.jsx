import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch API
  useEffect(() => {
    fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Data:", data);
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">  
      <h2 className="mb-4">Product List</h2>

      {loading ? (
        <h4>Loading...</h4>   
      ) : (
        <div className="row">
          {products.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">

                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "150px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>

                  <p className="card-text text-muted">
                    {item.category}
                  </p>

                  <h6 className="text-success">₹ {item.price}</h6>

                  <button className="btn btn-primary w-100">
                    Add to Cart
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;