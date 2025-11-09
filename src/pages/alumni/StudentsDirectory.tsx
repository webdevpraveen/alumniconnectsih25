import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  User, 
  Search, 
  MapPin, 
  Briefcase, 
  Code, 
  Github, 
  Linkedin,
  ExternalLink,
  Star,
  Calendar,
  GraduationCap
} from 'lucide-react';
import { seedStudents } from '@/data/seedData';
import { useState } from 'react';

export const StudentsDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredStudents = seedStudents.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Students Directory
              </h1>
              <p className="text-muted-foreground">
                Browse talented students and find the perfect match for your opportunities
              </p>
            </div>
            <Badge className="bg-gradient-primary text-white px-4 py-2">
              {filteredStudents.length} Students
            </Badge>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, skills, or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStudents.map((student) => (
            <Card key={student.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{student.name}</CardTitle>
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <GraduationCap className="h-4 w-4 mr-1" />
                          {student.year} • {student.department}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          {student.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-1">
                      GPA {student.gpa}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-3 w-3 mr-1 text-warning" />
                      {student.contributionPoints} pts
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Looking For */}
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium">Looking for:</span>
                  <Badge variant="outline" className="bg-success/10 text-success">
                    {student.lookingFor}
                  </Badge>
                </div>

                {/* Skills */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Code className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Skills:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {student.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                {student.projects.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Code className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium">Projects ({student.projects.length}):</span>
                    </div>
                    <div className="space-y-2">
                      {student.projects.map((project, index) => (
                        <div key={index} className="text-sm p-2 rounded bg-muted/30">
                          <div className="font-medium">{project.name}</div>
                          <div className="text-xs text-muted-foreground">{project.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Events Attended */}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Attended {student.eventsAttended} events</span>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-2">
                  {student.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={`https://${student.githubUrl}`} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {student.linkedinUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={`https://${student.linkedinUrl}`} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-1" />
                        LinkedIn
                      </a>
                    </Button>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" className="flex-1" size="sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Profile
                  </Button>
                  <Button variant="default" className="flex-1" size="sm">
                    Invite to Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No students found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  );
};
