import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LSB from "./pages/videos/LSB";
import MSB from "./pages/videos/MSB";
import WIFI from "./pages/videos/WIFI";
import APPSEC from "./pages/videos/APPSEC";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/CryptoGraph-LSB" element={<LSB />} />
        <Route path="/CryptoGraph-MSB" element={<MSB />} />
        <Route path="/Network-Scan" element={<WIFI />} />
        <Route path="/APP-SEC" element={<APPSEC />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
