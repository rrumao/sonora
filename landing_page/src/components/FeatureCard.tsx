
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  className,
  delay = 0 
}) => {
  return (
    <div 
      className={cn(
        "relative group rounded-2xl p-8 backdrop-blur-sm bg-white/80 border border-white/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Interactive gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sonora-purple/5 via-transparent to-sonora-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Animated border light effect */}
      <div className="absolute inset-px bg-gradient-to-br from-sonora-purple/10 to-sonora-blue/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-sonora-purple/20 to-sonora-blue/20 rounded-xl blur-xl transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-sonora-purple to-sonora-light-purple text-white shadow-lg group-hover:shadow-sonora-purple/25 transition-all duration-300">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
