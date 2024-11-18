import React from 'react';
import { ArrowDown, X, Beer } from 'lucide-react';

const LucideIcon = ({ Icon }) => {
  return Icon ? <Icon size={15} /> : null;
};

export const Testing = () => {
  const iconMap = {
    X: X,
    Beer: Beer,
    ArrowDown: ArrowDown,
  };

  const lucideIcons = ['X', 'Beer'];

  return (
    <div>
      {lucideIcons.map((iconName) => {
        const IconComponent = iconMap[iconName]; // Get the component based on the name
        return <LucideIcon key={iconName} Icon={IconComponent} />;
      })}
    </div>
  );
};
