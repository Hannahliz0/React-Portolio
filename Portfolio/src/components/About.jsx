import profilePic from '../styles/images/me.jpg';
//import profilePic from '../styles/images/bizcard.PNG';

const styles = {
  aboutStyle: {
    padding: '20px',
    margin: '20px',
    color: 'white',
    fontSize: '1.3em',
  },
  profilePic: {
    width: '150px',              
    height: '150px',             
    borderRadius: '50%',         
    objectFit: 'cover',          
    border: '2px solid white',   
    marginBottom: '50px',        
    marginTop: '50px',           
  }
};

export default function About() {
  return (
    <div style={styles.aboutStyle}>
      <h1>About Me</h1>
      <img src={profilePic} alt="Profile" style={styles.profilePic} />
      <p>
      Hi, I am Hannah Schmidt, and I am passionate about learning and building in the world of software development. My journey began with curiosity about how the applications I use every day work behind the scenes, and that curiosity quickly grew into a deep interest in coding.
      I have been honing my skills in web development, focusing on technologies like HTML, CSS, JavaScript, and React. As I continue learning, I enjoy solving problems, creating intuitive user experiences, and constantly challenging myself to grow.
      Every line of code I write is part of a bigger mission—to become a versatile and capable developer. I'm excited about the possibilities that software development offers and look forward to creating impactful applications that help users and businesses thrive.
      </p>
      <p>
      Recently, I have been taking a comprehensive bootcamp class where I have gained hands-on experience with a range of technologies, including React, TypeScript, Node.js, JavaScript, HTML, and CSS. This immersive program has not only strengthened my technical skills but also taught me the importance of writing clean, maintainable code and working on real-world projects. 
      Through collaborative projects and problem-solving exercises, I've developed a deeper understanding of full-stack web development, and I am excited to keep expanding my knowledge and applying these skills to future projects.
      </p>
    </div>
  );
}
