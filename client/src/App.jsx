import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </>
  );
}

export default App;
