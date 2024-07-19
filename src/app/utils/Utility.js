import React, {useEffect, useState } from "react";

export const commonMethod = () => {
    // Your common method logic here
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust the breakpoint as needed
        setIsMobile(mediaQuery.matches);
    
        const handleResize = () => {
          setIsMobile(mediaQuery.matches);
        };
    
        mediaQuery.addListener(handleResize);
    
        return () => {
          mediaQuery.removeListener(handleResize);
        };
      }, []);
      return isMobile
  };