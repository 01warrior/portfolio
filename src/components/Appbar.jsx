import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Appbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'presentation', label: 'Accueil' },
    { id: 'projets', label: 'Projets' },
    { id: 'competences', label: 'Compétences' },
    { id: 'contact', label: 'Contact' }
  ];

  // Animation variants pour le menu
  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 }
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 font-Poppins">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo avec animation au hover */}
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent"
          >
            S.SAVADOGO
          </motion.span>

          {/* Menu Desktop avec effets améliorés */}
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
                  <span className="relative z-10 text-gray-300 group-hover:text-purple-400 transition-colors">
                    {link.label}
                  </span>
                  
                  {/* Fond dégradé animé */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                rounded-full scale-75 group-hover:scale-100" />
                  
                  {/* Animation de soulignement dynamique */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: link.isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Hamburger Menu Mobile avec animation */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-gray-300 hover:text-purple-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Menu Mobile avec animations */}
        <motion.div
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          className="lg:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-sm overflow-hidden"
        >
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800/50 transition-all"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}

export default Appbar;