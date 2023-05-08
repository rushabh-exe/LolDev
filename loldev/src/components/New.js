import React, { useState } from 'react';
import './style/New.css';

function New() {
  const [banner, setBanner] = useState('');

  const handleBannerChange = (e) => {
    setBanner(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className="container-uph">
        <form action="submit">
          <div className="uph-info">
            <div className="uph-flexbox">
              <input type="text" name="htn-title" id="htn-title" placeholder='Name Of Hackathon' />
              <input type="date" name="htn-date" id="htn-date" />
              <input type="number" name="htn-team-size" id="htn-team-size" placeholder='Set Team Size Limit' />
              <input type="text" name="htn-location" id="htn-location" placeholder='Location Of Hackathon And Location Pincode eg.(New York - 5585858' />

            </div>
            <div className="uph-flexbox">

              <input type="text" name="htn-description" id="htn-description" placeholder='Write A Description For Your Hackathon' />
              <input type="text" name="htn-description" id="htn-short-description" placeholder='Write A Short Description For Your Hackathon To Show On Hackathon Card' />

            </div>

            <input type="file" name="htn-banner" id="htn-banner" accept="image/*" onChange={handleBannerChange} />
          </div>
          {banner && <img className='htn-banner-preview' src={banner} alt="Hackathon Banner Preview" />}
          <div className="uph-publish">
            <button type="submit">Publish</button>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default New;
