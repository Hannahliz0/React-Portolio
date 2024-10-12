import { FaGithub } from 'react-icons/fa';
import bizCard from '../styles/images/bizcard.PNG';
import Forms from '../styles/images/first.blog.PNG';
import Blog from '../styles/images/blog.PNG';
import Marketing from '../styles/images/marketing.page.PNG';

const styles = {
  portfolioContainer: {
    display: 'flex',
    justifyContent: 'flex-start',  
    padding: '20px',
    margin: '0 auto',
    width: '80%',  
    color: 'white',
  },
  portfolioGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',  
    gap: '60px', 
    marginTop: '20px',  
  },
  projectCard: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '600px',  
    height: '300px',  
    transition: 'transform 0.3s ease',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',  
    transition: 'transform 0.3s ease',
  },
  projectOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    color: 'white',
  },
  projectTitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  githubIcon: {
    fontSize: '30px',
    color: 'white',
    transition: 'transform 0.3s ease, color 0.3s ease',
  },
};

function Portfolio() {
  return (
    <div>
      <h1 style={{ textAlign: 'left', marginBottom: '30px', marginLeft: '20px', color:'white', paddingTop: '50px' }}>Portfolio</h1>
      
      <div style={styles.portfolioContainer}>
        <div style={styles.portfolioGrid}>
          {/* Portfolio Item 1 */}
          <div
            className="project-card"
            style={styles.projectCard}
            onMouseEnter={(e) =>
              e.currentTarget.querySelector('.overlay').style.opacity = 1
            }
            onMouseLeave={(e) =>
              e.currentTarget.querySelector('.overlay').style.opacity = 0
            }
          >
            <img src={bizCard} style={styles.projectImage} alt="Business Card Generator" />
            <div className="overlay" style={styles.projectOverlay}>
              <div style={styles.projectTitle}>Business Card Generator</div>
              <a
                href="https://github.com/Hannahliz0/bis-card-gen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub style={styles.githubIcon} />
              </a>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div
            className="project-card"
            style={styles.projectCard}
            onMouseEnter={(e) =>
              e.currentTarget.querySelector('.overlay').style.opacity = 1
            }
            onMouseLeave={(e) =>
              e.currentTarget.querySelector('.overlay').style.opacity = 0
            }
          >
            <img src={Forms} alt="Forms Project" style={styles.projectImage} />
            <div className="overlay" style={styles.projectOverlay}>
              <div style={styles.projectTitle}>Forms</div>
              <a
                href="https://github.com/Hannahliz0/my-first-blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub style={styles.githubIcon} />
              </a>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div
            className="project-card"
            style={styles.projectCard}
            onMouseEnter={(e) =>
              e.currentTarget.querySelector('.overlay').style.opacity = 1
            }
            onMouseLeave={(e) =>
              e.currentTarget.querySelector('.overlay').style.opacity = 0
            }
          >
            <img src={Blog} alt="Blog Project" style={styles.projectImage} />
            <div className="overlay" style={styles.projectOverlay}>
              <div style={styles.projectTitle}>Blog Post</div>
              <a
                href="https://github.com/Hannahliz0/my-first-blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub style={styles.githubIcon} />
              </a>
            </div>
          </div>

          {/* Portfolio Item 4 */}
          <div
            className="project-card"
            style={styles.projectCard}
            onMouseEnter={(e) =>
              e.currentTarget.querySelector('.overlay').style.opacity = 1
            }
            onMouseLeave={(e) =>
              e.currentTarget.querySelector('.overlay').style.opacity = 0
            }
          >
            <img src={Marketing} alt="Marketing Page" style={styles.projectImage} />
            <div className="overlay" style={styles.projectOverlay}>
              <div style={styles.projectTitle}>Marketing Page</div>
              <a
                href="https://github.com/Hannahliz0/marketing-updated-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub style={styles.githubIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
