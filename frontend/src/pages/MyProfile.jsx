// frontend/src/pages/MyProfile.jsx
import React, { useEffect, useState } from 'react';
import { getStudentByRoll } from '../api/students';

export default function MyProfile() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const roll = localStorage.getItem('studentRoll'); // set this at login
    if (!roll) { setLoading(false); return; }
    (async () => {
      try {
        const s = await getStudentByRoll(roll);
        setStudent(s);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>Loading…</div>;
  if (!student) return <div>No profile found</div>;
  return (
    <div>
      <h2>{student.name}</h2>
      <p><b>Roll:</b> {student.roll}</p>
      <p><b>Batch:</b> {student.batch}</p>
      <p><b>Dept:</b> {student.department}</p>
      <p><b>Email:</b> {student.email}</p>
    </div>
  );
}
