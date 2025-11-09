import { Badge } from '@/components/ui/badge';
import { Linkedin, Github, Calendar } from 'lucide-react';

interface ApiIntegrationBadgeProps {
  type: 'linkedin' | 'github' | 'google-calendar';
  connected?: boolean;
}

export const ApiIntegrationBadge: React.FC<ApiIntegrationBadgeProps> = ({ 
  type, 
  connected = false 
}) => {
  const configs = {
    'linkedin': {
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'bg-blue-600 text-white'
    },
    'github': {
      icon: Github,
      label: 'GitHub',
      color: 'bg-gray-800 text-white'
    },
    'google-calendar': {
      icon: Calendar,
      label: 'Google Calendar',
      color: 'bg-blue-500 text-white'
    }
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <Badge className={`${config.color} ${connected ? 'opacity-100' : 'opacity-50'}`}>
      <Icon className="h-3 w-3 mr-1" />
      {config.label}
      {connected && <span className="ml-1">✓</span>}
    </Badge>
  );
};
