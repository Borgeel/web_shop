import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { tokenHandler } from "../../api";

// Components
import Input from "../common/Input";
import Button from "../common/Button";
import GoogleButton from "../common/GoogleButton";

const initialState = {
  username: "",
  password: "",
  email: "",
  firstName: "",
  lastName: "",
};

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { login, isAuth, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth && user) {
      navigate("/");
    }
  }, [user, navigate, isAuth]);

  const submitHandler = async (e, isSignUp) => {
    e.preventDefault();
    try {
      const credentials = await tokenHandler(formData);

      if (credentials && credentials.success)
        login(credentials.token, isSignUp);
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
          {isSignUp && (
            <>
              <div className="mb-4">
                <Input
                  name="email"
                  type="text"
                  changeHandler={changeHandler}
                  placeHolder="Enter your email"
                  labelClass="block mb-1"
                  labelText="Email: "
                  inputClass="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <Input
                  name="firstName"
                  type="text"
                  changeHandler={changeHandler}
                  placeHolder="Enter your first name"
                  labelClass="block mb-1"
                  labelText="First Name: "
                  inputClass="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <Input
                  name="lastName"
                  type="text"
                  changeHandler={changeHandler}
                  placeHolder="Enter your last name"
                  labelClass="block mb-1"
                  labelText="Last Name: "
                  inputClass="w-full px-3 py-2 border rounded"
                />
              </div>
            </>
          )}
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
          <Button
            buttonTxt={!isSignUp ? "Login" : "Sign up"}
            buttonClass="w-full bg-blue-500 text-white py-2 rounded"
            type="submit"
          />
          <GoogleButton isSignUp={isSignUp} type="submit" />
        </form>
        <p className="mt-2">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <Button
            onClick={() => setIsSignUp(!isSignUp)}
            buttonTxt={isSignUp ? "Login" : "Sign up"}
            buttonClass="text-blue-500 ml-1"
          />
        </p>
      </div>
      <p className="mt-4">
        <Button
          buttonClass={"text-blue-500 focus:outline-none"}
          onClick={() => setIsSignUp(!isSignUp)}
          buttonTxt={"Forgot your email or password?"}
        />
      </p>
    </div>
  );
};

export default Auth;
