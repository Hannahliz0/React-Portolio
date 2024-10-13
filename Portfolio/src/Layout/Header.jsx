import React from 'react';
import NavTabs from '../components/NavTabs'; 
import headerImage from '../styles/images/AdobeStock_708356825.jpeg';  

const headerStyles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    color: 'darkblue',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundImage: `url(${headerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '150px',  
  },
  title: {
    margin: 0,
  }
};

function Header() {
  return (
    <header style={headerStyles.header}>
      <h1 style={headerStyles.title}>Hannah Schmidt</h1>
      <NavTabs /> 
    </header>
  );
}

export default Header;
