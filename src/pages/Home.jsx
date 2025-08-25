import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const { signOut } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut({ global: true });
    navigate("/")
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the home page 🎉</h1>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ff4b5c",
          color: "white",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
