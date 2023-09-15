import ProductCard from "../molecules/Product";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <ul className="flex gap-2 p-2">
      {products?.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </ul>
  );
};

export default ProductList;
