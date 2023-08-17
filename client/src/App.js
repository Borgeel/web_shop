import { Route, Routes, useNavigate } from "react-router-dom";
import DataContext, { DataProvider } from "./contexts/DataContext";

// Components
import Auth from "./components/Auth";
import { Home } from "./pages";
import { useEffect } from "react";
import { getUser } from "./utils/auth";

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
export const URL = "http://localhost:5000";

function App() {
  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, [user]);

  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/*" element={<Home products={products} user={user} />} />
          <Route path="/auth" element={<Auth URL={URL} />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
