import React, { useState } from 'react';

const Navbar = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <img src="https://i.pinimg.com/originals/a9/4e/ed/a94eedba4571e9a93eff1f51db48c39f.png" alt="Logo" style={{ width: '80px' }} />
        <span style={brandNameStyle}>My Learning Platform</span>
      </div>

      <div style={searchBarStyle}>
        <input
          type="text"
          placeholder="Tìm kiếm khóa học"
          style={inputStyle}
        />
      </div>

      <div style={navLinksStyle}>
        <button
          style={{
            ...buttonStyle,
            ...(hoveredButton === 'register' ? buttonHoverStyle : {}),
          }}
          onMouseEnter={() => setHoveredButton('register')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Đăng ký
        </button>
        <button
          style={{
            ...buttonStyle,
            ...(hoveredButton === 'login' ? buttonHoverStyle : {}),
          }}
          onMouseEnter={() => setHoveredButton('login')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Đăng nhập
        </button>
        <button style={iconStyle}>
          <span role="img" aria-label="notification">
          <img src="https://static-00.iconduck.com/assets.00/notifications-icon-1791x2048-rk2vz974.png" alt="Logo" style={{ width: '20px' }} />
          </span>
        </button>
      </div>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#a786df',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderBottom: '1px solid #fec7d7',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex:1000,
};

const logoStyle = { display: 'flex', alignItems: 'center' };

const brandNameStyle = {
  marginLeft: '10px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const searchBarStyle = {
  flex: '1',
  marginLeft: '20px',
  marginRight: '20px',
  maxWidth: '400px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '20px',
  border: '1px solid #ddd',
  backgroundColor: '#fff',
};

const navLinksStyle = {
  display: 'flex',
  alignItems: 'center',
};

const buttonStyle = {
  marginLeft: '10px',
  padding: '8px 12px',
  border: 'none',
  backgroundColor: '#6246ea',
  color: '#fff',
  borderRadius: '20px',
  cursor: 'pointer',
  fontFamily: 'Tahoma, sans-serif',
  fontSize: '13px',
  boxShadow: '0 4px 8px rgba(0, 50, 50, 0.3)',
  transition: 'background-color 0.3s, box-shadow 0.3s',
};

const buttonHoverStyle = {
  ...buttonStyle,
  backgroundColor: '#0056d3', 
  boxShadow: '0 6px 12px rgba(0, 123, 255, 0.5)', 
};

const iconStyle = {
  fontSize: '1.5rem',
  marginLeft: '10px',
  cursor: 'pointer',
  backgroundColor: 'transparent', 
  border: 'none', 
  color: '#fffffe',
  marginTop: '5px',
  marginLeft: '10px'
};

export default Navbar;
