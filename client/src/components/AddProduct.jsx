import React, { useEffect, useRef, useState, useContext } from "react";
import Input from "./Input";
import { useData } from "../contexts/DataContext";
import { useFetch } from "../utils/useFetch";
import { getAuthToken } from "../utils/auth";

const initialState = {
  name: "",
  description: "",
  image: "",
  price: "",
};

const AddProduct = ({ onClose }) => {
  const { URL, setProducts } = useData();
  const [formData, setFormData] = useState(initialState);
  const modalRef = useRef(null);
  const { setLoading, setError, reFetch } = useFetch();

  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", clickOutsideHandler);
    // Clean-up the event
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, [onClose]);

  const submitHandler = async (e) => {
    e.preventDefault();

    await addProduct(formData);
  };

  const addProduct = async (formData) => {
    setLoading(true);

    const options = {
      method: "POST",
      headers: getAuthToken(),
      body: JSON.stringify(formData),
    };

    try {
      const data = await fetch(`${URL}/products`, options);
      const res = await data.json();

      if (res) {
        setProducts((...prevState) => [...prevState, res]);
        setFormData(initialState);
        reFetch();
        setLoading(false);
        onClose();
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // if (loading) return <p>Listing Product</p>;
  // if (error) return <p> {error.message} </p>;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white p-4 rounded shadow-md w-96">
        <h2 className="text-xl mb-4 text-black">Add Product</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <Input
              name="name"
              type="text"
              changeHandler={changeHandler}
              labelText="Item name: "
              labelClass="block mb-1"
              inputClass="text-black  w-full px-3 py-2 border rounded"
              placeHolder="Enter product name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Item Image</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter item image URL"
            />
          </div>
          <div className="mb-4">
            <Input
              name="description"
              type="text"
              changeHandler={changeHandler}
              labelText="Enter product descriptionPrice: "
              labelClass="block mb-1"
              inputClass="text-black  w-full px-3 py-2 border rounded"
              placeHolder="Enter product description"
              txtarea={true}
            />
          </div>
          <div className="mb-4">
            <Input
              name="price"
              type="number"
              changeHandler={changeHandler}
              labelText="Price: "
              labelClass="block mb-1"
              inputClass="text-black  w-full px-3 py-2 border rounded"
              placeHolder="Enter product price"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
