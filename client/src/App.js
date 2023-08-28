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

  // const ProtectedRoutes = ({ element }) => {
  //   if (!isAuthenticated()) {
  //     return <Navigate to="/auth" />;
  //   }
  //   return element;
  // };

  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        {/* <Route
          path="/*"
          element={<ProtectedRoutes element={<Home user={user} />} />}
        /> */}
        <Route path="/*" element={<Home user={user} />} />

        {/* <Route path="/*" element={<Home user={isAuthenticated} />} /> */}
      </Routes>
    </>
  );
}

export default App;
