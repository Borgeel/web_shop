import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div>
      <ul>
        {products?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
