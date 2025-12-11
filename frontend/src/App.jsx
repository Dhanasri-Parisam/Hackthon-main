// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
// import other pages if you need them

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />
      {/* root goes to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<div style={{padding:20}}>Not found</div>} />
    </Routes>
  );
}
