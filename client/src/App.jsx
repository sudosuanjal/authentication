import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import { Toaster } from "./components/ui/toaster";
import { useStore } from "./store/auth.store";
import { useEffect } from "react";
import HomeLayout from "./pages/HomeLayout";
import LogOut from "./pages/LogOut";
import ResetPasswordToken from "./pages/ResetPasswordToken";
import ResetPassword from "./pages/ResetPassword";
import { Loader } from "lucide-react";

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

  if (isAuthenticated && user?.isVerified) {
    return <Navigate to={"/"} replace />;
  }

  return children;
};

function App() {
  const { checkAuth, isLoading } = useStore();

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
          <Route path="/reset-password" element={<ResetPassword />} />
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
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password/:token" element={<ResetPasswordToken />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
