import React, { useState } from "react";

export default function UploadMaterialForm() {
  const [year, setYear] = useState("1st Year");
  const [department, setDepartment] = useState("Computer Science (CSE)");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e?.preventDefault();
    if (!subject || !topic || !link) return alert("Please fill Subject, Topic and Link");
    const payload = { year, department, subject, topic, link };
    try {
      setLoading(true);
      const res = await fetch("/api/materials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");
      alert("Material uploaded successfully");
      setSubject(""); setTopic(""); setLink("");
      window.dispatchEvent(new Event("materials-changed"));
    } catch (err) {
      console.error(err);
      alert("Upload failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleUpload} style={{maxWidth:900, margin:'0 auto', padding:16, background:'#fff', borderRadius:8}}>
      <h3>Upload Lecture Notes</h3>
      <div style={{display:'flex', gap:12, marginBottom:8}}>
        <select value={year} onChange={e=>setYear(e.target.value)} style={{flex:1,padding:8}}>
          <option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option>
        </select>
        <select value={department} onChange={e=>setDepartment(e.target.value)} style={{flex:1,padding:8}}>
          <option>Computer Science (CSE)</option><option>Electronics (ECE)</option><option>Mechanical</option><option>Civil</option>
        </select>
      </div>

      <input value={subject} onChange={e=>setSubject(e.target.value)} placeholder="Subject Name" style={{width:'100%',padding:8,marginBottom:8}} />
      <input value={topic} onChange={e=>setTopic(e.target.value)} placeholder="Topic / Unit" style={{width:'100%',padding:8,marginBottom:8}} />
      <input value={link} onChange={e=>setLink(e.target.value)} placeholder="Google Drive / File Link" style={{width:'100%',padding:8,marginBottom:12}} />

      <button type="submit" disabled={loading} style={{padding:'8px 14px',background:'#111827',color:'#fff',borderRadius:6}}>
        {loading ? 'Uploading...' : 'Upload Material'}
      </button>
    </form>
  );
}
