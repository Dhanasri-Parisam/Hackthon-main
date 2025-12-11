import React from 'react';

const CourseForm = () => {
  return (
    <div className="admin-form">
      <h3>Add New Course</h3>
      <form>
        <div className="form-group">
          <label>Course Title</label>
          <input type="text" placeholder="e.g. Data Structures & Algorithms" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Course Code</label>
            <input type="text" placeholder="e.g. CS201" />
          </div>
          <div className="form-group">
            <label>Credits</label>
            <input type="number" placeholder="3" min="1" max="5" />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea placeholder="Enter brief course description..." rows="3"></textarea>
        </div>
        <button className="submit-btn">Create Course</button>
      </form>
    </div>
  );
};

export default CourseForm;