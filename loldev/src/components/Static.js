import React from 'react';

function Static(props) {
  const { setActiveComponent } = props;

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <nav className="navbar">
      <img src="https://picsum.photos/100/100" className="pfp"/>
      <h3>Vonty</h3>
      <div className="intre">
        <ul className="lli">
          <li>
            <button className="menu-btn" onClick={() => handleComponentChange('home')}>Home</button>
          </li>
          <li>
            <button className="menu-btn" onClick={() => handleComponentChange('new')}>New</button>
          </li>
          <li>
            <button className="menu-btn" onClick={() => handleComponentChange('dev')}>Dev</button>
          </li>
        </ul>
        <img src="https://picsum.photos/100/100" alt="." className="pfp" /></div>
    </nav>

  );
}

export default Static;
