import Input from "./Input";

const RegistrationForm = ({ changeHandler, submitHandler }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-8">
          Registration Form
        </h2>
        <form onSubmit={(e) => submitHandler(e, "register")}>
          <div className="mb-6">
            <Input
              name="username"
              type="text"
              labelClass="block mb-2 font-bold text-gray-700"
              labelText="Name:"
              inputClass="w-full p-2 border border-gray-300 rounded-md"
              placeHolder="Enter your name"
              changeHandler={changeHandler}
            />
          </div>
          <div className="mb-6">
            <Input
              name="email"
              type="text"
              labelClass="block mb-2 font-bold text-gray-700"
              labelText="Email:"
              inputClass="w-full p-2 border border-gray-300 rounded-md"
              placeHolder="Enter your email"
              changeHandler={changeHandler}
            />
          </div>
          <div className="mb-6">
            <Input
              name="password"
              type="password"
              labelClass="block mb-2 font-bold text-gray-700"
              labelText="Password:"
              inputClass="w-full p-2 border border-gray-300 rounded-md"
              placeHolder="Enter your password"
              changeHandler={changeHandler}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
