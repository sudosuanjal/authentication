import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import { Toaster } from "./components/ui/toaster";
import { useStore } from "./store/auth.store";
import { useEffect } from "react";
import HomeLayout from "./pages/HomeLayout";
import ForgotPassword from "./pages/ForgotPassword";
import LogOut from "./pages/LogOut";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useStore();
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }
  if (!user.isVerified) {
    return <Navigate to={"/verify-email"} replace />;
  }

  return children;
};

const AuthenticatedUserRoute = ({ children }) => {
  const { isAuthenticated, user } = useStore();
  console.log("AuthenticatedUserRoute: " + user);

  if (isAuthenticated && user.isVerified) {
    return <Navigate to={"/"} replace />;
  }

  return children;
};

function App() {
  const { checkAuth } = useStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomeLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/logout" element={<LogOut />} />
        </Route>

        <Route
          path="/login"
          element={
            <AuthenticatedUserRoute>
              <Login />
            </AuthenticatedUserRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthenticatedUserRoute>
              <Signup />
            </AuthenticatedUserRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <AuthenticatedUserRoute>
              <VerifyEmail />
            </AuthenticatedUserRoute>
          }
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
