import { Route, Routes } from "react-router-dom";

// Components
import { Home } from "./containers";
import { Auth } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<Home />} />
        {/* <Route
          path="/product"
          element={<ProductPage user={user} product={product} />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
