import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    Swal.fire({
      title: "Good job!",
      text: "Product added to the cart!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="w-full">
        <img
          src={
            product.images && product.images.length > 0
              ? product.images[0]
              : "https://via.placeholder.com/150"
          }
          alt={product.title || "Product Thumbnail"}
          className="w-full h-[500px] object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold">{product.title}</h3>
      <p className="text-lg text-gray-600">{product.category}</p>
      <p className="text-lg font-bold text-green-600">${product.price}</p>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        onClick={handleAddToCart} 
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

