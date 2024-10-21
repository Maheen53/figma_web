import Product from "@/components/Product"; // Adjust the import based on your folder structure

export default function ProductsPage() {
  const products = [
    {
      name: 'Solid Round Neck T-shirt',
      price: 39.99,
      imageUrl: '/pexels-monstera-6311612 3.png',
      stock: 10,
    },
    {
      name: 'Casual Denim Jacket',
      price: 59.99,
      imageUrl: '/pexels-denim-jacket.png',
      stock: 5,
    },
    {
      name: 'Stylish Sneakers',
      price: 79.99,
      imageUrl: '/pexels-sneakers.png',
      stock: 8,
    },
    // Add more products as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          stock={product.stock}
        />
      ))}
    </div>
  );
}
