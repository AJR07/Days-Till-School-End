import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home/home";
import Y4 from "./y4s/y4s";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/y4" element={<Y4 />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
