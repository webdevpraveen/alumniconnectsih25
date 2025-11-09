import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  User, 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap,
  Code,
  FileText,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { seedStudents } from '@/data/seedData';
import { useState } from 'react';

export const StudentsDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = seedStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Students Directory
          </h1>
          <p className="text-muted-foreground">
            Manage and view all registered students
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name or skills..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Students List */}
        <div className="grid grid-cols-1 gap-6">
          {filteredStudents.map((student) => (
            <Card key={student.id} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile Section */}
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{student.name}</h3>
                        <Badge variant="secondary">{student.year}</Badge>
                        {student.contributionPoints >= 100 && (
                          <Badge className="bg-gradient-primary text-white">
                            Top Performer
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-3">{student.department}</p>
                      
                      {/* Contact Info */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>{student.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{student.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="flex-1 space-y-4">
                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {student.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Projects
                      </h4>
                      <div className="space-y-2">
                        {student.projects.slice(0, 2).map((project, idx) => (
                          <div key={idx} className="text-sm p-2 rounded bg-muted/30">
                            <p className="font-medium">{project.name}</p>
                            <p className="text-xs text-muted-foreground">{project.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4">
                      <div className="text-center p-2 rounded bg-muted/30">
                        <p className="text-2xl font-bold text-primary">{student.gpa}</p>
                        <p className="text-xs text-muted-foreground">GPA</p>
                      </div>
                      <div className="text-center p-2 rounded bg-muted/30">
                        <p className="text-2xl font-bold text-accent">{student.projects.length}</p>
                        <p className="text-xs text-muted-foreground">Projects</p>
                      </div>
                      <div className="text-center p-2 rounded bg-muted/30">
                        <p className="text-2xl font-bold text-success">{student.contributionPoints}</p>
                        <p className="text-xs text-muted-foreground">Points</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 md:items-end">
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Full Profile
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    <Button size="sm" variant="destructive">
                      Suspend Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <Card className="shadow-soft">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No students found matching your search.</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};