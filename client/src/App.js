import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// Components
import { Home } from "./containers";
import { Auth } from "./components";
import { useAuth } from "./hooks/useAuth";
import { useData } from "./contexts/DataContext";

function App() {
  const { isAuth, user } = useAuth();
  const { products } = useData();
  const navigate = useNavigate();

  console.log(products);

  useEffect(() => {
    if (!isAuth && !user) {
      navigate("/auth");
    }
  }, [isAuth, user, navigate]);

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
