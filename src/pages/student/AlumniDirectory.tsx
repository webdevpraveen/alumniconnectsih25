import { Header } from '@/components/layout/Header';
import { ContributionBadge } from '@/components/common/ContributionBadge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  User,
  MapPin,
  TrendingUp,
  Zap,
  Building,
  Github,
  Linkedin,
  Book,
  FileText,
  GraduationCap,
  Search
} from 'lucide-react';
import { seedAlumni } from '@/data/seedData';
import { useState } from 'react';

export const AlumniDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('all');

  const filteredAlumni = seedAlumni.filter(alumni => 
    alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Alumni Directory
          </h1>
          <p className="text-muted-foreground">
            Connect with experienced alumni and explore their contributions
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Search by name, company, or skills..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="space-y-6" onValueChange={setSelectedTab}>
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="all">All Alumni</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
          </TabsList>

          {/* All Alumni Tab */}
          <TabsContent value="all" className="space-y-4">
            {filteredAlumni.map((alumni) => (
              <Card key={alumni.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-bold text-xl">{alumni.name}</h3>
                          <ContributionBadge points={alumni.contributionScore} size="sm" />
                          {alumni.isStartupFounder && (
                            <Badge variant="secondary" className="text-xs">
                              <Zap className="h-3 w-3 mr-1" />
                              Founder
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-2">
                          {alumni.position} at {alumni.company}
                        </p>
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{alumni.location}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-success">
                            <TrendingUp className="h-3 w-3" />
                            <span>Helped {alumni.studentsHelped} students</span>
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Building className="h-3 w-3" />
                            <span>{alumni.jobsPosted} jobs posted</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{alumni.bio}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {alumni.expertise.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center space-x-3">
                          {alumni.linkedinUrl && (
                            <a href={`https://${alumni.linkedinUrl}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                              <Linkedin className="h-4 w-4" />
                            </a>
                          )}
                          {alumni.githubUrl && (
                            <a href={`https://${alumni.githubUrl}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                      <Button size="sm" variant="accent">
                        Connect
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Books Tab */}
          <TabsContent value="books" className="space-y-4">
            {filteredAlumni.filter(a => a.books.length > 0).map((alumni) => (
              <Card key={alumni.id} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Book className="h-8 w-8 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold">{alumni.name}</h3>
                        <Badge variant="secondary" className="text-xs">Author</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{alumni.position} at {alumni.company}</p>
                      <div className="space-y-2">
                        {alumni.books.map((book, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Book className="h-4 w-4 text-accent" />
                            <span className="text-sm font-medium">{book}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {filteredAlumni.filter(a => a.books.length > 0).length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No books found
              </div>
            )}
          </TabsContent>

          {/* Articles Tab */}
          <TabsContent value="articles" className="space-y-4">
            {filteredAlumni.filter(a => a.articles.length > 0).map((alumni) => (
              <Card key={alumni.id} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <FileText className="h-8 w-8 text-accent flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold">{alumni.name}</h3>
                        <Badge variant="secondary" className="text-xs">Writer</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{alumni.position} at {alumni.company}</p>
                      <div className="space-y-2">
                        {alumni.articles.map((article, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-primary" />
                            <span className="text-sm">{article}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {filteredAlumni.filter(a => a.articles.length > 0).length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No articles found
              </div>
            )}
          </TabsContent>

          {/* Research Tab */}
          <TabsContent value="research" className="space-y-4">
            {filteredAlumni.filter(a => a.researchPapers.length > 0).map((alumni) => (
              <Card key={alumni.id} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="h-8 w-8 text-success flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold">{alumni.name}</h3>
                        <Badge variant="secondary" className="text-xs">Researcher</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{alumni.position} at {alumni.company}</p>
                      <div className="space-y-2">
                        {alumni.researchPapers.map((paper, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <GraduationCap className="h-4 w-4 text-success" />
                            <span className="text-sm">{paper}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {filteredAlumni.filter(a => a.researchPapers.length > 0).length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No research papers found
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};
