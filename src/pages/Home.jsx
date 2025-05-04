import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h1 style={{ fontSize: "2.7rem", marginBottom: "1.2rem" }}>
        <strong>The</strong> Interesting Group
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        style={{
          fontSize: "1.35rem",
          maxWidth: 600,
          margin: "2rem 0",
          color: "#444"
        }}
      >
        Modern IT solutions for ambitious businesses.<br />
        <span style={{ color: "#663399" }}>
          Networking, Cloud, Security, Collaboration, and more.
        </span>
      </motion.p>
      <motion.img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
        alt="Minimalist tech"
        style={{
          width: "100%",
          maxWidth: 600,
          borderRadius: 16,
          boxShadow: "0 2px 24px rgba(102,51,153,0.06)",
          marginBottom: "2rem"
        }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
      />
    </motion.div>
  );
}
