import { useEffect, useState } from "react";
import { LoginForm, RegistrationForm } from "./components";

const initialState = {
  username: "",
  email: "",
  password: "",
};

function App() {
  const [formData, setFormData] = useState(initialState);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <h2 className="text-3xl">
      <RegistrationForm changeHandler={changeHandler} />
    </h2>
  );
}

export default App;
