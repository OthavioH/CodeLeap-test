import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignIn/SignUp";
import Posts from "../pages/Posts/Posts";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}
