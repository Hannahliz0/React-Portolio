import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const styles = {
  navTabs: {
    display: 'flex',
    justifyContent: 'flex-end',  // Aligns the nav to the right
    alignItems: 'center',
    marginRight: '20px',  // Adds space on the right side
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '30px',  // Creates even spacing between the links
  },
  li: {
    display: 'inline-block',
  },
  link: {
    color: 'darkblue',
    textDecoration: 'none',
    fontSize: '23px',
    fontWeight: '500',
    borderBottom: '2px solid transparent',  // Invisible underline by default
    padding: '5px',
    transition: 'all 0.3s ease',  // Smooth transition for hover effect
  },
  linkHover: {
    borderBottom: '2px solid white',  // Underline on hover
  }
};

function NavTabs() {
  return (
    <nav style={styles.navTabs}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>About</Link> 
        </li>
        <li style={styles.li}>
          <Link to="/portfolio" style={styles.link}>Portfolio</Link> 
        </li>
        <li style={styles.li}>
          <Link to="/contact" style={styles.link}>Contact</Link> 
        </li>
        <li style={styles.li}>
          <Link to="/resume" style={styles.link}>Resume</Link> 
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
