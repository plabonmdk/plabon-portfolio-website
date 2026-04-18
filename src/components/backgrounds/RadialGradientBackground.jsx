import React from "react";

const RadialGradientBackground = ({
  image = "/src/assets/abstract-3d-gold-curved-dark-blue-ribbon-on-dark-blue-background-with-lighting-effect-and-sparkle-with-copy-space-for-text-luxury-design-style-vector.jpg", 
  overlay = true,
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* Optional Overlay (for dark effect) */}
      {overlay && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      )}
    </div>
  );
};

export default RadialGradientBackground;