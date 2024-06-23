import React from 'react';

interface CustomAddIconProps {
  className?: string;
}



const CustomAddIcon: React.FC<CustomAddIconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1200"
    fill="#3f5efb" // Définir la couleur ici
  >
    <path
      id="path17223"
      d="M430.078,0v430.078H0v339.844h430.078V1200h339.844V769.922H1200V430.078
        H769.922V0H430.078z"
    />
  </svg>
);

export default CustomAddIcon;
