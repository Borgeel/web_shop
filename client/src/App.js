import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// Components
import { Home } from "./containers";
import { Auth } from "./components";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { isAuth, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth && !user) {
      navigate("/auth");
    }
  }, [isAuth, user, navigate]);

  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />

        <Route path="/*" element={<Home user={user} />} />
      </Routes>
    </>
  );
}

export default App;
