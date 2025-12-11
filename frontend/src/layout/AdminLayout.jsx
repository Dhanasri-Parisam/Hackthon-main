import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const sidebarStyle = {
    width: 240, minHeight: "100vh", background: "#0f1724", color: "#fff",
    padding: 20, boxSizing: "border-box", position: "fixed", left: 0, top: 0
  };
  const contentWrapper = { marginLeft: 270, padding: 24, minHeight: "100vh", background: "#0b1220" };
  const navItem = (to, text) => (
    <Link to={to} style={{display:"block", color:"#f8fafc", marginBottom:14, textDecoration:"none", fontWeight:500}}>
      {text}
    </Link>
  );

  return (
    <div style={{display:"flex"}}>
      <aside style={sidebarStyle}>
        <h2 style={{marginTop:0}}>Admin Panel</h2>
        <div style={{marginTop:18}}>
          {navItem("/", "Dashboard")}
          {navItem("/placements", "Placements")}
          {navItem("/notes", "Lecture Notes")}
          {navItem("/upload", "Upload Material")}
          {navItem("/transport", "Transport Info")}
          {navItem("/events", "Event Manager")}
          <div style={{height:10}} />
          <Link to="/logout" style={{color:"#fecaca", textDecoration:"none"}}>Logout</Link>
        </div>
      </aside>

      <div style={contentWrapper}>
        <header style={{color:"#fff", marginBottom:20}}>
          <h1 style={{margin:0}}>Welcome back to Dashboard !!</h1>
        </header>

        <main style={{minHeight:"70vh"}}>
          <Outlet />
        </main>

        <footer style={{color:"#94a3b8", marginTop:40}}>© QuickRabbit</footer>
      </div>
    </div>
  );
}
