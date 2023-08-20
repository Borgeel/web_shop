import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div>
      <ul>
        {products?.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
