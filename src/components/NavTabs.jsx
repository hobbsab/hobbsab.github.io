import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function NavTabs() {
  const currentPage = useLocation().pathname;
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <ul className="nav nav-tabs border-bottom-0 w-100">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Work"
          className={currentPage === '/Work' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>

      <li className="nav-item ms-auto">
        <button
          onClick={toggleDarkMode}
          className="dark-mode-toggle nav-link"
          aria-label="Toggle dark mode"
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </li>
    </ul>
  );
}

export default NavTabs;