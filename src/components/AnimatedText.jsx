import { useEffect, useState } from 'react';

function AnimatedText() {

  const words = ["React", "Flutter", "Dart", "Docker", "Node.js","SpringBoot","Java","Tailwind"];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 150;
    const deleteSpeed = 100;
    const pauseBetweenWords = 1500;

    const currentWord = words[currentWordIndex];

    if (isTyping) {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typeSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, pauseBetweenWords);
        return () => clearTimeout(timeout);
      }
    }

    if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [currentText, isTyping, isDeleting, currentWordIndex]);

  return (
    <div className="container mx-auto px-4 text-center relative z-10 font-Poppins">
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
        Hi ! Je suis Soumaila SAVADOGO
      </h2>
      
      <div className="relative inline-block">
        <p className="text-2xl text-wrap md:text-4xl pb-3 lg:text-5xl text-gray-200 overflow-hidden whitespace-nowrap">
          Ingénieur informatique{" "}
          <span className="text-yellow-400 border-r-2 border-purple-400 animate-blink">
            {currentText}
          </span>
        </p>
      </div>

      <p className="text-base md:text-2xl mt-4 bg-gradient-to-r from-blue-300 to-yellow-400 bg-clip-text text-transparent">
        Bienvenue sur mon portfolio !
      </p>
    </div>
  );
}

export default AnimatedText;