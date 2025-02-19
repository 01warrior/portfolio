import React from 'react';
import Appbar from './Appbar';
import MacScreenMockup from './MacScreenMockup';
import AnimatedText from './AnimatedText';
import { useState, useEffect } from 'react';

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
          width: isHovering ? '80px' : '40px',
          height: isHovering ? '80px' : '40px',
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
        <section id="presentation" className="pt-32 pb-20 lg:py-20 bg-gray-900 relative overflow-hidden min-h-screen">
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
                  <p><span className="text-code-keyword">const</span> <span className="text-code-variable">skills</span> <span className="text-code-operator">=</span> <span className="text-code-string">["React", "Flutter", "Node.js", "Docker"]</span><span className="text-code-punctuation">;</span></p>
                  <p><span className="text-code-comment">// Bienvenue sur mon portfolio 😉!</span></p>
          </div>
        </div>
      </MacScreenMockup>
    </div>
  </div>
</section>

        <section id="projets" className="py-16 lg:py-20 bg-gray-800 relative group">
  <CursorEffect />
  
  <div className="container mx-auto px-4">
    <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Mes Projets</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        <div className="h-48 bg-gray-600 rounded-lg mb-4 animate-pulse" />
        <h3 className="text-xl font-semibold mb-2">Projet React</h3>
        <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        <div className="h-48 bg-gray-600 rounded-lg mb-4 animate-pulse" />
        <h3 className="text-xl font-semibold mb-2">Projet React</h3>
        <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        <div className="h-48 bg-gray-600 rounded-lg mb-4 animate-pulse" />
        <h3 className="text-xl font-semibold mb-2">Projet React</h3>
        <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        <div className="h-48 bg-gray-600 rounded-lg mb-4 animate-pulse" />
        <h3 className="text-xl font-semibold mb-2">Projet React</h3>
        <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        <div className="h-48 bg-gray-600 rounded-lg mb-4 animate-pulse" />
        <h3 className="text-xl font-semibold mb-2">Projet React</h3>
        <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        <div className="h-48 bg-gray-600 rounded-lg mb-4 animate-pulse" />
        <h3 className="text-xl font-semibold mb-2">Projet React</h3>
        <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        <div className="h-48 bg-gray-600 rounded-lg mb-4 animate-pulse" />
        <h3 className="text-xl font-semibold mb-2">Projet React</h3>
        <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        <div className="h-48 bg-gray-600 rounded-lg mb-4 animate-pulse" />
        <h3 className="text-xl font-semibold mb-2">Projet React</h3>
        <p className="text-gray-400">Application web moderne avec React et TypeScript</p>
      </div>
      
      
      {/* Ajoutez d'autres cartes ici */}
    </div>
  </div>
</section>
      </main>
    </div>
  );
}

export default App;