import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}
