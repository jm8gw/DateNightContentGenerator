import React, { useState, useEffect } from 'react';

function TypingEffect({ text }) {
  const [visibleText, setVisibleText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setVisibleText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the typing speed by changing the interval duration (e.g., 100ms).

    return () => {
      clearInterval(interval); // Cleanup when the component unmounts.
    };
  }, [currentIndex, text]);

  return <div>{visibleText}</div>;
}

export default TypingEffect;
