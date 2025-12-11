import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setTimeout(() => {
      navigate("/login");
    }, 10);  // small delay so cleanup completes
  }, [navigate]);

  return <div style={{ color: "#fff" }}>Logging out...</div>;
}
