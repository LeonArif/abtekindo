"use client";
import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../firebase";

// Tambahkan fungsi komponen di sini
const TambahBarang = () => {
    const [nama, setNama] = useState("");
    const [jenis, setJenis] = useState("");
    const [tipe, setTipe] = useState("");
    const [merek, setMerek] = useState("");
    const [harga, setHarga] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    // Cek autentikasi saat komponen mount
    React.useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
            if (!user) {
                window.location.href = "/admin/auth";
            }
        });
        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        const db = getFirestore(app);
        try {
            await addDoc(collection(db, "barang"), {
                nama,
                jenis,
                tipe,
                merek,
                harga,
            });
            setSuccess("Barang berhasil ditambahkan!");
            setNama("");
            setJenis("");
            setTipe("");
            setMerek("");
            setHarga("");
        } catch (err: any) {
            setError(err.message);
        }
    };

    if (loading) {
        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#f5f5f5"}}>
                <div style={{background: "#fff", padding: "32px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", minWidth: "320px", textAlign: "center"}}>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }
    if (!user) {
        return null;
    }
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#f5f5f5"}}>
            <div style={{background: "#fff", padding: "32px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", minWidth: "320px"}}>
                <h2 style={{marginBottom: "24px", textAlign: "center"}}>Tambah Barang</h2>
                <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                    <input
                        type="text"
                        placeholder="Nama Barang"
                        value={nama}
                        onChange={e => setNama(e.target.value)}
                        required
                        style={{padding: "10px", borderRadius: "6px", border: "1px solid #ddd", background: "#fff"}}
                    />
                    <input
                        type="text"
                        placeholder="Jenis"
                        value={jenis}
                        onChange={e => setJenis(e.target.value)}
                        required
                        style={{padding: "10px", borderRadius: "6px", border: "1px solid #ddd", background: "#fff"}}
                    />
                    <input
                        type="text"
                        placeholder="Tipe"
                        value={tipe}
                        onChange={e => setTipe(e.target.value)}
                        required
                        style={{padding: "10px", borderRadius: "6px", border: "1px solid #ddd", background: "#fff"}}
                    />
                    <input
                        type="text"
                        placeholder="Merek"
                        value={merek}
                        onChange={e => setMerek(e.target.value)}
                        required
                        style={{padding: "10px", borderRadius: "6px", border: "1px solid #ddd", background: "#fff"}}
                    />
                    <input
                        type="number"
                        placeholder="Harga"
                        value={harga}
                        onChange={e => setHarga(e.target.value)}
                        required
                        style={{padding: "10px", borderRadius: "6px", border: "1px solid #ddd", background: "#fff"}}
                    />
                    <button type="submit" style={{padding: "10px", borderRadius: "6px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer", fontWeight: "bold"}}>Tambah</button>
                </form>
                {error && <p style={{color:"red", marginTop: "12px"}}>{error}</p>}
                {success && <p style={{color:"green", marginTop: "12px"}}>{success}</p>}
            </div>
        </div>
    );
}

// Export komponen
export default TambahBarang;