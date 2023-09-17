import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <ul className="flex items-center justify-center gap-2 p-2">
      {products?.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </ul>
  );
};

export default ProductList;
