import React, { useState } from 'react';
import { Upload, X } from 'lucide-react'; // Import icons for better UI

const PlacementForm = () => {
  // 1. State for storing the selected file and its preview URL
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // 2. Handler for when a user selects a file
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file selected
    if (file && file.type.substr(0, 5) === "image") {
      setSelectedImage(file);
      // Create a temporary URL to display the image preview
      setImagePreview(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
      setImagePreview(null);
    }
  };

  // Handler to remove the selected image
  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // --- Backend Integration Note ---
    // When submitting files, you typically use FormData.
    // Example:
    // const formData = new FormData();
    // formData.append('companyName', e.target.elements[0].value);
    // if (selectedImage) {
    //    formData.append('companyLogo', selectedImage);
    // }
    // await axios.post('/api/placements', formData, { headers: { 'Content-Type': 'multipart/form-data' } });

    console.log("Form submitted. File to upload:", selectedImage?.name);
    alert(selectedImage ? `Ready to post with image: ${selectedImage.name}` : "Ready to post without image.");
  };

  return (
    <div className="admin-form fade-in">
      <div className="form-header">
        <h3>Placement Drive Updates</h3>
        <p>Post new job opportunities or shortlisted student lists.</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* --- NEW SECTION: Image Upload --- */}
        <div className="form-group">
          <label>Company Logo / Job Poster (Optional)</label>
          
          {!imagePreview ? (
            // Upload Button Style
            <div className="upload-box-container" style={{ position: 'relative' }}>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                id="imageUpload"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'pointer',
                  zIndex: 2
                }}
              />
              <div style={{
                 border: '2px dashed #ccc',
                 borderRadius: '8px',
                 padding: '20px',
                 textAlign: 'center',
                 background: '#f9fafb',
                 color: '#666',
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 gap: '10px'
              }}>
                 <Upload size={24} color="#666" />
                 <span>Click or drag to upload an image</span>
                 <small style={{ fontSize: '0.8rem', color: '#999' }}>PNG, JPG up to 5MB</small>
              </div>
            </div>
          ) : (
            // Image Preview Style
            <div className="image-preview-container" style={{ position: 'relative', display: 'inline-block', marginTop: '10px' }}>
              <img 
                src={imagePreview} 
                alt="Preview" 
                style={{
                  maxWidth: '100%',
                  maxHeight: '200px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              <button 
                type="button"
                onClick={removeImage}
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                <X size={14} />
              </button>
            </div>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="e.g. TCS, Wipro, Accenture" />
          </div>
          <div className="form-group">
            <label>Package (LPA)</label>
            <input type="text" placeholder="e.g. 4.5 LPA" />
          </div>
        </div>

        <div className="form-group">
          <label>Job Role / Profile</label>
          <input type="text" placeholder="e.g. Graduate Trainee / System Engineer" />
        </div>

        <div className="form-group">
          <label>Job Description & Eligibility</label>
          <textarea 
            rows="4" 
            placeholder="Enter eligibility criteria (e.g. 60% in B.Tech), skills required, and job location..."
          ></textarea>
        </div>

        <div className="form-group">
          <label>Shortlisted Students (List)</label>
          <textarea 
            rows="6" 
            placeholder="Paste the Roll Numbers or Names of selected students here..."
            style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}
          ></textarea>
          <small style={{ color: '#666' }}>These students will be notified on their dashboard.</small>
        </div>

        <button className="submit-btn">Post Placement Update</button>
      </form>
    </div>
  );
};

export default PlacementForm;