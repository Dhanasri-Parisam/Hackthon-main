import React from 'react';

const NotesForm = () => {
  return (
    <div className="admin-form fade-in">
      <div className="form-header">
        <h3>Upload Lecture Notes</h3>
        <p>Upload study materials for students to filter and download.</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <div className="form-group">
            <label>Academic Year</label>
            <select className="select-input">
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>
          <div className="form-group">
            <label>Department / Branch</label>
            <select className="select-input">
              <option value="">Select Branch</option>
              <option value="CSE">Computer Science (CSE)</option>
              <option value="AIML">AI & ML (AIML)</option>
              <option value="DS">Data Science (DS)</option>
              <option value="ECE">Electronics (ECE)</option>
              <option value="IT">Info Tech (IT)</option>
              <option value="IOT">Internet of Things (IOT)</option>
              <option value="CIVIL">Civil Engineering</option>
              <option value="MECH">Mechanical Engineering</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Subject Name</label>
          <input type="text" placeholder="e.g. Database Management Systems" />
        </div>

        <div className="form-group">
          <label>Topic / Unit</label>
          <input type="text" placeholder="e.g. Unit 3 - SQL Queries" />
        </div>

        <div className="form-group">
          <label>Google Drive / File Link</label>
          <input type="url" placeholder="https://drive.google.com/file/..." />
        </div>

        <button className="submit-btn">Upload Material</button>
      </form>
    </div>
  );
};

export default NotesForm;