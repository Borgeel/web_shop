import { deleteProduct } from "../../api";
import { useData } from "../../contexts/DataContext";

const Product = ({ product: { name, price, image, _id } }) => {
  const { onDelete } = useData();

  const deleteHandler = async (_id) => {
    try {
      await deleteProduct(_id);
      onDelete(_id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col m-2 bg-white p-2 rounded shadow-md w-64 border-2">
      <button onClick={() => deleteHandler(_id)} className="flex self-end">
        X
      </button>
      <div className="w-full h-48 mb-2 overflow-hidden border-2">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-medium mb-1">{name}</h3>
      <p className="text-gray-600">${price}</p>
    </div>
  );
};

export default Product;
