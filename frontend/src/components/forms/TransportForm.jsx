import React from 'react';

const TransportForm = () => {
  return (
    <div className="admin-form fade-in">
      <div className="form-header">
        <h3>Transport Management</h3>
        <p>Update bus routes and parking locations for exam days.</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <div className="form-group">
            <label>Bus Number</label>
            <input type="text" placeholder="e.g. AP 05 Z 4321" style={{ fontWeight: 'bold' }} />
          </div>
          <div className="form-group">
            <label>Driver Name</label>
            <input type="text" placeholder="Driver Name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Driver Phone</label>
            <input type="tel" placeholder="+91 98765 43210" />
          </div>
          <div className="form-group">
            <label>Route / Destination</label>
            <input type="text" placeholder="e.g. Rajahmundry via Kadiyam" />
          </div>
        </div>

        {/* --- CRITICAL FEATURE: Exam Ground Change --- */}
        <div className="form-group warning-box" style={{ 
          background: '#fff7ed', 
          border: '1px solid #fdba74', 
          padding: '15px', 
          borderRadius: '8px' 
        }}>
          <label style={{ color: '#c2410c', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>⚠️</span> Update Parking Ground (Exam Special)
          </label>
          <p style={{ fontSize: '0.8rem', color: '#9a3412', marginBottom: '8px' }}>
            If the bus is moved due to exams, update the location here so students can find it.
          </p>
          <select style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #fdba74' }}>
            <option>Standard Parking (Main Ground)</option>
            <option>Polytechnic College Ground</option>
            <option>Engineering Block B Backside</option>
            <option>Hostel Grounds</option>
            <option>Outside Main Gate</option>
          </select>
        </div>

        <button className="submit-btn">Update Bus Status</button>
      </form>
    </div>
  );
};

export default TransportForm;