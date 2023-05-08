import React, { useState } from 'react';
import './style/Profileedt.css';
function Profileedt() {
  const [profileImage, setProfileImage] = useState('');

  const handleProfileImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className="container-uph">
        <form className="uph-form" action="submit">
          <div className="uph-info">
            <div className="uph-flexbox">
              <label htmlFor="full-name" className="uph-label">Full Name</label>
              <input type="text" name="full-name" id="full-name" className="uph-input" placeholder='Enter Your Full Name' />
            </div>
            <div className="uph-flexbox">
              <label htmlFor="username" className="uph-label">Username</label>
              <input type="text" name="username" id="username" className="uph-input" placeholder='Enter Your Username' />
            </div>
            <div className="uph-flexbox">
              <label htmlFor="email" className="uph-label">Email</label>
              <input type="email" name="email" id="email" className="uph-input" placeholder='Enter Your Email' />
            </div>
            <div className="uph-flexbox">
              <label htmlFor="number" className="uph-label">Number</label>
              <input type='number' name="number" id="email" className="uph-input" placeholder='Enter Your Numberw' />
            </div>
            <div className="uph-flexbox">
              <label htmlFor="bio" className="uph-label">Bio</label>
              <textarea name="bio" id="bio" className="uph-textarea" placeholder='Enter Your Bio'></textarea>
            </div>
            <div className="uph-flexbox">
              <label htmlFor="profile-image" className="uph-label">Profile Image</label>
              <input type="file" name="profile-image" id="profile-image" className="uph-input-file" accept="image/*" onChange={handleProfileImageChange} />
            </div>
          </div>
          {profileImage && <img className='uph-profile-preview' src={profileImage} alt="Profile  Preview" />}
          <div className="uph-publish">
            <button type="submit" className="uph-btn">Save Changes</button>
            <button type="button" className="uph-btn">Cancel</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Profileedt;
