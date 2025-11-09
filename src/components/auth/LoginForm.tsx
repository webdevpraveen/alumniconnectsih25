import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/user';
import { useNavigate } from 'react-router-dom';
import { User, GraduationCap, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeRole, setActiveRole] = useState<UserRole>('student');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password, activeRole);
      toast({
        title: "Welcome back!",
        description: `Successfully logged in as ${activeRole}`,
      });
      navigate(`/${activeRole}/dashboard`);
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
    }
  };

  const roleIcons = {
    student: <User className="h-4 w-4" />,
    alumni: <GraduationCap className="h-4 w-4" />,
    admin: <Shield className="h-4 w-4" />,
  };

  const quickLogin = (role: UserRole, demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('demo123');
    setActiveRole(role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/10 p-4">
      <Card className="w-full max-w-md shadow-strong">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Welcome to AlumniConnect
          </CardTitle>
          <CardDescription>
            Connect, collaborate, and grow with your alumni network
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs value={activeRole} onValueChange={(value) => setActiveRole(value as UserRole)} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="student" className="flex items-center space-x-1">
                {roleIcons.student}
                <span className="hidden sm:inline">Student</span>
              </TabsTrigger>
              <TabsTrigger value="alumni" className="flex items-center space-x-1">
                {roleIcons.alumni}
                <span className="hidden sm:inline">Alumni</span>
              </TabsTrigger>
              <TabsTrigger value="admin" className="flex items-center space-x-1">
                {roleIcons.admin}
                <span className="hidden sm:inline">Admin</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeRole} className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading} variant="hero">
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>

              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Quick demo login:</p>
                <div className="flex flex-col space-y-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => quickLogin('student', 'student@university.edu')}
                    className="justify-start"
                  >
                    {roleIcons.student} Student Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => quickLogin('alumni', 'alumni@company.com')}
                    className="justify-start"
                  >
                    {roleIcons.alumni} Alumni Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => quickLogin('admin', 'admin@university.edu')}
                    className="justify-start"
                  >
                    {roleIcons.admin} Admin Demo
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter>
          <p className="text-sm text-muted-foreground text-center w-full">
            Don't have an account? <a href="#" className="text-primary hover:underline">Sign up</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};