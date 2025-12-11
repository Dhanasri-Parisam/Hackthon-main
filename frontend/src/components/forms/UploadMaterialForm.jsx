// frontend/src/components/UploadMaterialForm.jsx
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
    if (!subject.trim() || !topic.trim() || !link.trim()) {
      return alert("Please fill Subject, Topic and Link");
    }
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
      console.error("Upload error:", err);
      alert("Upload failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-slate-100">
      <h3 className="text-2xl font-semibold mb-4">Upload Lecture Notes</h3>
      <p className="text-sm text-slate-400 mb-6">Upload study materials for students to filter and download.</p>

      <form onSubmit={handleUpload} className="space-y-4 max-w-lg">
        {/* Academic Year */}
        <div>
          <div className="text-sm font-medium mb-1">Academic Year</div>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="block w-40 bg-transparent text-slate-100 text-sm border border-slate-200 px-2 py-1"
          >
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
        </div>

        {/* Department */}
        <div>
          <div className="text-sm font-medium mb-1">Department / Branch</div>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="block w-56 bg-transparent text-slate-100 text-sm border border-slate-200 px-2 py-1"
          >
            <option>Computer Science (CSE)</option>
            <option>Electronics (ECE)</option>
            <option>Mechanical</option>
            <option>Civil</option>
          </select>
        </div>

        {/* Subject */}
        <div>
          <div className="text-sm font-medium mb-1">Subject Name</div>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="C language"
            className="block w-80 bg-transparent text-slate-100 text-sm border border-slate-200 px-2 py-1"
          />
        </div>

        {/* Topic */}
        <div>
          <div className="text-sm font-medium mb-1">Topic / Unit</div>
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Loops"
            className="block w-64 bg-transparent text-slate-100 text-sm border border-slate-200 px-2 py-1"
          />
        </div>

        {/* Academic Dept preview */}
        <div>
          <div className="text-sm font-medium mb-1">Academic Dept (Preview)</div>
          <div className="text-sm text-slate-200">{department} • {year}</div>
        </div>

        {/* Link */}
        <div>
          <div className="text-sm font-medium mb-1">Google Drive / File Link</div>
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://drive.google.com/..."
            className="block w-96 bg-transparent text-slate-100 text-sm border border-slate-200 px-2 py-1"
          />
          <p className="text-xs text-slate-400 mt-1">Make sure the Drive link is shareable (Anyone with the link).</p>
        </div>

        {/* Buttons */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-block bg-slate-100 text-slate-900 px-3 py-1 text-sm border border-slate-300"
          >
            {loading ? "Uploading..." : "Upload Material"}
          </button>

          <button
            type="button"
            onClick={() => { setSubject(""); setTopic(""); setLink(""); }}
            className="ml-2 inline-block bg-slate-100 text-slate-900 px-2 py-1 text-sm border border-slate-300"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
