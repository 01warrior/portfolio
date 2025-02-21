import React from 'react';
import Appbar from './Appbar';
import MacScreenMockup from './MacScreenMockup';
import AnimatedText from './AnimatedText';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Vérifie si le curseur est dans la section projets
      const projectsSection = document.getElementById('projets');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        setIsHovering(
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div 
        className={`fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '80px' : '70px',
          height: isHovering ? '80px' : '70px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(20px)'
        }}
      />
      
      {/* Curseur personnalisé */}
      <div 
        className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '6px',
          height: '6px',
          background: '#fff',
          borderRadius: '50%',
          mixBlendMode: 'difference'
        }}
      />
    </>
  );
}

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Appbar />

  <main>
  <section id="presentation" className="pt-32 pb-20 lg:py-20 bg-slate-950 relative overflow-hidden min-h-screen">
  {/* Effet de lumière floutée */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -left-20 -top-40 w-[800px] h-[800px] bg-purple-500/20 blur-[100px] rounded-full animate-pulse-slow" />
    <div className="absolute -right-20 -bottom-40 w-[800px] h-[800px] bg-blue-500/20 blur-[100px] rounded-full animate-pulse-slow-delayed" />
  </div>


  <div className="absolute inset-0 bg-grid-animated pointer-events-none" aria-hidden="true"></div>
  
  <div className="container mx-auto px-4 relative">
    <AnimatedText />

    {/* Effet de halo autour du MacScreenMockup */}
    <div className="relative mt-12 lg:mt-20">
      <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl blur-3xl -z-10 animate-glow" />
      <MacScreenMockup>
        <div className="text-sm md:text-lg font-mono p-4 md:p-6">
          <div className="text-sm md:text-lg font-mono p-4 md:p-6">
                  <p><span className="text-code-keyword">const</span> <span className="text-code-variable">name</span> <span className="text-code-operator">=</span> <span className="text-code-string">"Soumaila SAVADOGO"</span><span className="text-code-punctuation">;</span></p>
                  <p><span className="text-code-keyword">const</span> <span className="text-code-variable">role</span> <span className="text-code-operator">=</span> <span className="text-code-string">"Développeur Full Stack"</span><span className="text-code-punctuation">;</span></p>
                  <p><span className="text-code-keyword">const</span> <span className="text-code-variable">skills</span> <span className="text-code-operator">=</span> <span className="text-code-string">["React", "Flutter", "Dart", "Docker", "Node.js","SpringBoot","Java","TailWind",]</span><span className="text-code-punctuation">;</span></p>
                  <p><span className="text-code-comment">// Bienvenue sur mon portfolio 😉!</span></p>
          </div>
        </div>
      </MacScreenMockup>
    </div>
  </div>
</section>


<section id="competences" className="py-16 lg:py-20  bg-slate-950 relative overflow-hidden">
  <div className="absolute inset-0 bg-fractal-pattern opacity-10 animate-pan"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-4xl lg:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
      Mes Super-Pouvoirs
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {[
        { name: 'Docker', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/docker.png?raw=true', color: 'from-blue-500 to-cyan-400' },
        { name: 'Flutter',icon: 'https://github.com/01warrior/portfolio/blob/main/assets/flutter.png?raw=true', color: 'from-green-500 to-emerald-400' },
        { name: 'SpringBoot',icon: 'https://github.com/01warrior/portfolio/blob/main/assets/spring.png?raw=true', color: 'from-yellow-400 to-orange-400' },
        { name: 'React.js', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/react.png?raw=true', color: 'from-sky-400 to-blue-600' },
        { name: 'TailWind', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/tailwindcss.png?raw=true', color: 'from-blue-400 to-purple-500' },
        { name: 'Python', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/python.png?raw=true', color: 'from-purple-500 to-pink-400' },
        { name: 'Wordpress',icon: 'https://github.com/01warrior/portfolio/blob/main/assets/wop.png?raw=true', color: 'from-blue-400 to-sky-600' },
        { name: 'Supabase', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/supabase.png?raw=true', color: 'from-green-500 to-emerald-400' },
        { name: 'Canva', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/canva.png?raw=true', color: 'from-green-500 to-emerald-400' },
        { name: 'Figma', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/figma.png?raw=true', color: 'from-green-500 to-emerald-400' },
        { name: 'MySQL', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/mysql.png?raw=true', color: 'from-green-500 to-emerald-400' },
        { name: 'Node.Js', icon: 'https://raw.githubusercontent.com/01warrior/portfolio/18aff3fa26c9d423d48d58c8de82a4fe00d8829f/assets/nodejs.svg', color: 'from-green-500 to-emerald-400' },
        

        
      ].map((skill, index) => (
        <motion.div 
          key={index}
          whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
          className="aspect-square flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br backdrop-blur-xl border border-white/10"
        >
          <div className={`text-6xl mb-4 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
            <img src={skill.icon} alt=""/>
          </div>
          <h3 className="text-xl font-bold text-gray-200">{skill.name}</h3>
          <div className="mt-2 w-full bg-gray-800 rounded-full h-2">
            <div 
              className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000`}
              style={{ width: `${Math.random() * 40 + 60}%` }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


<section id="projets" className="py-16 lg:py-20 bg-slate-950 relative group">
  <CursorEffect />
  
  <div className="container mx-auto px-4">
    <h2 className="text-4xl lg:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">Mes Projets</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-48 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="https://github.com/01warrior/portfolio/blob/main/assets/image.png?raw=true" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg">Voir le projet →</span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Projet React</h3>
          <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-48 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="../../assets/image.png" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg">Voir le projet →</span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Projet React</h3>
          <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-48 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="../../assets/image.png" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg">Voir le projet →</span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Projet React</h3>
          <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-48 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="../../assets/image.png" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg">Voir le projet →</span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Projet React</h3>
          <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-48 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="../../assets/image.png" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg">Voir le projet →</span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Projet React</h3>
          <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-48 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="../../assets/image.png" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg">Voir le projet →</span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Projet React</h3>
          <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>

      
    </div>
  </div>
</section>


<section id="contact" className="py-16 lg:py-20 bg-slate-950 relative">
  
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-4xl lg:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
      On parle de votre projet
    </h2>

    <div className="max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transform perspective-1000">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Hologramme interactif */}
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/20 to-yellow-400/20 blur-2xl rounded-xl"></div>
          <div className="relative space-y-6">
            <div className="flex items-center gap-4 p-4 hover:bg-gray-800/50 rounded-xl transition-all">
              <div className="text-3xl bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                📧
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <a href="mailto:contact@example.com" className="text-lg text-gray-200 hover:text-yellow-400 transition-colors">
                  contact@soumaila.dev
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 hover:bg-gray-800/50 rounded-xl transition-all">
              <div className="text-3xl bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                📱
              </div>
              <div>
                <p className="text-gray-400">Téléphone</p>
                <a href="tel:+123456789" className="text-lg text-gray-200 hover:text-yellow-400 transition-colors">
                  +33 6 12 34 56 78
                </a>
              </div>
            </div>
          </div>
        </div>
        

        {/* Réseaux sociaux avec animations */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          {[
            { name: 'GitHub', icon: '💻', color: 'from-blue-900 to-pink-500' },
            { name: 'LinkedIn', icon: '🔗', color: 'from-blue-950 to-cyan-400' },
            { name: 'Twitter', icon: '🐦', color: 'from-sky-900 to-blue-600' }
          ].map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ x: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl bg-gradient-to-r ${social.color} flex items-center gap-4 shadow-lg hover:shadow-xl transition-all`}
              href="#"
            >
              <span className="text-2xl">{social.icon}</span>
              <span className="text-lg font-bold text-white">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
      

      {/* Élément décoratif flottant */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-yellow-400/20 rounded-full blur-3xl animate-float"></div>
    
    </div>
  </div>
</section>

      </main>
    </div>
  );
}

export default App;