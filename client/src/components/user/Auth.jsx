import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../common/Input";
import { useAuth } from "../../hooks/useAuth";

const initialState = {
  username: "",
  password: "",
};

const Auth = ({ URL }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const { login } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const settings = {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(formData),
      };
      const res = await fetch(
        `${URL}/users/${isSignUp ? "signup" : "login"}`,
        settings
      );
      const data = await res.json();
      console.log({ data });
      if (data.success) {
        login(data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        {isSignUp ? "Sign Up" : "Login"}
      </h1>
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl mb-4">{isSignUp ? "Sign Up" : "Login"}</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <Input
              name="username"
              type="text"
              changeHandler={changeHandler}
              placeHolder="Enter your username"
              labelClass="block mb-1"
              labelText="Username: "
              inputClass="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <Input
              name="password"
              type="password"
              changeHandler={changeHandler}
              placeHolder="Enter your password"
              labelClass="block mb-1"
              labelText="Password : "
              inputClass="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="mt-2">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 ml-1"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
      <p className="mt-4">
        Switch to{" "}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-blue-500 focus:outline-none"
        >
          {isSignUp ? "Login" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default Auth;
