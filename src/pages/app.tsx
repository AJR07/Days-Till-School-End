import { Routes, Route, BrowserRouter } from "react-router-dom";
import EOY from "./eoys/eoys";
import Home from "./home/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/eoy" element={<EOY />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
