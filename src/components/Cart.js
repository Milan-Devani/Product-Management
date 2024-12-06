import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "./redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Your Shopping Cart
      </h1>
      {items.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="text-lg">Your cart is empty.</p>
          <img
            src="https://via.placeholder.com/300?text=Empty+Cart"
            alt="Empty Cart"
            className="mx-auto mt-6"
          />
        </div>
      ) : (
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left py-3 px-4 text-gray-800">Image</th>
                  <th className="text-left py-3 px-4 text-gray-800">Title</th>
                  <th className="text-left py-3 px-4 text-gray-800">Price</th>
                  <th className="text-left py-3 px-4 text-gray-800">
                    Quantity
                  </th>
                  <th className="text-left py-3 px-4 text-gray-800">
                    Total Price
                  </th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 px-4">
                      <img
                        src={
                          item.images[0] || "https://via.placeholder.com/150"
                        }
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </td>
                    <td className="py-3 px-4">{item.title}</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">
                      ${item.price}
                    </td>

                    <td className="h-[100px] py-3 px-4 flex items-center space-x-2">
                      <button
                        onClick={
                          () => dispatch(decrementQuantity(item.id)) 
                        }
                        className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={
                          () =>
                            dispatch(
                              incrementQuantity({
                                id: item.id,
                                stock: item.stock,
                              })
                            )
                        }
                        className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                    </td>

                    <td className="py-3 px-4 text-blue-600 font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Total: ${totalAmount.toFixed(2)}
            </h2>
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
