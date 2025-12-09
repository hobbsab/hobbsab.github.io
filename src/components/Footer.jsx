import React from "react";
import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={isDarkMode ? 'gradient1-dark footerbg d-flex align-items-center justify-content-center' : 'gradient1 footerbg d-flex align-items-center justify-content-center'}>
      <p className="text-white mb-0">© Anna Hobbs, 2025</p>
    </footer>
  );
}

export default Footer;