import React, { useState, useEffect, useRef } from "react";
import './LoadingType.css'

const LoadingType = ({text}) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    index.current = 0;
    setCurrentText("");
  }, [text]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentText(text.slice(0, currentText.length + 1));
      index.current += 1;
    }, 100);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentText, text]);

  return (
    <p className="text-base tracking-wider font-michroma text-3xl md:text-5xl blinking-cursor ">
      {currentText}
    </p>
  );
};

export default LoadingType;
