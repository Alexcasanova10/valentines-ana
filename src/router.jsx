import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rickroll from "./pages/Rickroll";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rickroll" element={<Rickroll />} />
       </Routes>
    </BrowserRouter>
  );
};

export default Router;
