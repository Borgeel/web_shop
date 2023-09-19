import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

// Components
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import GoogleButton from "../components/common/GoogleButton";
import { useLoading } from "../contexts/LoadingContext";
import { uniqueBtnId } from "../utils/getId";

const initialState = {
  username: "",
  password: "",
  email: "",
  firstName: "",
  lastName: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);
  const { user, auth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const authHandler = async (e) => {
    // e.preventDefault();
    try {
      await auth({ ...formData, isSignUp: isSignUp });
    } catch (error) {
      console.log("Error in authHandler: ", error);
    } finally {
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
        isSignUp: isSignUp,
      };
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        {isSignUp ? "Sign Up" : "Login"}
      </h1>
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl mb-4">{isSignUp ? "Sign Up" : "Login"}</h2>
        {/* <form onSubmit={authHandler}> */}
        <div className="mb-4">
          <Input
            name="username"
            type="text"
            onChange={onChange}
            placeholder={
              isSignUp ? "Enter your username" : "Enter your email or username"
            }
            labelClass="block mb-1"
            labelText="Username: "
            inputClass="w-full px-3 py-2 border rounded"
            autoFocus={true}
          />
        </div>
        {isSignUp && (
          <>
            <div className="mb-4">
              <Input
                name="email"
                type="text"
                onChange={onChange}
                placeholder="Enter your email"
                labelClass="block mb-1"
                labelText="Email: "
                inputClass="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <Input
                name="firstName"
                type="text"
                onChange={onChange}
                placeholder="Enter your first name"
                labelClass="block mb-1"
                labelText="First Name: "
                inputClass="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <Input
                name="lastName"
                type="text"
                onChange={onChange}
                placeholder="Enter your last name"
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
            onChange={onChange}
            placeholder="Enter your password"
            labelClass="block mb-1"
            labelText="Password : "
            inputClass="w-full px-3 py-2 border rounded"
          />
        </div>
        <Button
          buttonId={uniqueBtnId}
          className="w-full bg-blue-500 text-white py-2 rounded"
          type="submit"
          onClickRequest={authHandler}
        >
          {!isSignUp ? "Login" : "Sign up"}
        </Button>
        {/* </form> */}
        <GoogleButton isSignUp={isSignUp} />
        <p className="mt-2">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <Button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 ml-1"
          >
            {isSignUp ? "Login" : "Sign up"}{" "}
          </Button>
        </p>
      </div>
      <p className="mt-4">
        <Button
          className={"text-blue-500 focus:outline-none"}
          onClick={() => setIsSignUp(!isSignUp)}
        >
          Forgot your email or password?
        </Button>
      </p>
    </div>
  );
};

export default Auth;
