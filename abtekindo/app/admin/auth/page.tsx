"use client";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase"; // pastikan path sesuai

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const auth = getAuth(app);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect ke halaman admin setelah login
      window.location.href = "/admin/add";
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#f5f5f5"}}>
      <div style={{background: "#fff", padding: "32px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", minWidth: "320px"}}>
        <h2 style={{marginBottom: "24px", textAlign: "center"}}>Admin Login</h2>
        <form onSubmit={handleLogin} style={{display: "flex", flexDirection: "column", gap: "12px"}}>
          <input
            type="email"
            placeholder="Email admin"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{padding: "10px", borderRadius: "6px", border: "1px solid #ddd", background: "#fff"}}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{padding: "10px", borderRadius: "6px", border: "1px solid #ddd", background: "#fff"}}
          />
          <button type="submit" style={{padding: "10px", borderRadius: "6px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer", fontWeight: "bold"}}>Login</button>
        </form>
        {error && <p style={{color:"red", marginTop: "12px"}}>{error}</p>}
      </div>
    </div>
  );
}