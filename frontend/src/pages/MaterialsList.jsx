import React, { useEffect, useState } from "react";

export default function MaterialsList() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const res = await fetch('/api/materials');
      const data = await res.json();
      setMaterials(data);
    } catch (err) {
      console.error(err);
      setMaterials([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const handler = () => load();
    window.addEventListener('materials-changed', handler);
    return () => window.removeEventListener('materials-changed', handler);
  }, []);

  if (loading) return <div style={{padding:20}}>Loading materials...</div>;
  if (!materials.length) return <div style={{padding:20}}>No materials uploaded yet</div>;

  return (
    <div style={{maxWidth:1000}}>
      <h2 style={{color:'#fff'}}>Lecture Materials</h2>
      {materials.map(m => (
        <div key={m._id} style={{border:'1px solid #eee', padding:12, marginBottom:10, borderRadius:6, background:'#fff', color:'#111'}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div><strong>{m.subject}</strong> — {m.topic}</div>
            <div style={{fontSize:12,color:'#666'}}>{new Date(m.createdAt).toLocaleString()}</div>
          </div>
          <div style={{marginTop:8}}>{m.year} • {m.department}</div>
          <div style={{marginTop:8}}><a href={m.link} target="_blank" rel="noreferrer">Open Link</a></div>
        </div>
      ))}
    </div>
  );
}
