import Image from 'next/image';
import { useState } from 'react';

// Define type for CartItem
type CartItem = {
  name: string;
  price: number;
};

type ProductProps = {
  name: string;
  price: number;
  imageUrl: string;
  stock: number;
};

export default function Product({ name, price, imageUrl, stock: initialStock }: ProductProps) {
  // Cart is an array of CartItem objects
  const [cart, setCart] = useState<CartItem[]>([]);
  const [stock, setStock] = useState(initialStock);

  const handleAddToCart = () => {
    if (stock > 0) {
      // Add product to cart
      setCart([...cart, { name, price }]);
      // Decrease stock
      setStock(stock - 1);
    } else {
      alert('Out of stock');
    }
  };

  const handleRemoveFromCart = (itemIndex: number) => {
    // Remove product from cart
    const newCart = cart.filter((_, index) => index !== itemIndex);
    setCart(newCart);
    // Increase stock
    setStock(stock + 1);
  };

  return (
    <div className="bg-white p-6 w-[350px] flex flex-col items-center rounded-lg shadow-lg hover:bg-[#f0e4ca] transition duration-300 transform hover:scale-105">
      {/* Image Container */}
      <div className="bg-gray-200 p-4 w-[300px] h-[300px] flex items-center justify-center rounded-md">
        <Image 
          src={imageUrl}  
          alt={`${name} Image`}  
          width={200}   
          height={250}  
          className=""
        />
      </div>

      {/* Product Name */}
      <h2 className="mt-4 text-lg font-semibold text-emerald-950 text-center">
        {name}
      </h2>

      {/* Price and Rating */}
      <button className="mt-2 hover:bg-emerald-600 text-black font-bold py-2 px-6 rounded-lg">
        ${price.toFixed(2)} | 5.0 ★
      </button>

      {/* Add to Cart Button */}
      <button 
        className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

      {/* Cart Summary */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.name} - ${item.price}</span>
                <button 
                  className="bg-red-500 text-white p-1 rounded"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <p>Items in stock: {stock}</p>
      </div>
    </div>
  );
}
