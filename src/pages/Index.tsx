import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Star, 
  Trophy,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Building,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { user } = useAuth();

  // If user is logged in, redirect to their dashboard
  if (user) {
    window.location.href = `/${user.role}/dashboard`;
    return null;
  }

  const features = [
    {
      icon: Users,
      title: "Skill-Based Matching",
      description: "Connect alumni with students based on skills, expertise, and career goals for meaningful collaborations."
    },
    {
      icon: Briefcase,
      title: "Job & Project Opportunities",
      description: "Alumni post exclusive job openings and startup projects, giving students direct access to opportunities."
    },
    {
      icon: Trophy,
      title: "Contribution Recognition",
      description: "Gamified point system that recognizes and rewards both alumni and students for their community contributions."
    },
    {
      icon: MessageSquare,
      title: "Mentorship Platform",
      description: "Structured mentorship programs connecting experienced alumni with students seeking guidance."
    },
    {
      icon: TrendingUp,
      title: "Impact Analytics",
      description: "Track the real impact of alumni contributions and student engagement with comprehensive analytics."
    },
    {
      icon: Building,
      title: "Startup Collaboration Hub",
      description: "Alumni entrepreneurs can recruit talented students for their startups and innovative projects."
    }
  ];

  const stats = [
    { value: "1,248", label: "Alumni Connected", icon: GraduationCap, animated: true },
    { value: "3,420", label: "Students Engaged", icon: Users, animated: true },
    { value: "156", label: "Job Opportunities", icon: Briefcase, animated: true },
    { value: "8,650", label: "Contribution Points", icon: Trophy, animated: true }
  ];

  const topContributors = [
    { name: 'Priya Nair', points: 1580, company: 'EduTech Solutions' },
    { name: 'Ravi Sharma', points: 1250, company: 'Google India' },
    { name: 'Aniket Deshmukh', points: 980, company: 'Microsoft' },
    { name: 'kartikesh Mishra', points: 750, company: 'Amazon' },
  ];

  const badges = [
    { icon: Trophy, name: 'Gold Contributor', color: 'from-yellow-400 to-yellow-600' },
    { icon: Star, name: 'Silver Contributor', color: 'from-gray-300 to-gray-500' },
    { icon: Award, name: 'Bronze Contributor', color: 'from-amber-600 to-amber-800' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Award className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-hero bg-clip-text text-transparent">
              AlumniConnect
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-accent text-white px-4 py-2 text-sm">
              🚀 Built for Smart India Hackathon 2025 by Team AARAMBH CODERS
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Connecting Alumni & Students for 
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Meaningful Growth</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A revolutionary platform that bridges the gap between experienced alumni and aspiring students, 
              fostering collaboration, mentorship, and career opportunities through skill-based matching and 
              contribution recognition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" asChild className="text-lg px-8 py-6">
                <Link to="/login">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
                <Link to="https://alumniconnectsih25.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Section with Animation */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-primary shadow-accent animate-pulse">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1 bg-gradient-hero bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Leaderboard Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Top <span className="text-primary">Contributors</span> This Month
            </h2>
            <p className="text-lg text-muted-foreground">
              Alumni making the biggest impact on our community
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {topContributors.map((contributor, index) => (
              <Card key={index} className={`shadow-soft hover:shadow-medium transition-all duration-300 ${index === 0 ? 'border-2 border-primary' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                        index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                        index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500' :
                        'bg-gradient-to-br from-amber-600 to-amber-800'
                      } text-white font-bold text-lg shadow-strong`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{contributor.name}</h3>
                        <p className="text-sm text-muted-foreground">{contributor.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <Trophy className="h-5 w-5 text-accent" />
                        <span className="text-2xl font-bold text-accent">{contributor.points}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">points</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Badges & Gamification */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Earn Recognition for Your Contributions
          </h2>
          <p className="text-muted-foreground mb-8">
            Level up your profile and showcase your impact with achievement badges
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {badges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-strong hover:scale-110 transition-transform duration-300`}>
                  <badge.icon className="h-10 w-10 text-white" />
                </div>
                <span className="font-semibold text-sm">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Powerful Features for <span className="text-primary">Maximum Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform goes beyond traditional alumni networks with innovative features 
              designed to create real value for both alumni and students.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 border-0 bg-gradient-card hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 shadow-accent">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Alumni Network?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of alumni and students who are already building meaningful 
            connections and creating opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link to="/login">
                Start Connecting <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-6 w-6 rounded bg-gradient-hero flex items-center justify-center">
                <Award className="h-3 w-3 text-white" />
              </div>
              <span className="font-bold bg-gradient-hero bg-clip-text text-transparent">
                AlumniConnect
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 AlumniConnect. Built for Smart India Hackathon 2025.
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Designed & Developed by <span className="font-semibold text-primary">Aarambh Coders</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
