import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

// Components
import { LoginForm, RegistrationForm, ProductList } from "./components";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const products = [
  {
    id: "1",
    name: "tiru",
    price: "200",
  },
  {
    id: "2",
    name: "tilu",
    price: "200",
  },
  {
    id: "3",
    name: "tirulilil",
    price: "200",
  },
];

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const URL = "http://localhost:5000";

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e, path) => {
    e.preventDefault();

    try {
      const settings = {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(formData),
      };

      const res = await fetch(`${URL}/users/${path}`, settings);
      const data = await res.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        navigate("/products");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginForm
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RegistrationForm
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
          }
        />
        <Route
          path="/products"
          element={<ProductList products={products} url={URL} />}
        />
      </Routes>
    </>
  );
}

export default App;
