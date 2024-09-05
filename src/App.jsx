// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <header className= 'gradient1 d-flex justify-content-between border-bottom'>
        <h1 className='text-white titleHeader'>AH</h1>
        <Nav />
      </header>
      
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
