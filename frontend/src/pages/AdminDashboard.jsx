// frontend/src/pages/AdminDashboard.jsx
import React, { useState } from "react";


// Import the components you already have
import PlacementForm from "../components/forms/PlacementForm";
import NotesForm from "../components/forms/NotesForm";
import UploadMaterialForm from "../components/forms/UploadMaterialForm";
import TransportForm from "../components/forms/TransportForm";
import EventForm from "../components/forms/EventForm";
import MaterialsList from "./MaterialsList"; // If exists. If not, NotesForm will be shown.

const AdminDashboard = () => {
  // Default tab
  const [activeTab, setActiveTab] = useState("placements");

  // Which page to show inside main area
  const renderContent = () => {
    switch (activeTab) {
      case "placements":
        return <PlacementForm />;

      case "lecture-notes":
        // If MaterialsList exists, show it. If not, fallback to NotesForm.
        return MaterialsList ? <MaterialsList /> : <NotesForm />;

      case "upload-material":
        return <UploadMaterialForm />;

      case "transport":
        return <TransportForm />;

      case "events":
        return <EventForm />;

      default:
        return <div style={{ color: "#fff" }}>Select a panel</div>;
    }
  };

  // Sidebar items
  const sidebarItem = (key, label) => (
    <div
      onClick={() => setActiveTab(key)}
      style={{
        padding: "12px 18px",
        cursor: "pointer",
        background: activeTab === key ? "rgba(255,255,255,0.08)" : "transparent",
        color: activeTab === key ? "#ffd166" : "#e2e8f0",
        borderRadius: 6,
        marginBottom: 4,
        fontWeight: 500,
      }}
    >
      {label}
    </div>
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0d1117" }}>
      {/* SIDEBAR */}
      <aside
        style={{
          width: 260,
          background: "#0f172a",
          color: "#fff",
          padding: 20,
          boxSizing: "border-box",
        }}
      >
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ margin: 0 }}>Admin Panel</h2>
          <div style={{ fontSize: 13, color: "#94a3b8" }}>Innovation Hub</div>
        </div>

        {/* ONLY THESE FIVE ITEMS */}
        {sidebarItem("placements", "Placements")}
        {sidebarItem("lecture-notes", "Lecture Notes")}
        {sidebarItem("upload-material", "Upload Material")}
        {sidebarItem("transport", "Transport Info")}
        {sidebarItem("events", "Event Manager")}

        <div style={{ marginTop: 20 }}>
          <div
            onClick={() => alert("Implement logout later")}
            style={{ padding: "12px 18px", cursor: "pointer", color: "#fca5a5" }}
          >
            Logout
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, padding: "24px 32px" }}>
        <h1 style={{ color: "#fff", marginTop: 0 }}>
          Welcome back to Dashboard !!
        </h1>

        <div style={{ marginTop: 20 }}>{renderContent()}</div>
      </main>
    </div>
  );
};

export default AdminDashboard;