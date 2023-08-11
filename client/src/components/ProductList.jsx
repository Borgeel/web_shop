import { useNavigate } from "react-router-dom";
import { useFetch } from "../utils/useFetch";
import { products } from "./List";

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
