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
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  };

  return (
    <nav className={`w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 font-Poppins fixed top-0 transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-none'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-white"
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
                  className="relative px-4 py-2 overflow-hidden group rounded-full transition-all duration-300"
                  activeClass="bg-white/10 text-white font-medium"
                >
                  <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors">
                    {link.label}
                  </span>

                  <div className="absolute inset-0 bg-white/5 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                rounded-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bouton Mobile */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-gray-300 hover:text-white"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial="closed"
              animate={isMenuOpen ? "open" : "closed"}
              variants={menuVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 border-l border-gray-800 shadow-2xl z-50 p-6"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.id}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.id}
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all"
                      activeClass="!text-white bg-gray-800 font-medium"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Appbar;