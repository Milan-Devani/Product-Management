import React from "react";
import ProductList from "../ProductList";


const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold my-4">Product Management</h1>
      </div>
      <ProductList />
    </div>
  );
};

export default Home;
