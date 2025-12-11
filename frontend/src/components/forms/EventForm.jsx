import React from 'react';

const EventForm = () => {
  return (
    <div className="admin-form fade-in">
      <div className="form-header">
        <h3>Event Organizer Portal</h3>
        <p>Create events and generate secret codes for student registration.</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Event Title</label>
          <input type="text" placeholder="e.g. Hackathon 2025: Innovation Drive" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Organizer / Club</label>
            <input type="text" placeholder="e.g. Technical Hub / ACET" />
          </div>
          <div className="form-group">
            <label>Date & Time</label>
            <input type="datetime-local" />
          </div>
        </div>

        <div className="form-group">
          <label>Event Description</label>
          <textarea rows="3" placeholder="Enter event details, venue, and rules..."></textarea>
        </div>

        {/* --- CRITICAL FEATURE: Secret Code --- */}
        <div className="form-group secret-code-box" style={{ 
          background: '#f0fdf4', 
          border: '1px solid #86efac', 
          padding: '15px', 
          borderRadius: '8px' 
        }}>
          <label style={{ color: '#15803d', fontWeight: 'bold' }}>🔒 Generate Secret Code</label>
          <p style={{ fontSize: '0.8rem', color: '#166534', marginBottom: '10px' }}>
            Students must enter this code to unlock the "Register" button.
          </p>
          <input 
            type="text" 
            placeholder="ENTER CODE (e.g. INNO25)" 
            style={{ 
              letterSpacing: '3px', 
              fontWeight: 'bold', 
              textAlign: 'center', 
              textTransform: 'uppercase' 
            }} 
          />
        </div>

        <div className="form-group">
          <label>n8n Webhook Status</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#666' }}>
            <div style={{ width: '10px', height: '10px', background: '#22c55e', borderRadius: '50%' }}></div>
            Connected to Email Automation
          </div>
        </div>

        <button className="submit-btn">Publish Event</button>
      </form>
    </div>
  );
};

export default EventForm;