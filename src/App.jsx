import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import MenuItem from "./pages/MenuItem.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:slug" element={<MenuItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
