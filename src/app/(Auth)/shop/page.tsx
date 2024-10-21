"use client"
import React, { useState } from 'react';
import Image from 'next/image';

// Define the structure of a product
interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Regular Fit Long Sleeve Top', price: 38.99, rating: 5.0, image: '/pexels-dima-valkov-6211621 1.png' },
  { id: 2, name: 'Black Crop Tailored Jacket', price: 62.99, rating: 4.9, image: '/pexels-dima-valkov-6211616 (1) 2.png' },
  { id: 3, name: 'Textured Sunset Shirt', price: 49.99, rating: 5.0, image: '/pexels-dima-valkov-6503007 3.png' },
  // Add more products here...
];

function Shop() {
  const [cart, setCart] = useState<Product[]>([]);

  // Function to add product to cart
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className='bg-white min-h-screen'>
      <div className='pt-20'> 
        <h1 className='flex justify-center font-bold text-6xl font-serif text-emerald-950'>
          Best Selling
        </h1>
        <p className='flex justify-center font-serif text-emerald-950 mt-4'>
          Get in on the trend with our curated selection of best-selling styles.
        </p>

        {/* Products Grid */}
        <div className='flex flex-wrap justify-center gap-4 max-w-6xl mx-auto'>
          {products.map(product => (
            <div key={product.id} className="bg-white p-6 w-[350px] flex flex-col items-center rounded-lg shadow-lg hover:bg-[#f0e4ca] transition duration-300 transform hover:scale-105">
              {/* Image Container */}
              <div className="bg-green-200 p-4 w-[300px] h-[300px] flex items-center justify-center rounded-md">
                <Image 
                  src={product.image}  
                  alt={product.name}  
                  width={200}   
                  height={250}  
                  className=""
                />
              </div>

              {/* Product Name */}
              <h2 className="mt-4 text-lg font-semibold text-emerald-950 text-center">
                {product.name}
              </h2>

              {/* Price and Rating */}
              <p className="mt-2 text-black font-bold">{`$${product.price} | ${product.rating} ★`}</p>

              {/* Add to Cart Button */}
              <button 
                className="mt-4 hover:bg-emerald-600 text-black font-bold py-2 px-6 rounded-lg"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        
        <button className="mt-10 flex justify-center mx-auto outline outline-2 outline-emerald-600 text-emerald-500 hover:bg-emerald-600 bg-white font-bold py-2 px-6 rounded-lg">
          See All
        </button>

        {/* Cart Display */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-emerald-950">Cart</h2>
          <ul className="mt-4">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <li key={index} className="text-lg">{item.name} - ${item.price}</li>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </ul>
        </div>
        {/* Our Products Section */}
        <div className="mt-10">
          <h1 className="mt-10 mb-10 flex justify-center font-bold text-4xl font-serif text-emerald-950">
            Our Products
          </h1>
          <ul className="flex justify-center gap-16 flex-grow font-bold font-serif">
            <li>SALE</li>
            <li>
              <ins>HOT</ins>
            </li>
            <li>NEW ARRIVAL</li>
          </ul>

          {/* First Grid of Products */} 
<div className="grid grid-cols-1 gap-16 md:grid-cols-5 justify-between items-center mt-10">
  {[
    {
      img: '/pexels-dima-valkov-6402848 1.png',
      name: 'Spread Collar Shirt',
      price: 48.99,
      rating: 5.0,
    },
    {
      img: '/pexels-heitor-verdi-7665789 2.png',
      name: 'Textured Sunset Shirt',
      price: 49.99,
      rating: 5.0,
    },
    {
      img: '/pexels-dima-valkov-6211616 (1) 2.png',
      name: 'White Solid Formal Shirt',
      price: 39.00,
      rating: 4.9,
    },
    {
      img: '/pexels-monstera-6311613 (1) 1.png',
      name: 'Gray Solid Padded Jacket',
      price: 32.99,
      rating: 4.7,
    },
  ].map((product, index) => (
    <div
      key={index}
      className="bg-white p-6 w-[350px] flex flex-col items-center rounded-lg shadow-lg hover:bg-[#f0e4ca] transition duration-300 transform hover:scale-105"
    >
      {/* Image Container */}
      <div className="bg-gray-200 p-4 w-[300px] h-[300px] flex items-center justify-center rounded-md">
        <Image
          src={product.img}
          alt={product.name}
          width={200}
          height={250}
        />
      </div>

      {/* Product Name */}
      <h2 className="mt-4 text-lg font-semibold text-emerald-950 text-center">
        {product.name}
      </h2>

      {/* Price and Rating */}
      <p className="mt-2 text-black font-bold">{`$${product.price} | ${product.rating} ★`}</p>

      {/* Add to Cart Button */}
      <button 
        className="mt-4 hover:bg-emerald-600 text-black font-bold py-2 px-6 rounded-lg"
        onClick={() => addToCart({
          id: index + 10,  // Use unique ID for this section
          name: product.name,
          price: product.price,
          rating: product.rating,
          image: product.img
        })}
      >
        Add to Cart
      </button>
    </div>
  ))}
</div>

{/* Second Grid of Products */}
<div className="grid grid-cols-1 gap-16 md:grid-cols-5 justify-between items-center mt-10">
  {[
    {
      img: '/pexels-dima-valkov-6211614 1.png',
      name: 'Printed Loose T-shirt',
      price: 39.99,
      rating: 5.0,
    },
    {
      img: '/pexels-dima-valkov-6402846 1.png',
      name: 'Summer Wind Crop Shirt',
      price: 39.95,
      rating: 4.7,
    },
    {
      img: '/pexels-dima-valkov-6211601 1.png',
      name: 'Tailored Jacket',
      price: 46.00,
      rating: 4.9,
    },
    {
      img: '/pexels-monstera-6311612 3.png',
      name: 'Solid Round Neck T-shirt',
      price: 39.99,
      rating: 5.0,
    },
  ].map((product, index) => (
    <div
      key={index}
      className="bg-white p-6 w-[350px] flex flex-col items-center rounded-lg shadow-lg hover:bg-[#f0e4ca] transition duration-300 transform hover:scale-105"
    >
      {/* Image Container */}
      <div className="bg-gray-200 p-4 w-[300px] h-[300px] flex items-center justify-center rounded-md">
        <Image
          src={product.img}
          alt={product.name}
          width={200}
          height={250}
        />
      </div>

      {/* Product Name */}
      <h2 className="mt-4 text-lg font-semibold text-emerald-950 text-center">
        {product.name}
      </h2>

      {/* Price and Rating */}
      <p className="mt-2 text-black font-bold">{`$${product.price} | ${product.rating} ★`}</p>

      {/* Add to Cart Button */}
      <button 
        className="mt-4 hover:bg-emerald-600 text-black font-bold py-2 px-6 rounded-lg"
        onClick={() => addToCart({
          id: index + 20,  // Use unique ID for this section
          name: product.name,
          price: product.price,
          rating: product.rating,
          image: product.img
        })}
      >
        Add to Cart
      </button>
       </div>
      ))}
    </div>
        </div>
      </div>
      </div>
    
  );
}

export default Shop;
