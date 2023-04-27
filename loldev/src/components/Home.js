import React from 'react';

function Home() {
    return (
        //<!---main-right-->
        <div className="right-content">
            <div className="heading">
                <h2>EXPLORE</h2>
            </div>
            <div className="divider">
                <select name="Choose" id="relevant-select">
                    <option value="New">New</option>
                    <option value="Most-Popular">Most-Popular</option>
                    <option value="Most-Vacancy">Most-Vacancy</option>
                </select> <hr style={{ width: "100%" }} />
            </div>
            {/*List*/}
            <div className="list-community">
                <div className="community-card">
                    <img src="https://picsum.photos/100/100" alt="community Cover Image" />
                    <div className="community-details">
                        <h3 className="community-title">community Title</h3>
                        <p className="community-description">Short description of the community.</p>
                        <ul className="community-metadata">
                            <li><i className="fas fa-calendar-alt"></i> July 1 - 7, 2022</li>
                            <li><i className="fas fa-globe"></i> Offline</li>
                            <li><i className="fas fa-dollar-sign"></i>paying $500</li>
                        </ul>
                        <a href="#" className="community-button">Apply Now</a>
                    </div>
                </div>
                <div className="community-card">
                    <img src="https://picsum.photos/100/100" alt="community Cover Image" />
                    <div className="community-details">
                        <h3 className="community-title">community Title</h3>
                        <p className="community-description">Short description of the community.</p>
                        <ul className="community-metadata">
                            <li><i className="fas fa-calendar-alt"></i> July 1 - 7, 2022</li>
                            <li><i className="fas fa-globe"></i> Offline</li>
                            <li><i className="fas fa-dollar-sign"></i>paying $500</li>
                        </ul>
                        <a href="#" className="community-button">Apply Now</a>
                    </div>
                </div>
                <div className="community-card">
                    <img src="https://picsum.photos/100/100" alt="community Cover Image" />
                    <div className="community-details">
                        <h3 className="community-title">community Title</h3>
                        <p className="community-description">Short description of the community.</p>
                        <ul className="community-metadata">
                            <li><i className="fas fa-calendar-alt"></i> July 1 - 7, 2022</li>
                            <li><i className="fas fa-globe"></i> Offline</li>
                            <li><i className="fas fa-dollar-sign"></i>paying $500</li>
                        </ul>
                        <a href="#" className="community-button">Apply Now</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
