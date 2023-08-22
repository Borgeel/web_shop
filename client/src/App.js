import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

// Components
import { Home } from "./containers";
import { Auth } from "./components";
import { useAuth } from "./hooks/useAuth";
import { API } from "./api";
import { useEffect } from "react";

function App() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated() || !user) navigate("/auth");
  }, [isAuthenticated, user, navigate]);

  // const ProtectedRoutes = ({ element }) => {
  //   if (!isAuthenticated()) {
  //     return <Navigate to="/auth" />;
  //   }
  //   return element;
  // };

  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth URL={API} />} />
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
