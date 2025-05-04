import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about">
        About Us
      </NavLink>
      <NavLink to="/products">
        Products & Services
      </NavLink>
      <a
        href="https://formmill.com/contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={{
          background: "#663399",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "0.5em 1.2em",
          fontWeight: 700,
          marginLeft: "1em",
          boxShadow: "0 1px 4px rgba(102,51,153,0.06)"
        }}>
          Contact Us
        </button>
      </a>
    </nav>
  );
}
