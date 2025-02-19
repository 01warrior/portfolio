import React from 'react';
import './MacScreenMockup.css'; // On va créer un fichier CSS pour ce composant

interface MacScreenMockupProps {
  children: React.ReactNode; // Pour passer le contenu (le code) à l'intérieur
}

function MacScreenMockup({ children }: MacScreenMockupProps) {
  return (
    <div className="mac-screen-mockup">
      <div className="mac-screen-header">
        <div className="mac-btn mac-btn-close"></div>
        <div className="mac-btn mac-btn-minimize"></div>
        <div className="mac-btn mac-btn-maximize"></div>
      </div>
      <div className="mac-screen-content">
        {children} {/* Affiche le contenu passé en tant qu'enfants du composant */}
      </div>
    </div>
  );
}

export default MacScreenMockup;