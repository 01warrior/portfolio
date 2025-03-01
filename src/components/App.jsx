import React from 'react';
import Appbar from './Appbar';
import MacScreenMockup from './MacScreenMockup';
import AnimatedText from './AnimatedText';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { FiMail, FiPhone } from "react-icons/fi"; // Feather Icons
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"; // Font Awesome
import { HiDownload } from "react-icons/hi"; // Heroicons

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
  <section id="presentation" className="pt-32 pb-20 lg:py-20 bg-black relative overflow-hidden min-h-screen">
  {/* Effet de lumière floutée */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -left-20 -top-40 w-[800px] h-[800px] bg-purple-500/20 blur-[100px] rounded-full animate-pulse-slow" />
    <div className="absolute -right-20 -bottom-40 w-[800px] h-[800px] bg-blue-500/20 blur-[100px] rounded-full animate-pulse-slow-delayed" />
  </div>


  <div className="absolute inset-0 bg-grid-animated pointer-events-none" aria-hidden="true"></div>
  
  <div className="container mx-auto px-4 relative">
    <AnimatedText />

    {/* Effet de halo autour du MacScreenMockup */}
    <div className="relative mt-12 lg:mt-10">
      <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl blur-3xl -z-10 animate-glow" />
      <MacScreenMockup>
        <div className="text-sm md:text-lg font-mono p-4 md:p-6">
       
                 <p><span className="text-code-keyword">const</span> <span className="text-code-variable">moi</span> <span className="text-code-operator">=</span> <span className="text-code-string">"Soumaila SAVADOGO"</span><span className="text-code-punctuation">;</span></p>
                <p><span className="text-code-keyword">const</span> <span className="text-code-variable">vibeCheck</span> <span className="text-code-operator">=</span> <span className="text-code-string">"95% de chance que vous kiffiez le résultat"</span><span className="text-code-punctuation">;</span></p>
                <p><span className="text-code-keyword">let</span> <span className="text-code-variable">Qualité majeur</span> <span className="text-code-operator">=</span> <span className="text-code-number">Adaptabilité</span><span className="text-code-punctuation">;</span></p>
                <p><span className="text-code-comment">// PS: Mon code est plus propre que mon bureau 😅</span></p>
    
        </div>
      </MacScreenMockup>

      {/* bouton telecharger cv */}
    <div className="mt-12 flex justify-center">
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href=""
      download
      className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-400 to-yellow-400 hover:from-yellow-400 hover:to-blue-400 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Effet de lumière au survol */}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
      <div className="flex items-center gap-3 relative">
        <HiDownload className="h-6 w-6 text-slate-900" />
        <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-800">
          Mon CV
        </span>
        <span className="text-slate-900 text-sm">(PDF, 849Ko)</span>
      </div>
    </motion.a>
  </div>
  
    </div>
  </div>
</section>

<section id="competences" className="py-16 lg:py-20  bg-slate-950 relative overflow-hidden">
  <div className="absolute inset-0 bg-fractal-pattern opacity-10 animate-pan"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-4xl lg:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
      A propos de moi 
    </h2>

    <MacScreenMockup>
  <div className="text-sm md:text-lg font-mono p-4 md:p-6 space-y-4">

    <p className="text-code-text">
      Après un parcours scolaire sans vagues jusqu'au BAC en 2021, j'ai choisi de donner 
      un sens à ma curiosité insatiable : l'informatique s'est révélée bien plus 
      qu'une discipline - un langage universel pour modeler demain. Je voulais inventer, bousculer, accélérer. 
      Trois ans plus tard, je décrochais ma licence en session anticipée. 
    </p>

    <p className="text-code-text">
      Aujourd'hui, je porte encore en moi cette fascination d'enfant pour 
      les mystères technologiques, transformée en une expertise aiguisée.
      Mon histoire ? Celle d'un éternel curieux 
      qui a compris que l'avenir ne s'attend pas, il se code à la volée.
    </p>

    <p className="text-code-comment mt-6">
      « Le digital n'est pas un outil, c'est une seconde peau. 
      Et moi, je vis déjà dans demain. »
    </p>
  </div>
