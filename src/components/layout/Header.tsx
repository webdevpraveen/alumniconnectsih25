import { User, LogOut, Bell, Trophy, Award, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  const { user, logout } = useAuth();

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'text-warning';
      case 'alumni': return 'text-primary';
      case 'student': return 'text-accent';
      default: return 'text-foreground';
    }
  };

  const getRoleBadgeIcon = (role: string) => {
    switch (role) {
      case 'admin': return <Trophy className="h-3 w-3" />;
      case 'alumni': return <Award className="h-3 w-3" />;
      case 'student': return <User className="h-3 w-3" />;
      default: return <User className="h-3 w-3" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center">
            <Award className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-hero bg-clip-text text-transparent">
            AlumniConnect
          </span>
        </Link>

        {user && (
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild className="hidden sm:flex">
              <Link to="/premium">
                <Crown className="h-4 w-4 mr-2 text-accent" />
                Go Premium
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full text-xs flex items-center justify-center text-white">
                3
              </span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">{user.name}</span>
                    <div className={`flex items-center space-x-1 ${getRoleColor(user.role)} text-xs`}>
                      {getRoleBadgeIcon(user.role)}
                      <span className="capitalize">{user.role}</span>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to={`/profile/edit`} className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                {user.role === 'alumni' && (
                  <DropdownMenuItem asChild>
                    <Link to="/alumni/fundraising" className="flex items-center">
                      <Award className="mr-2 h-4 w-4" />
                      Fundraising Hub
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem asChild className="sm:hidden">
                  <Link to="/premium" className="flex items-center">
                    <Crown className="mr-2 h-4 w-4" />
                    Go Premium
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </header>
  );
};