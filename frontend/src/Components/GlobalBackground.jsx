import React from 'react';
import Galaxy from './Galaxy';

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#0B0F19]">
      <Galaxy 
        mouseRepulsion
        mouseInteraction
        density={1}
        glowIntensity={0.3}
        saturation={0}
        hueShift={140}
        twinkleIntensity={0.3}
        rotationSpeed={0.1}
        repulsionStrength={2}
        autoCenterRepulsion={0}
        starSpeed={0.5}
        speed={1}
      />
    </div>
  );
};

export default GlobalBackground;
