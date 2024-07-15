// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import './App.css'

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
        <ChakraProvider>
      <header className= 'gradient1 d-flex justify-content-between border-bottom'>
        <h1 className='text-white titleHeader'>AH</h1>
        <Nav />
      {/* <div className={isDarkMode ? 'App dark-mode' : 'App'}>
      <header className="App-header">
        <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <button onClick={toggleTheme}>
          Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
    </div> */}
      </header>
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
