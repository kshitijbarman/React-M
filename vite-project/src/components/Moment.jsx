
import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";
// import AgeCalculator from "./AgeCalculator";

const Moment = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");
//   const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const sortedProducts = () => {
    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === "asc") {
      return [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      return [...filtered].sort((a, b) => b.price - a.price);
    }
    return filtered;
  };

  return (
    <>
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Lazy Loaded Product Gallery</h1>

        <AgeCalculator />

        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-1/2 mb-4 text-lg border border-gray-300 rounded-lg mt-4"
        />
        <br />
        <button
          onClick={() => setSortOrder("asc")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-800"
        >
          Low to High
        </button>
        <button
          onClick={() => setSortOrder("desc")}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800"
        >
          High to Low
        </button>

        {loading ? (
          <p className="mt-4 text-lg">Loading products...</p>
        )
          : (
            <div className="grid grid-cols-3 gap-6 mt-6">
              {sortedProducts().length > 0 ? (
                sortedProducts().map((product) => (
                  <div key={product.id} className="border p-4 rounded-lg shadow-md">
                    <LazyLoadImage
                      src={product.thumbnail}
                      alt={product.title}
                      height="150px"
                      width="150px"
                      className="rounded-lg mx-auto"
                    />
                    <p className="mt-2 font-semibold">{product.title}</p>
                    <p className="mt-2 font-semibold">{product.description}</p>
                    <p className="text-gray-700">${product.category}</p>
                    <p className="text-gray-700">${product.price}</p>
                    <p className="text-gray-700">${product.discountPercentage}% Off</p>
                    <p className="text-gray-700">Rating: {product.rating}</p>
                    <p className="text-gray-700">Stock: {product.stock}</p>
                    <p className="text-gray-700 text-sm mt-2 font-medium">
                      {moment().format("MMMM Do YYYY, h:mm:ss a")}
                    </p>
                    <p className="text-gray-700 text-sm mt-2 font-medium">
                      {moment().format("dddd")}
                    </p>
                    <p className="text-gray-700 text-sm mt-2 font-medium">
                      {moment().format()}
                    </p>
                  </div>
                ))
              ) : (
                <p className="mt-4 text-lg text-red-600">No products found</p>
              )}
            </div>
          )}
      </div>
    </>
  );
};

export default Moment;