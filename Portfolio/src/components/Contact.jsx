import React, { useState } from 'react';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!name) {
      setError('Please include your name.');
      return;
    }

    if (!email) {
      setError('Please include your email.');
      return;
    }

    if (!message) {
      setError('Please include a message.');
      return;
    }

   
    setError('');
    console.log('Form submitted:', { name, email, message });

   
    setName('');
    setEmail('');
    setMessage('');
  };

  return (

    <div style={styles.container}>
      <h1 style={{ textAlign: 'left', marginBottom: '30px', marginLeft: '20px', color:'white', paddingTop: '50px' }}>Contact Me</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            placeholder="Your Name"
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Your Email"
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
            placeholder="Your Message"
          />
        </div>
        {error && <div style={styles.error}>{error}</div>}
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};


const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    color: 'white',
    borderRadius: '5px',
  
    position: 'absolute', 
    top: '50%', 
    left: '20%', 
    transform: 'translate(-50%, -50%)', 
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '200%',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '200%',
    height: '200px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'darkgrey',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

styles.buttonHover = {
  backgroundColor: 'blue',
};

export default Contact;
