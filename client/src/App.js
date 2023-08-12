import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// Components
import { Footer, Header, ProductList } from "./components";
import Auth from "./components/Auth";

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

  const user = localStorage.getItem("token");

  console.log(user);

  const URL = "http://localhost:5000";

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/auth" element={<Auth URL={URL} />} />
        <Route
          path="/products"
          element={<ProductList products={products} url={URL} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
