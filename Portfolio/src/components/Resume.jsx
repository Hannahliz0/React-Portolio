import React from 'react';

const styles = {
  resumeContainer: {
    margin: '40px auto',
    maxWidth: '800px',
    padding: '20px',
    borderRadius: '8px',
    color: 'white',
  },
  title: {
    fontSize: '36px',
    textAlign: 'left',
    marginBottom: '20px',
    color: 'white',
  },
  sectionTitle: {
    fontSize: '24px',
    margin: '20px 0 10px',
    color: 'white',
  },
  listItem: {
    marginBottom: '10px',
    color: 'white',
    fontSize: '18px',
  },
};

function Resume() {
  return (
    <div style={styles.resumeContainer}>
      <h1 style={styles.title}>Resume</h1>

      {/* Education Section */}
      <section>
        <h2 style={styles.sectionTitle}>Education</h2>
        <ul>
          <li style={styles.listItem}>
            <strong>Full Stack Web Development Bootcamp</strong> - Edx
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <ul>
          <li style={styles.listItem}><strong>Front-end Technologies:</strong></li>
          <ul>
            <li style={styles.listItem}>React</li>
            <li style={styles.listItem}>JavaScript, TypeScript</li>
            <li style={styles.listItem}>HTML5, Bootstrap, CSS</li>
            <li style={styles.listItem}>Responsive Design and Flexbox</li>
          </ul>
          
          <li style={styles.listItem}><strong>Back-end Technologies:</strong></li>
          <ul>
            <li style={styles.listItem}>Node.js, Express.js</li>
            <li style={styles.listItem}>REST APIs and Web Services</li>
            <li style={styles.listItem}>JSON</li>
          </ul>

          <li style={styles.listItem}><strong>Version Control:</strong></li>
          <ul>
            <li style={styles.listItem}>Git, GitHub</li>
            <li style={styles.listItem}>Git Workflow (branching, pull requests)</li>
          </ul>

          <li style={styles.listItem}><strong>Other Tools & Technologies:</strong></li>
          <ul>
            <li style={styles.listItem}>npm, Webpack</li>
            <li style={styles.listItem}>Deployment</li>
          </ul>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
