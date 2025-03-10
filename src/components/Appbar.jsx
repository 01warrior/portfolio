import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Appbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'presentation', label: 'Accueil' },
    { id: 'about', label: 'A propos' },
    { id: 'competences', label: 'Compétences' },
    { id: 'projets', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ];

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 }
  };

  return (
    <nav className={`w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 font-Poppins fixed top-0 transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-none'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent"
          >
            S.SAVADOGO
          </motion.span>

          {/* Menu Desktop */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="relative px-4 py-2 overflow-hidden group"
                  activeClass="active-link"
                >
                  <span className="relative z-10 text-gray-300 group-hover:text-yellow-400 transition-colors">
                    {link.label}
                  </span>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                rounded-full scale-75 group-hover:scale-100" />
                  
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-purple-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: link.isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bouton Mobile */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-gray-300 hover:text-yellow-400"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && ( // Ajout d'un rendu conditionnel
          <motion.div
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            variants={menuVariants}
            className="lg:hidden absolute top-16 left-0 right-0 bg-gray-900/100 backdrop-blur-sm"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg overflow-hidden"
                >
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-4 text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50 transition-all rounded-lg border border-gray-700/50 hover:border-yellow-400/50 shadow-lg"
                    activeClass="!text-yellow-400 !border-yellow-400/50 !bg-gray-800/50"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>)}
      </div>
    </nav>
  );
}

export default Appbar;