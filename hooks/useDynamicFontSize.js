import { useState, useEffect, useRef } from 'react';

const useDynamicFontSize = (text, maxFontSize = 72, minFontSize = 20) => {
  const [fontSize, setFontSize] = useState(maxFontSize);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const adjustFontSize = () => {
      if (!textRef.current || !containerRef.current) return false;

      const container = containerRef.current;
      const textElement = textRef.current;
      
      // Check if container has actual dimensions
      if (container.clientWidth === 0) return false;
      
      // Get container width with some padding buffer
      const containerStyles = window.getComputedStyle(container);
      const containerWidth = container.clientWidth - 
        parseFloat(containerStyles.paddingLeft) - 
        parseFloat(containerStyles.paddingRight) - 40; // Extra buffer for safety
      
      if (containerWidth <= 0) return false;
      
      // Create a temporary element to measure text width accurately
      const tempElement = document.createElement('span');
      tempElement.style.visibility = 'hidden';
      tempElement.style.position = 'absolute';
      tempElement.style.whiteSpace = 'nowrap';
      tempElement.style.fontFamily = window.getComputedStyle(textElement).fontFamily || 'inherit';
      tempElement.style.fontWeight = window.getComputedStyle(textElement).fontWeight || 'normal';
      tempElement.textContent = text;
      document.body.appendChild(tempElement);
      
      // Start with max font size and work down
      let currentFontSize = maxFontSize;
      tempElement.style.fontSize = `${currentFontSize}px`;
      
      // Keep reducing font size until text fits
      while (tempElement.offsetWidth > containerWidth && currentFontSize > minFontSize) {
        currentFontSize -= 1;
        tempElement.style.fontSize = `${currentFontSize}px`;
      }
      
      // Clean up temp element
      document.body.removeChild(tempElement);
      
      setFontSize(currentFontSize);
      return true;
    };

    const tryAdjustFontSize = () => {
      // Try multiple times with increasing delays to ensure DOM is ready
      const attempts = [0, 50, 100, 200, 500];
      
      attempts.forEach((delay, index) => {
        setTimeout(() => {
          const success = adjustFontSize();
          if (success && index < attempts.length - 1) {
            // If successful, cancel remaining attempts
            attempts.slice(index + 1).forEach((futureDelay, futureIndex) => {
              clearTimeout(setTimeout(() => {}, futureDelay));
            });
          }
        }, delay);
      });
    };

    // Try to adjust immediately and with delays
    tryAdjustFontSize();
    
    const handleResize = () => {
      // Use requestAnimationFrame to avoid excessive calls during resize
      requestAnimationFrame(adjustFontSize);
    };

    window.addEventListener('resize', handleResize);
    
    // Also adjust when text changes
    const observer = new MutationObserver(() => {
      setTimeout(adjustFontSize, 10);
    });
    
    if (textRef.current) {
      observer.observe(textRef.current, { 
        childList: true, 
        subtree: true, 
        characterData: true 
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [text, maxFontSize, minFontSize]);

  // Additional effect to trigger when refs are set
  useEffect(() => {
    if (textRef.current && containerRef.current) {
      // Small delay to ensure layout is complete
      const timeoutId = setTimeout(() => {
        const adjustFontSize = () => {
          if (!textRef.current || !containerRef.current) return false;

          const container = containerRef.current;
          const textElement = textRef.current;
          
          // Check if container has actual dimensions
          if (container.clientWidth === 0) return false;
          
          // Get container width with some padding buffer
          const containerStyles = window.getComputedStyle(container);
          const containerWidth = container.clientWidth - 
            parseFloat(containerStyles.paddingLeft) - 
            parseFloat(containerStyles.paddingRight) - 40; // Extra buffer for safety
          
          if (containerWidth <= 0) return false;
          
          // Create a temporary element to measure text width accurately
          const tempElement = document.createElement('span');
          tempElement.style.visibility = 'hidden';
          tempElement.style.position = 'absolute';
          tempElement.style.whiteSpace = 'nowrap';
          tempElement.style.fontFamily = window.getComputedStyle(textElement).fontFamily || 'inherit';
          tempElement.style.fontWeight = window.getComputedStyle(textElement).fontWeight || 'normal';
          tempElement.textContent = text;
          document.body.appendChild(tempElement);
          
          // Start with max font size and work down
          let currentFontSize = maxFontSize;
          tempElement.style.fontSize = `${currentFontSize}px`;
          
          // Keep reducing font size until text fits
          while (tempElement.offsetWidth > containerWidth && currentFontSize > minFontSize) {
            currentFontSize -= 1;
            tempElement.style.fontSize = `${currentFontSize}px`;
          }
          
          // Clean up temp element
          document.body.removeChild(tempElement);
          
          setFontSize(currentFontSize);
          return true;
        };

        adjustFontSize();
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [textRef.current, containerRef.current, text, maxFontSize, minFontSize]);

  return { fontSize, textRef, containerRef };
};

export default useDynamicFontSize;
