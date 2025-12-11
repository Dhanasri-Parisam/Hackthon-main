// frontend/src/pages/StudentPanel.jsx
import React, { useEffect, useState } from 'react';
import { getAllStudents } from '../api/students'; // adjust path if needed

export default function StudentPanel() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch (err) {
      console.error(err);
      setStudents([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // refresh on admin changes
    const h = () => load();
    window.addEventListener('students-changed', h);
    return () => window.removeEventListener('students-changed', h);
  }, []);

  if (loading) return <div>Loading students…</div>;
  if (!students.length) return <div>No students found</div>;

  return (
    <div style={{maxWidth:900, margin:'16px auto'}}>
      <h3>Students</h3>
      {students.map(s => (
        <div key={s._id || s.roll} style={{border:'1px solid #eee', padding:12, marginBottom:8}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong>{s.name}</strong>
            <span>{s.roll}</span>
          </div>
          <div><b>Batch:</b> {s.batch || '-'}</div>
          <div><b>Department:</b> {s.department || '-'}</div>
          <div><b>Email:</b> {s.email || '-'}</div>
        </div>
      ))}
    </div>
  );
}
