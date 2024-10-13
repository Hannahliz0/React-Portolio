
import {Outlet} from 'react-router-dom';
import Header from './src/Layout/Header';
import Footer from './src/Layout/Footer';



function App() {
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