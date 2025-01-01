
const ProductCard = ({ product }) => {
  return (
    <div key={product._id} className="border rounded-lg p-4">
      <img
        className="w-full h-80 object-cover rounded-md"
        src={product.image}
        alt={product.name}
      />
      <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="mt-2 text-lg font-semibold">Price: ৳{product.price}</p>
    </div>
  );
};

export default ProductCard;
