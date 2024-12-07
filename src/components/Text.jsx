import React, { useEffect, useState } from "react";

const Text = () => {
  const phrases = ["Software Engineer", "Full Stack designer", "Web Developer"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000); // Change phrase every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="animated-text">
      {phrases[currentPhraseIndex]}
    </span>
  );
};

export default Text;