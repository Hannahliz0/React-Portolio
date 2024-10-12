// import About from './components/Navbar';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import {Outlet} from 'react-router-dom';
import Nav from './src/components/NavTabs';
import Header from './src/Layout/Header';
import Footer from './src/Layout/Footer';
//import './src/Styles/App.css';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      
      <Header style/> 
      <main style={{ backgroundColor: '#1c2e4a', minHeight: '100vh', padding: '20px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;