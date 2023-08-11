import { useEffect, useState } from "react";
import { LoginForm, RegistrationForm } from "./components";

const initialState = {
  username: "",
  email: "",
  password: "",
};

function App() {
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

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <RegistrationForm
        changeHandler={changeHandler}
        submitHandler={submitHandler}
      /> */}
      <LoginForm changeHandler={changeHandler} submitHandler={submitHandler} />
    </>
  );
}

export default App;
