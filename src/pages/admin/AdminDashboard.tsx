import { Header } from '@/components/layout/Header';
import { StatsCard } from '@/components/common/StatsCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Briefcase, 
  Calendar, 
  Trophy, 
  Shield, 
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  UserCheck,
  GraduationCap,
  Building,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {
  // Mock data - replace with actual data fetching
  const platformStats = {
    totalAlumni: 1248,
    totalStudents: 3420,
    activeJobs: 156,
    upcomingEvents: 24,
    totalContributions: 8650,
    monthlyGrowth: 12.5,
  };

  const recentActivity = [
    {
      id: '1',
      type: 'user_registration',
      description: 'New alumni registration: Dr. Sarah Johnson',
      timestamp: '2 hours ago',
      status: 'pending',
    },
    {
      id: '2',
      type: 'job_posted',
      description: 'New job posted: Senior Developer at TechCorp',
      timestamp: '5 hours ago',
      status: 'approved',
    },
    {
      id: '3',
      type: 'event_created',
      description: 'Event created: AI Workshop by Prof. Williams',
      timestamp: '1 day ago',
      status: 'approved',
    },
    {
      id: '4',
      type: 'user_registration',
      description: 'New student registration: Maria Santos',
      timestamp: '2 days ago',
      status: 'approved',
    },
    {
      id: '5',
      type: 'user_registration',
      description: 'New alumni registration: Mr. Anil Kapoor',
      timestamp: '3 minutes ago',
      status: 'pending',
    },
    {
      id: '6',
      type: 'event_created',
      description: 'Event created: AI Workshop by Mrs. Anjali Mehta',
      timestamp: '1 day ago',
      status: 'approved',
    },
    {
      id: '7',
      type: 'event_created',
      description: 'Event created: AI Workshop by Prof. Jaagdish Mathur',
      timestamp: '2 day ago',
      status: 'approved',
    },
  ];

  const topContributors = [
    {
      id: '1',
      name: 'Dr. Michael Chen',
      role: 'alumni',
      score: 1250,
      activity: 'Posted 5 jobs, organized 3 events',
    },
    {
      id: '2',
      name: 'Sarah Williams',
      role: 'alumni',
      score: 980,
      activity: 'Mentored 15 students, posted 3 jobs',
    },
    {
      id: '3',
      name: 'Alex Kumar',
      role: 'student',
      score: 320,
      activity: 'Active in 8 events, helped 5 peers',
    },
  ];

  const pendingApprovals = [
    {
      id: '1',
      type: 'job',
      title: 'Frontend Developer Position',
      submittedBy: 'TechStart Inc.',
      submittedDate: '2025-01-08',
    },
    {
      id: '2',
      type: 'event',
      title: 'Blockchain Workshop',
      submittedBy: 'Dr. Priya Patel',
      submittedDate: '2025-01-08',
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user_registration': return <UserCheck className="h-4 w-4" />;
      case 'job_posted': return <Briefcase className="h-4 w-4" />;
      case 'event_created': return <Calendar className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved': return <Badge variant="default" className="bg-success text-success-foreground">Approved</Badge>;
      case 'pending': return <Badge variant="secondary">Pending</Badge>;
      case 'rejected': return <Badge variant="destructive">Rejected</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Monitor platform activity and manage the AlumniConnect community
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className="bg-gradient-primary text-white px-3 py-1">
                <Shield className="h-3 w-3 mr-1" />
                Administrator
              </Badge>
            </div>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <StatsCard
            title="Total Alumni"
            value={platformStats.totalAlumni.toLocaleString()}
            description="Registered alumni members"
            icon={GraduationCap}
            trend={{ value: 8, label: 'this month', isPositive: true }}
          />
          <StatsCard
            title="Total Students"
            value={platformStats.totalStudents.toLocaleString()}
            description="Active student members"
            icon={Users}
            trend={{ value: 15, label: 'this month', isPositive: true }}
          />
          <StatsCard
            title="Active Jobs"
            value={platformStats.activeJobs}
            description="Open positions"
            icon={Briefcase}
            trend={{ value: 22, label: 'this week', isPositive: true }}
          />
          <StatsCard
            title="Upcoming Events"
            value={platformStats.upcomingEvents}
            description="Scheduled events"
            icon={Calendar}
            trend={{ value: 33, label: 'this month', isPositive: true }}
          />
          <StatsCard
            title="Total Contributions"
            value={platformStats.totalContributions.toLocaleString()}
            description="Platform-wide points"
            icon={Trophy}
            gradient
          />
          <StatsCard
            title="Monthly Growth"
            value={`${platformStats.monthlyGrowth}%`}
            description="User engagement growth"
            icon={TrendingUp}
            trend={{ value: 2.3, label: 'vs last month', isPositive: true }}
          />
        </div>

        {/* Quick Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link to="/admin/users">
            <Card className="shadow-soft hover:shadow-medium transition-all cursor-pointer h-full bg-gradient-card">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Students Directory</h3>
                <p className="text-sm text-muted-foreground">Manage all students</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/analytics">
            <Card className="shadow-soft hover:shadow-medium transition-all cursor-pointer h-full bg-gradient-card">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-muted-foreground">View detailed reports</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/leaderboard">
            <Card className="shadow-soft hover:shadow-medium transition-all cursor-pointer h-full bg-gradient-card">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Leaderboard</h3>
                <p className="text-sm text-muted-foreground">Top contributors</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/notifications">
            <Card className="shadow-soft hover:shadow-medium transition-all cursor-pointer h-full bg-gradient-card">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Notifications</h3>
                <p className="text-sm text-muted-foreground">Send announcements</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Recent Platform Activity</span>
                  </CardTitle>
                  <CardDescription>
                    Latest user actions and system events
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All Logs
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 rounded-lg border bg-gradient-card">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(activity.status)}
                      {activity.status === 'pending' && (
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Management Actions & Insights */}
          <div className="space-y-6">
            {/* Quick Management Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Management Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="hero" asChild>
                  <Link to="/admin/users">
                    <Users className="mr-2 h-4 w-4" />
                    Manage Users
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="accent" asChild>
                  <Link to="/admin/approvals">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Pending Approvals
                    {pendingApprovals.length > 0 && (
                      <Badge className="ml-auto bg-warning text-warning-foreground">
                        {pendingApprovals.length}
                      </Badge>
                    )}
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/admin/analytics">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View Analytics
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/admin/notifications">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Send Announcements
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>Top Contributors</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={contributor.id} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-accent text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-sm">{contributor.name}</p>
                        <Badge variant="outline" className="text-xs">
                          {contributor.role}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{contributor.activity}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Trophy className="h-3 w-3 text-accent" />
                        <span className="text-xs font-medium text-accent">{contributor.score} pts</span>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/admin/leaderboard">View Full Leaderboard</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pending Approvals */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Pending Approvals</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="p-3 rounded-lg border bg-warning/10">
                    <h4 className="font-medium text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">by {item.submittedBy}</p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant="outline" className="text-xs capitalize">
                        {item.type}
                      </Badge>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="success" className="text-xs px-2 py-1">
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive" className="text-xs px-2 py-1">
                          Reject
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                {pendingApprovals.length === 0 && (
                  <div className="text-center py-4 text-muted-foreground text-sm">
                    No pending approvals
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};