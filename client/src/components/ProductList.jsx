const ProductList = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h1> {product.name} </h1>
            <p> {product.price} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
