import '../styles/Footer.css';
import { CiLinkedin } from "react-icons/ci";  // LinkedIn icon
import { FaGithubSquare, FaStackOverflow } from "react-icons/fa";  // GitHub and StackOverflow icons

const styles = {
  footerStyle: {
    display: 'flex',                
    justifyContent: 'center',       
    alignItems: 'center',           
    height: '100px',                
    backgroundColor: '#1c2e4a',        
    padding: '20px',
    margin: '0',                    
    color: 'white',

  },
  iconStyle: {
    margin: '0 15px',               
    color: 'white',                 
    fontSize: '50px',               
    transition: 'transform 0.3s',   
  },
  iconHover: {                      
    transform: 'scale(1.2)',        
  },
  iconLink: {
    textDecoration: 'none',         
    color: 'inherit',               
  },
};

function Footer() {
  return (
    <div style={styles.footerStyle}>
      {/* LinkedIn Icon with Link */}
      <a href="https://www.linkedin.com/in/hannahbright" target="_blank" rel="noopener noreferrer" style={styles.iconLink} onMouseEnter={(e) => e.target.style.transform = styles.iconHover.transform}onMouseLeave={(e) => e.target.style.transform = 'none'}>
        <CiLinkedin style={styles.iconStyle} />
      </a>
      {/* GitHub Icon with Link */}
      <a href="https://github.com/Hannahliz0" target="_blank" rel="noopener noreferrer" style={styles.iconLink} onMouseEnter={(e) => e.target.style.transform = styles.iconHover.transform}onMouseLeave={(e) => e.target.style.transform = 'none'}>
        <FaGithubSquare style={styles.iconStyle} />
      </a>
      {/* StackOverflow Icon with Link */}
      <a href="https://stackoverflow.com/users/27705162/" target="_blank" rel="noopener noreferrer" style={styles.iconLink} onMouseEnter={(e) => e.target.style.transform = styles.iconHover.transform}onMouseLeave={(e) => e.target.style.transform = 'none'}>
        <FaStackOverflow style={styles.iconStyle} />
      </a>
    </div>
  );
}

export default Footer;
