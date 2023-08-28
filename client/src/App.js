import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

// Components
import { Home } from "./containers";
import { Auth } from "./components";
import { useAuth } from "./hooks/useAuth";
import { API } from "./api";
import { useEffect } from "react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate, user]);

  // const ProtectedRoutes = ({ element }) => {
  //   if (!isAuthenticated()) {
  //     return <Navigate to="/auth" />;
  //   }
  //   return element;
  // };

  return (
    <>
      <Routes>
        {/* <Route
          path="/*"
          element={<ProtectedRoutes element={<Home user={user} />} />}
        /> */}
        <Route path="/*" element={<Home user={user} />} />
        <Route path="/auth" element={<Auth URL={API} />} />
      </Routes>
    </>
  );
}

export default App;
