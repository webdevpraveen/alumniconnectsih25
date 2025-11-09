import { Trophy, Star, Award, Medal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ContributionBadgeProps {
  points: number;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

export const ContributionBadge: React.FC<ContributionBadgeProps> = ({
  points,
  size = 'md',
  showIcon = true,
  className = '',
}) => {
  const getBadgeLevel = (points: number) => {
    if (points >= 1000) return { level: 'Diamond', icon: Trophy, color: 'bg-gradient-accent' };
    if (points >= 500) return { level: 'Gold', icon: Award, color: 'bg-warning' };
    if (points >= 200) return { level: 'Silver', icon: Medal, color: 'bg-muted' };
    if (points >= 50) return { level: 'Bronze', icon: Star, color: 'bg-success' };
    return { level: 'Starter', icon: Star, color: 'bg-secondary' };
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2',
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const { level, icon: Icon, color } = getBadgeLevel(points);

  return (
    <Badge 
      className={`${color} text-white ${sizeClasses[size]} flex items-center space-x-1 shadow-soft ${className}`}
    >
      {showIcon && <Icon className={iconSizes[size]} />}
      <span>{points} pts</span>
      <span className="text-xs opacity-80">({level})</span>
    </Badge>
  );
};