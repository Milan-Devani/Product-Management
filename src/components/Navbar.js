import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { filterByName, sortByPrice, fetchProducts } from "./redux/productSlice";
import { logout } from "./redux/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { items } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="w-[90%] mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center py-4">
          <div className="text-4xl font-bold">
            <Link to="/">ShopEase</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="hover:text-gray-200 transition duration-300"
            >
              Home
            </Link>
          </div>
          <div className="flex gap-[50px] items-center ">
            <div className="">
              <input
                type="text"
                className="border text-black px-[15px] py-[8px]"
                placeholder="Search by name"
                onChange={(e) => dispatch(filterByName(e.target.value))}
              />
            </div>
            <div className="flex gap-[10px]">
              <div>
                <button
                  className="border px-[15px] py-[8px] rounded"
                  onClick={() => dispatch(sortByPrice("asc"))}
                >
                  Sort Asc
                </button>
              </div>
              <div>
                <button
                  className="border px-[15px] py-[8px] rounded"
                  onClick={() => dispatch(sortByPrice("desc"))}
                >
                  Sort Desc
                </button>
              </div>
            </div>
            <div className="relative">
              <Link to="/cart" className="flex items-center">
                <FaShoppingCart className="text-2xl" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Link>
            </div>
            {user && (  // Only show the logout button if the user is logged in
              <div>
                <button
                  className="border bg-red-600 px-[15px] py-[8px] rounded"
                  onClick={() => dispatch(logout())}
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
