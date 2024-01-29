import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Subscribe from "./pages/Subscribe";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
      <SpeedInsights />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
