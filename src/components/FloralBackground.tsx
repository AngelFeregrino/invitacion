import React from 'react';

/**
 * FloralBackground - decorative SVG roses/flowers scattered as fixed background
 * Uses the pink/rose palette to match the invitation theme.
 */
export const FloralBackground: React.FC = () => {
  // Definición de flores en SVG (pétalos de rosa estilizados)
  const RoseSVG = ({ size = 60, opacity = 0.12, rotate = 0, color = '#ec4899' }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)`, opacity }}
    >
      {/* Pétalos de rosa */}
      <ellipse cx="50" cy="30" rx="14" ry="22" fill={color} />
      <ellipse cx="50" cy="30" rx="14" ry="22" fill={color} transform="rotate(45 50 50)" />
      <ellipse cx="50" cy="30" rx="14" ry="22" fill={color} transform="rotate(90 50 50)" />
      <ellipse cx="50" cy="30" rx="14" ry="22" fill={color} transform="rotate(135 50 50)" />
      <ellipse cx="50" cy="30" rx="14" ry="22" fill={color} transform="rotate(180 50 50)" />
      <ellipse cx="50" cy="30" rx="14" ry="22" fill={color} transform="rotate(225 50 50)" />
      <ellipse cx="50" cy="30" rx="14" ry="22" fill={color} transform="rotate(270 50 50)" />
      <ellipse cx="50" cy="30" rx="14" ry="22" fill={color} transform="rotate(315 50 50)" />
      {/* Centro */}
      <circle cx="50" cy="50" r="10" fill={color} />
      {/* Hoja */}
      <ellipse cx="50" cy="82" rx="7" ry="12" fill="#86efac" opacity="0.6" />
    </svg>
  );

  const SmallFlowerSVG = ({ size = 40, opacity = 0.1, rotate = 0, color = '#f9a8d4' }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)`, opacity }}
    >
      <ellipse cx="50" cy="20" rx="10" ry="18" fill={color} />
      <ellipse cx="50" cy="20" rx="10" ry="18" fill={color} transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="20" rx="10" ry="18" fill={color} transform="rotate(120 50 50)" />
      <ellipse cx="50" cy="20" rx="10" ry="18" fill={color} transform="rotate(180 50 50)" />
      <ellipse cx="50" cy="20" rx="10" ry="18" fill={color} transform="rotate(240 50 50)" />
      <ellipse cx="50" cy="20" rx="10" ry="18" fill={color} transform="rotate(300 50 50)" />
      <circle cx="50" cy="50" r="9" fill={color} />
    </svg>
  );

  const flowers = [
    // Esquinas y bordes — rosas grandes
    { x: '-2%', y: '2%', size: 120, opacity: 0.09, rotate: 15, color: '#ec4899', type: 'rose' },
    { x: '88%', y: '-1%', size: 100, opacity: 0.08, rotate: -20, color: '#db2777', type: 'rose' },
    { x: '-3%', y: '35%', size: 90, opacity: 0.07, rotate: 30, color: '#f472b6', type: 'rose' },
    { x: '92%', y: '28%', size: 110, opacity: 0.08, rotate: -10, color: '#ec4899', type: 'rose' },
    { x: '-2%', y: '65%', size: 100, opacity: 0.07, rotate: 45, color: '#db2777', type: 'rose' },
    { x: '90%', y: '60%', size: 95, opacity: 0.08, rotate: -30, color: '#f9a8d4', type: 'rose' },
    { x: '5%', y: '88%', size: 115, opacity: 0.08, rotate: 20, color: '#ec4899', type: 'rose' },
    { x: '82%', y: '88%', size: 105, opacity: 0.07, rotate: -15, color: '#db2777', type: 'rose' },
    // Flores pequeñas dispersas
    { x: '20%', y: '5%', size: 55, opacity: 0.07, rotate: 35, color: '#f9a8d4', type: 'small' },
    { x: '50%', y: '2%', size: 45, opacity: 0.06, rotate: -25, color: '#ec4899', type: 'small' },
    { x: '75%', y: '12%', size: 50, opacity: 0.07, rotate: 50, color: '#f472b6', type: 'small' },
    { x: '15%', y: '50%', size: 60, opacity: 0.06, rotate: -40, color: '#fda4af', type: 'small' },
    { x: '85%', y: '48%', size: 48, opacity: 0.07, rotate: 25, color: '#f9a8d4', type: 'small' },
    { x: '40%', y: '92%', size: 55, opacity: 0.06, rotate: -15, color: '#ec4899', type: 'small' },
    { x: '65%', y: '90%', size: 50, opacity: 0.07, rotate: 40, color: '#f472b6', type: 'small' },
    { x: '30%', y: '25%', size: 40, opacity: 0.05, rotate: 60, color: '#fda4af', type: 'small' },
    { x: '70%', y: '40%', size: 42, opacity: 0.05, rotate: -55, color: '#f9a8d4', type: 'small' },
    { x: '55%', y: '70%', size: 38, opacity: 0.05, rotate: 30, color: '#ec4899', type: 'small' },
  ];

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {flowers.map((flower, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: flower.x,
            top: flower.y,
          }}
        >
          {flower.type === 'rose' ? (
            <RoseSVG
              size={flower.size}
              opacity={flower.opacity}
              rotate={flower.rotate}
              color={flower.color}
            />
          ) : (
            <SmallFlowerSVG
              size={flower.size}
              opacity={flower.opacity}
              rotate={flower.rotate}
              color={flower.color}
            />
          )}
        </div>
      ))}
    </div>
  );
};