</MacScreenMockup>
  </div>

  {/* Effet de peinture derrière */}
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[120%] h-[140%] opacity-30">
    <svg viewBox="0 0 500 200" className="w-full h-full">
      <path 
        d="M12.3 184C38 178 120.7 137.7 185 118c78.7-24.1 155.7-17.3 215-9 86.8 12.1 172 37.7 172 37.7" 
        stroke="url(#paint-gradient)" 
        stroke-width="30" 
        stroke-linecap="round"
        fill="none"
        pathLength="1"
        className="animate-brushStroke"
      />
      <defs>
        <linearGradient id="paint-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#60a5fa" />
          <stop offset="100%" stop-color="#fbbf24" />
        </linearGradient>
      </defs>
    </svg>
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
                { name: 'Docker', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/docker.png?raw=true',color: 'from-blue-600 to-cyan-400', mastery: 85 },
                { name: 'Flutter', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/flutter.png?raw=true',color: 'from-blue-500 to-teal-400', mastery: 98 },
                { name: 'SpringBoot', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/spring.png?raw=true', color: 'from-green-600 to-lime-400', mastery: 70 },
                { name: 'React.js', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/react.png?raw=true',  color: 'from-cyan-400 to-blue-600', mastery: 90 },
                { name: 'TailWind', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/tailwindcss.png?raw=true',  color: 'from-cyan-500 to-sky-600', mastery: 95 },
                { name: 'Python', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/python.png?raw=true',color: 'from-blue-600 to-yellow-400', mastery: 60 },
                { name: 'Wordpress', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/wop.png?raw=true', color: 'from-blue-700 to-sky-400', mastery: 97 },
                { name: 'Supabase', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/supabase.png?raw=true',color: 'from-emerald-700 to-green-500', mastery: 85 },
                { name: 'Canva', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/canva.png?raw=true', color: 'from-teal-400 to-pink-400', mastery: 90 },
                { name: 'Figma', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/figma.png?raw=true',  color: 'from-purple-600 to-pink-500', mastery: 75 },
                { name: 'MySQL', icon: 'https://github.com/01warrior/portfolio/blob/main/assets/mysql.png?raw=true', color: 'from-blue-500 to-orange-400', mastery: 80 },
                { name: 'Node.Js', icon: 'https://raw.githubusercontent.com/01warrior/portfolio/18aff3fa26c9d423d48d58c8de82a4fe00d8829f/assets/nodejs.svg',color: 'from-green-700 to-lime-500', mastery:80 },
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
          <div className="mt-2 w-full bg-gray-800 rounded-full h-3">
            <div 
              className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000`}
              style={{ width: `${skill.mastery}%` }}
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
            src="https://github.com/01warrior/portfolio/blob/main/assets/tondlaafi.png?raw=true" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg">Voir le projet →</span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Application TondLaafi</h3>
          <p className="text-gray-400">Application mobile de e-santé au burkina Faso pour L'ABBEF</p>
      </div>

  

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-48 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="https://soumaila-savadogo.omnia-elearning.com/wp-content/uploads/2024/03/Capture-decran-2024-03-21-115129.png" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg"><a href="https://refletinfo.net/">Voir le projet →</a></span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Site de media</h3>
          <p className="text-gray-400">Site de de media Reflet info</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-48 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="https://soumaila-savadogo.omnia-elearning.com/wp-content/uploads/2024/03/Capture-decran-2023-04-10-133548.png" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg"><a href="https://stargate-groups.com/">Voir le projet →</a></span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Stargate groups</h3>
          <p className="text-gray-400">STARGATE GROUPS est spécialisée dans le domaine minier au Burkina</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-50 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="https://soumaila-savadogo.omnia-elearning.com/wp-content/uploads/2024/03/20240306_114208_0000.png" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg">Voir le projet →</span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Clone WhatsApp</h3>
          <p className="text-gray-400">Un clone WhatsApp UI avec Flutter </p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-50 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="https://soumaila-savadogo.omnia-elearning.com/wp-content/uploads/2024/03/Minimal-Gradient-Modern-Animated-Marketing-Instagram-Reel-1080-x-900-px_20240401_222350_0000.png" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg"><a href="https://www.linkedin.com/posts/savadogo-souma%C3%AFla-6694b9243_flutter-ia-intelligenceartificielle-activity-7168223963515494400-QBZz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADxom3EBkG-pvdKGHK0xa24uEv1gqz7YBqs">Voir le projet →</a></span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Docteur</h3>
          <p className="text-gray-400">Application mobile avec Flutter une IA medecin avec Flutter,Dart Supabase</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-50 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="https://soumaila-savadogo.omnia-elearning.com/wp-content/uploads/2024/03/20240306_115751_0000.png" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg">Voir le projet →</span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">FruitsMark</h3>
          <p className="text-gray-400">Application de vente de fruits et légumes design UI</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-50 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="https://soumaila-savadogo.omnia-elearning.com/wp-content/uploads/2024/03/20240306_120050_0000.png" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg">Voir le projet →</span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">AV</h3>
          <p className="text-gray-400">Jeu interactif amusant Action ou verité avec flutter</p>
      </div>


      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-50 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="https://github.com/01warrior/portfolio/blob/main/assets/fun.png?raw=true" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg"><a href="https://www.linkedin.com/posts/savadogo-souma%C3%AFla-6694b9243_flutter-mobiledev-ai-activity-7286810396080939008-x-9Q?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADxom3EBkG-pvdKGHK0xa24uEv1gqz7YBqs">Voir le projet →</a></span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Fun</h3>
          <p className="text-gray-400">Application de chat permettant de discuter avc nimporte qui alimenté par ia</p>
      </div>

      <div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-50 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="https://github.com/01warrior/portfolio/blob/main/assets/luxe.png?raw=true" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg"><a href="https://www.linkedin.com/posts/savadogo-souma%C3%AFla-6694b9243_flutter-mobiledev-ai-activity-7286810396080939008-x-9Q?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADxom3EBkG-pvdKGHK0xa24uEv1gqz7YBqs">Voir le projet →</a></span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Application WatchLux</h3>
          <p className="text-gray-400">Application de vente de montre de luxe flutter dart</p>
      </div>

<div className="bg-gray-700/50 rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/70 relative glow-effect">
        {/* Conteneur d'image avec overflow hidden */}
          <div className="h-50 w-full mb-4 rounded-lg overflow-hidden relative">
          <img 
            src="https://github.com/01warrior/portfolio/blob/main/assets/network.png?raw=true" // Chemin relatif depuis le dossier public
            alt="Projet React" 
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-bold text-lg"><a href="#">Voir le projet →</a></span>
          </div>
          </div>

          <h3 className="text-xl font-semibold mb-2">Application Network</h3>
          <p className="text-gray-400">Application d'apprentissage de concept en réseau informatique</p>
      </div>

      
    </div>
  </div>
</section>


<section id="contact" className="py-16 lg:py-20 bg-slate-950 relative">
  
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-4xl lg:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
      Parlons de votre projet
    </h2>
    

    <div className="max-w-5xl mx-auto bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 transform perspective-1000">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Hologramme interactif */}
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/20 to-yellow-400/20 blur-2xl rounded-xl"></div>
          <div className="relative space-y-6">
            <div className="flex items-center gap-4 p-4 hover:bg-gray-800/50 rounded-xl transition-all">
              
              <FiMail className="h-10 w-10" /> {/* Icône Email */}
             
              <div>
                <p className="text-gray-400">Email</p>
                <a href="mailto:soumailasavadogo201@gmail.com" className="text-lg text-gray-200 hover:text-yellow-400 transition-colors">
                  soumailasavadogo201
                  @gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 hover:bg-gray-800/50 rounded-xl transition-all">
              
              <FiPhone className="h-10 w-10" /> 

              <div>
                <p className="text-gray-400">Téléphone</p>
                <a href="tel:+212 665-122930" className="text-lg text-gray-200 hover:text-yellow-400 transition-colors">
                  +212 665-122930
                </a>
              </div>
            </div>
          </div>
        </div>
        

        {/* Réseaux sociaux avec animations */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          {[
            { name: 'GitHub', icon: <FaGithub className="h-8 w-8" />, color: 'from-blue-900 to-pink-500' ,lien:'https://github.com/01warrior'},
            { name: 'LinkedIn', icon: <FaLinkedin className="h-8 w-8" />, color: 'from-blue-950 to-cyan-400',lien:'https://www.linkedin.com/in/savadogo-souma%C3%AFla-6694b9243/' },
            { name: 'Facebook', icon: <FaFacebook className="h-8 w-8" />, color: 'from-sky-900 to-blue-600' ,lien:'https://web.facebook.com/profile.php?id=100092271310878&_rdc=2&_rdr#'}
          ].map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ x: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl bg-gradient-to-r ${social.color} flex items-center gap-4 shadow-lg hover:shadow-xl transition-all`}
              href={social.lien}
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

  {/* bouton telecharger cv */}
    <div className="mt-12 flex justify-center">
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="" // Fichier placé dans le dossier public
      download="CV_Soumaila_Savadogo.pdf"
      className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-400 to-yellow-400 hover:from-yellow-400 hover:to-blue-400 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Effet de lumière au survol */}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
      
      <div className="flex items-center gap-3 relative">
        <HiDownload className="h-6 w-6 text-slate-900" />
        <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-800">
           Télécharger mon CV
        </span>
        <span className="text-slate-900 text-sm">(PDF, 849Ko)</span>
      </div>
    </motion.a>
  </div>

</section>

      </main>
    </div>
  );
}

export default App;