import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Heart, 
  Book, 
  Laptop, 
  DollarSign, 
  TrendingUp,
  Users,
  Target
} from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

export const FundraisingHub = () => {
  const [donationType, setDonationType] = useState<'money' | 'books' | 'equipment'>('money');

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Donation Submitted!",
      description: "Your contribution will be reviewed by the admin team. Thank you for giving back!",
    });
  };

  const recentCampaigns = [
    {
      id: '1',
      title: 'New Computer Lab Equipment',
      goal: 500000,
      raised: 325000,
      donors: 45,
      status: 'active',
    },
    {
      id: '2',
      title: 'Library Book Collection',
      goal: 100000,
      raised: 85000,
      donors: 28,
      status: 'active',
    },
    {
      id: '3',
      title: 'Scholarship Fund 2025',
      goal: 1000000,
      raised: 750000,
      donors: 120,
      status: 'active',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center">
            <Heart className="h-8 w-8 mr-3 text-primary" />
            Fundraising Hub
          </h1>
          <p className="text-muted-foreground">
            Give back to your institution and help shape the future of education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Make a Contribution</CardTitle>
                <CardDescription>
                  Choose how you'd like to contribute to your alma mater
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Donation Type Selection */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <Button
                    variant={donationType === 'money' ? 'hero' : 'outline'}
                    className="h-20 flex-col"
                    onClick={() => setDonationType('money')}
                  >
                    <DollarSign className="h-6 w-6 mb-2" />
                    <span className="text-sm">Money</span>
                  </Button>
                  <Button
                    variant={donationType === 'books' ? 'hero' : 'outline'}
                    className="h-20 flex-col"
                    onClick={() => setDonationType('books')}
                  >
                    <Book className="h-6 w-6 mb-2" />
                    <span className="text-sm">Books</span>
                  </Button>
                  <Button
                    variant={donationType === 'equipment' ? 'hero' : 'outline'}
                    className="h-20 flex-col"
                    onClick={() => setDonationType('equipment')}
                  >
                    <Laptop className="h-6 w-6 mb-2" />
                    <span className="text-sm">Equipment</span>
                  </Button>
                </div>

                <form onSubmit={handleDonation} className="space-y-4">
                  {donationType === 'money' && (
                    <>
                      <div>
                        <Label htmlFor="amount">Donation Amount (₹)</Label>
                        <Input 
                          id="amount" 
                          type="number" 
                          placeholder="10000" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="campaign">Select Campaign (Optional)</Label>
                        <select 
                          id="campaign" 
                          className="w-full h-10 px-3 rounded-md border border-input bg-background"
                        >
                          <option value="">General Fund</option>
                          <option value="lab">Computer Lab Equipment</option>
                          <option value="library">Library Books</option>
                          <option value="scholarship">Scholarship Fund</option>
                        </select>
                      </div>
                    </>
                  )}

                  {donationType === 'books' && (
                    <>
                      <div>
                        <Label htmlFor="bookTitle">Book Title</Label>
                        <Input id="bookTitle" placeholder="Enter book name" required />
                      </div>
                      <div>
                        <Label htmlFor="author">Author</Label>
                        <Input id="author" placeholder="Author name" required />
                      </div>
                      <div>
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input id="quantity" type="number" placeholder="1" required />
                      </div>
                    </>
                  )}

                  {donationType === 'equipment' && (
                    <>
                      <div>
                        <Label htmlFor="equipmentType">Equipment Type</Label>
                        <Input id="equipmentType" placeholder="Laptops, Projectors, etc." required />
                      </div>
                      <div>
                        <Label htmlFor="equipmentQuantity">Quantity</Label>
                        <Input id="equipmentQuantity" type="number" placeholder="1" required />
                      </div>
                      <div>
                        <Label htmlFor="condition">Condition</Label>
                        <select 
                          id="condition" 
                          className="w-full h-10 px-3 rounded-md border border-input bg-background"
                          required
                        >
                          <option value="new">Brand New</option>
                          <option value="excellent">Excellent</option>
                          <option value="good">Good</option>
                          <option value="fair">Fair</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Share your thoughts or dedication..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="hero" size="lg">
                    Submit Contribution
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Active Campaigns */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Active Campaigns</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentCampaigns.map((campaign) => {
                  const percentage = (campaign.raised / campaign.goal) * 100;
                  return (
                    <div key={campaign.id} className="p-4 rounded-lg border bg-gradient-card">
                      <h4 className="font-semibold text-sm mb-2">{campaign.title}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>₹{campaign.raised.toLocaleString()} raised</span>
                          <span>₹{campaign.goal.toLocaleString()} goal</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            <Users className="h-3 w-3 mr-1" />
                            {campaign.donors} donors
                          </Badge>
                          <Badge variant="default" className="text-xs bg-success">
                            {percentage.toFixed(0)}%
                          </Badge>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="shadow-soft bg-gradient-hero text-white">
              <CardHeader>
                <CardTitle className="text-white">Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Total Contributed</span>
                  <span className="font-bold text-xl">₹50,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Campaigns Supported</span>
                  <span className="font-bold text-xl">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Impact Score</span>
                  <Badge className="bg-white/20 text-white">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +150 pts
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};
