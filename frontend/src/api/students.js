// frontend/src/api/students.js
export async function createStudent(payload) {
  const res = await fetch('/api/students', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Failed to create student');
  return data.student || data;
}

export async function getAllStudents() {
  const res = await fetch('/api/students');
  if (!res.ok) throw new Error('Failed to fetch students');
  return await res.json();
}

export async function getStudentByRoll(roll) {
  const res = await fetch('/api/students/' + encodeURIComponent(roll));
  if (!res.ok) throw new Error('Student not found');
  return await res.json();
}
