import { Outlet } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import './App.css'

function App() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <header className={isDarkMode ? 'gradient1-dark d-flex justify-content-between border-bottom' : 'gradient1 d-flex justify-content-between border-bottom'}>
        <Nav />
      </header>
      
      <main className={`mx-3 ${isDarkMode ? 'dark-mode' : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;