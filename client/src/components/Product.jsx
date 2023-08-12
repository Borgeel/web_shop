const Product = ({ product: { name, price, image } }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md w-64">
      <div className="w-full h-48 mb-2 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-medium mb-1">{name}</h3>
      <p className="text-gray-600">${price}</p>
    </div>
  );
};

export default Product;
