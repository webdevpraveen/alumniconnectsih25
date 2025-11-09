export type UserRole = 'admin' | 'alumni' | 'student';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  isActive: boolean;
  createdAt: Date;
  lastLogin?: Date;
}

export interface Alumni extends User {
  role: 'alumni';
  profile: AlumniProfile;
  contributionScore: number;
}

export interface Student extends User {
  role: 'student';
  profile: StudentProfile;
  achievementPoints: number;
}

export interface AlumniProfile {
  graduationYear: number;
  degree: string;
  department: string;
  currentCompany?: string;
  currentPosition?: string;
  industry?: string;
  location?: string;
  bio?: string;
  expertise: string[];
  achievements: string[];
  isStartupFounder: boolean;
  linkedinUrl?: string;
  websiteUrl?: string;
}

export interface StudentProfile {
  currentYear: number;
  degree: string;
  department: string;
  gpa?: number;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  resumeUrl?: string;
  portfolioUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  startDate: Date;
  endDate?: Date;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  isCurrentRole: boolean;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: string[];
  location: string;
  type: 'full-time' | 'part-time' | 'internship' | 'contract';
  salaryRange?: string;
  postedBy: string; // Alumni ID
  postedAt: Date;
  deadline: Date;
  isActive: boolean;
  applicants: string[]; // Student IDs
}

export interface Event {
  id: string;
  title: string;
  description: string;
  type: 'workshop' | 'seminar' | 'networking' | 'mentorship' | 'startup-pitch';
  date: Date;
  location: string;
  isVirtual: boolean;
  meetingLink?: string;
  organizer: string; // Alumni or Admin ID
  maxAttendees?: number;
  attendees: string[];
  isActive: boolean;
}

export interface Contribution {
  id: string;
  type: 'job-posted' | 'event-organized' | 'mentorship-session' | 'project-collaboration' | 'student-helped';
  points: number;
  description: string;
  date: Date;
  userId: string;
  relatedEntityId?: string;
}