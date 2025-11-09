import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Crown, 
  Check, 
  Zap,
  TrendingUp,
  Users,
  Briefcase,
  BarChart3,
  Star
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const PremiumUpgrade = () => {
  const handleUpgrade = (plan: string) => {
    toast({
      title: "Upgrade Initiated",
      description: `Your ${plan} plan upgrade is being processed. You'll receive a confirmation email shortly.`,
    });
  };

  const freePlanFeatures = [
    'Basic alumni directory access',
    'Attend up to 3 events per month',
    'Post 1 job per month',
    'Basic analytics',
    'Community forums access',
  ];

  const premiumFeatures = [
    'Unlimited job postings',
    'Advanced analytics dashboard',
    'Priority support',
    'Featured profile in directory',
    'Unlimited event participation',
    'Direct messaging with all members',
    'Early access to new features',
    'Startup hub visibility',
    'Contribution leaderboard highlight',
  ];

  const enterpriseFeatures = [
    'All Premium features',
    'Custom branding options',
    'Dedicated account manager',
    'API access',
    'Bulk operations',
    'Advanced reporting',
    'Priority review for posts',
    'Custom integrations',
    'White-label options',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-accent text-white px-4 py-2">
            <Crown className="h-4 w-4 mr-2" />
            Upgrade Your Experience
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Choose Your <span className="bg-gradient-hero bg-clip-text text-transparent">Premium Plan</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock powerful features and maximize your impact on the AlumniConnect platform
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <Card className="shadow-soft relative">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Free
                <Badge variant="secondary">Current</Badge>
              </CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">₹0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {freePlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" disabled>
                Current Plan
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="shadow-strong border-2 border-primary relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-gradient-primary text-white px-6 py-2">
                <Star className="h-4 w-4 mr-1" />
                Most Popular
              </Badge>
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="flex items-center space-x-2 text-primary">
                <Zap className="h-6 w-6" />
                <span>Premium</span>
              </CardTitle>
              <CardDescription>For active contributors</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">₹999</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => handleUpgrade('Premium')}
              >
                Upgrade to Premium
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="shadow-soft relative bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Crown className="h-6 w-6 text-accent" />
                <span>Enterprise</span>
              </CardTitle>
              <CardDescription>For organizations & institutes</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant="accent" 
                className="w-full"
                onClick={() => handleUpgrade('Enterprise')}
              >
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Feature Comparison */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Why Upgrade?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Maximize Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reach more students, post unlimited opportunities, and climb the contribution leaderboard
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Better Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Direct messaging, priority visibility, and exclusive networking opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-2">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track your impact with detailed insights and comprehensive reporting tools
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};
