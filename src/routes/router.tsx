import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignIn/SignUp";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
    </Routes>
  );
}
