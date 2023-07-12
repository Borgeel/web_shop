const LoginForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-8">Login</h2>
        <form>
          <div className="mb-6">
            <label className="block mb-2 font-bold text-gray-700">
              Username or email:
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Enter your name or email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-bold text-gray-700">
              Password:
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
