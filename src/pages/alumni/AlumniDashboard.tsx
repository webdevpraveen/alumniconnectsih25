import { Header } from '@/components/layout/Header';
import { StatsCard } from '@/components/common/StatsCard';
import { ContributionBadge } from '@/components/common/ContributionBadge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Briefcase, 
  Calendar, 
  Trophy, 
  MessageSquare, 
  User,
  MapPin,
  ExternalLink,
  Star,
  TrendingUp,
  Plus,
  Code,
  GraduationCap,
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AlumniDashboard = () => {
  // Mock data - replace with actual data fetching
  const alumniStats = {
    studentsHelped: 25,
    jobsPosted: 8,
    eventsOrganized: 3,
    contributionScore: 850,
  };

  const mockStudents = [
    {
      id: '1',
      name: 'Alex Kumar',
      year: 'Final Year',
      department: 'Computer Science',
      skills: ['React', 'Node.js', 'Python', 'Machine Learning'],
      gpa: 3.8,
      projects: 5,
      lookingFor: 'Internship',
    },
    {
      id: '2',
      name: 'Maria Santos',
      year: 'Third Year',
      department: 'Information Technology',
      skills: ['Java', 'Spring Boot', 'Angular', 'AWS'],
      gpa: 3.9,
      projects: 7,
      lookingFor: 'Full-time',
    },
    {
      id: '3',
      name: 'David Lee',
      year: 'Second Year',
      department: 'Software Engineering',
      skills: ['JavaScript', 'Vue.js', 'Docker', 'MongoDB'],
      gpa: 3.7,
      projects: 3,
      lookingFor: 'Mentorship',
    },
  ];

  const recentApplications = [
    {
      id: '1',
      studentName: 'Alex Kumar',
      position: 'Frontend Developer Intern',
      appliedDate: '2025-01-08',
      status: 'Under Review',
    },
    {
      id: '2',
      studentName: 'Maria Santos',
      position: 'Full Stack Developer',
      appliedDate: '2025-01-07',
      status: 'Shortlisted',
    },
  ];

  const upcomingMentorship = [
    {
      id: '1',
      studentName: 'David Lee',
      topic: 'Career Guidance in Tech',
      scheduledTime: '2025-01-10 15:00',
      duration: '1 hour',
    },
    {
      id: '2',
      studentName: 'Alex Kumar',
      topic: 'React Best Practices',
      scheduledTime: '2025-01-12 14:00',
      duration: '45 mins',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, Alumni!
              </h1>
              <p className="text-muted-foreground">
                Your contributions are making a real impact on students' careers
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <ContributionBadge points={alumniStats.contributionScore} size="lg" />
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Students Helped"
            value={alumniStats.studentsHelped}
            description="Direct mentorship & guidance"
            icon={Users}
            trend={{ value: 15, label: 'this month', isPositive: true }}
          />
          <StatsCard
            title="Jobs Posted"
            value={alumniStats.jobsPosted}
            description="Opportunities created"
            icon={Briefcase}
            trend={{ value: 33, label: 'this month', isPositive: true }}
          />
          <StatsCard
            title="Events Organized"
            value={alumniStats.eventsOrganized}
            description="Knowledge sharing sessions"
            icon={Calendar}
            trend={{ value: 100, label: 'this month', isPositive: true }}
          />
          <StatsCard
            title="Contribution Score"
            value={alumniStats.contributionScore}
            description="Gold level contributor"
            icon={Trophy}
            gradient
          />
        </div>

        {/* Quick Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link to="/alumni/students-directory">
            <Card className="shadow-soft hover:shadow-medium transition-all cursor-pointer h-full bg-gradient-card">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Students Directory</h3>
                <p className="text-sm text-muted-foreground">Browse talented students</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/alumni/post-job">
            <Card className="shadow-soft hover:shadow-medium transition-all cursor-pointer h-full bg-gradient-card">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Post Job</h3>
                <p className="text-sm text-muted-foreground">Create job openings</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/alumni/create-event">
            <Card className="shadow-soft hover:shadow-medium transition-all cursor-pointer h-full bg-gradient-card">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Create Event</h3>
                <p className="text-sm text-muted-foreground">Organize workshops</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/alumni/mentorship">
            <Card className="shadow-soft hover:shadow-medium transition-all cursor-pointer h-full bg-gradient-card">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-warning" />
                </div>
                <h3 className="font-semibold mb-2">Mentorship</h3>
                <p className="text-sm text-muted-foreground">Offer guidance</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/alumni/fundraising">
            <Card className="shadow-soft hover:shadow-medium transition-all cursor-pointer h-full bg-gradient-card">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Fundraising</h3>
                <p className="text-sm text-muted-foreground">Support your institute</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/alumni/applications">
            <Card className="shadow-soft hover:shadow-medium transition-all cursor-pointer h-full bg-gradient-card">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Applications</h3>
                <p className="text-sm text-muted-foreground">Review applicants</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/profile/edit">
            <Card className="shadow-soft hover:shadow-medium transition-all cursor-pointer h-full bg-gradient-card">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <User className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Edit Profile</h3>
                <p className="text-sm text-muted-foreground">Update your details</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/premium">
            <Card className="shadow-soft hover:shadow-medium transition-all cursor-pointer h-full bg-gradient-primary text-white">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Go Premium</h3>
                <p className="text-sm opacity-90">Unlock features</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Student Skills Directory */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5" />
                    <span>Talented Students Looking for Opportunities</span>
                  </CardTitle>
                  <CardDescription>
                    Browse students by skills and connect with potential candidates
                  </CardDescription>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/alumni/students-directory">
                    View All <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockStudents.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 rounded-lg border bg-gradient-card hover:shadow-medium transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-accent flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-foreground">{student.name}</h3>
                          <Badge variant="secondary" className="text-xs">
                            GPA {student.gpa}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {student.projects} projects
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {student.year} • {student.department}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs bg-success/10 text-success">
                            Looking for: {student.lookingFor}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {student.skills.slice(0, 4).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {student.skills.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{student.skills.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                      <Button size="sm" variant="success">
                        Invite to Project
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Activity */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="hero" asChild>
                  <Link to="/alumni/post-job">
                    <Plus className="mr-2 h-4 w-4" />
                    Post New Job
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="accent" asChild>
                  <Link to="/alumni/create-event">
                    <Calendar className="mr-2 h-4 w-4" />
                    Organize Event
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/alumni/mentorship">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Offer Mentorship
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5" />
                  <span>Recent Applications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentApplications.map((application) => (
                  <div key={application.id} className="p-3 rounded-lg border bg-muted/30">
                    <h4 className="font-medium text-sm">{application.studentName}</h4>
                    <p className="text-xs text-muted-foreground">{application.position}</p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge 
                        variant={application.status === 'Shortlisted' ? 'default' : 'secondary'} 
                        className="text-xs"
                      >
                        {application.status}
                      </Badge>
                      <Button size="sm" variant="ghost" className="text-xs">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/alumni/applications">View All Applications</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Mentorship */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Upcoming Sessions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingMentorship.map((session) => (
                  <div key={session.id} className="p-3 rounded-lg border bg-muted/30">
                    <h4 className="font-medium text-sm">{session.topic}</h4>
                    <p className="text-xs text-muted-foreground">with {session.studentName}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">
                        {session.duration}
                      </span>
                      <Button size="sm" variant="ghost" className="text-xs">
                        Join
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/alumni/mentorship">Manage Sessions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};