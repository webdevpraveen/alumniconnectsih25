import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LoginForm } from "@/components/auth/LoginForm";
import { StudentDashboard } from "@/pages/student/StudentDashboard";
import { AlumniDashboard } from "@/pages/alumni/AlumniDashboard";
import { AdminDashboard } from "@/pages/admin/AdminDashboard";
import { AlumniDirectory } from "@/pages/student/AlumniDirectory";
import { FundraisingHub } from "@/pages/alumni/FundraisingHub";
import { PremiumUpgrade } from "@/pages/PremiumUpgrade";
import { ComingSoon } from "@/pages/ComingSoon";
import { StudentsDirectory as AdminStudentsDirectory } from "@/pages/admin/StudentsDirectory";
import { StudentsDirectory } from "@/pages/alumni/StudentsDirectory";
import { AnalyticsPage } from "@/pages/admin/AnalyticsPage";
import { ProfileEdit } from "@/pages/ProfileEdit";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginForm />} />
            
            {/* Protected Student Routes */}
            <Route path="/student/dashboard" element={
              <ProtectedRoute allowedRoles={['student']}>
                <StudentDashboard />
              </ProtectedRoute>
            } />
            <Route path="/student/alumni-directory" element={
              <ProtectedRoute allowedRoles={['student']}>
                <AlumniDirectory />
              </ProtectedRoute>
            } />
            <Route path="/student/jobs" element={
              <ProtectedRoute allowedRoles={['student']}>
                <ComingSoon pageName="Job Board" />
              </ProtectedRoute>
            } />
            <Route path="/student/events" element={
              <ProtectedRoute allowedRoles={['student']}>
                <ComingSoon pageName="Events" />
              </ProtectedRoute>
            } />
            
            {/* Protected Alumni Routes */}
            <Route path="/alumni/dashboard" element={
              <ProtectedRoute allowedRoles={['alumni']}>
                <AlumniDashboard />
              </ProtectedRoute>
            } />
            <Route path="/alumni/fundraising" element={
              <ProtectedRoute allowedRoles={['alumni']}>
                <FundraisingHub />
              </ProtectedRoute>
            } />
            <Route path="/alumni/students-directory" element={
              <ProtectedRoute allowedRoles={['alumni']}>
                <StudentsDirectory />
              </ProtectedRoute>
            } />
            <Route path="/alumni/post-job" element={
              <ProtectedRoute allowedRoles={['alumni']}>
                <ComingSoon pageName="Post Job" />
              </ProtectedRoute>
            } />
            <Route path="/alumni/create-event" element={
              <ProtectedRoute allowedRoles={['alumni']}>
                <ComingSoon pageName="Create Event" />
              </ProtectedRoute>
            } />
            <Route path="/alumni/mentorship" element={
              <ProtectedRoute allowedRoles={['alumni']}>
                <ComingSoon pageName="Mentorship" />
              </ProtectedRoute>
            } />
            <Route path="/alumni/applications" element={
              <ProtectedRoute allowedRoles={['alumni']}>
                <ComingSoon pageName="Applications" />
              </ProtectedRoute>
            } />
            
            {/* Protected Admin Routes */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/users" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminStudentsDirectory />
              </ProtectedRoute>
            } />
            <Route path="/admin/approvals" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ComingSoon pageName="Approvals" />
              </ProtectedRoute>
            } />
            <Route path="/admin/analytics" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AnalyticsPage />
              </ProtectedRoute>
            } />
            <Route path="/admin/notifications" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ComingSoon pageName="Notifications" />
              </ProtectedRoute>
            } />
            <Route path="/admin/leaderboard" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ComingSoon pageName="Leaderboard" />
              </ProtectedRoute>
            } />
            
            {/* Premium & Public Routes */}
            <Route path="/premium" element={<PremiumUpgrade />} />
            <Route path="/about" element={<ComingSoon pageName="About Us" />} />
            
            {/* Profile Edit - Available to all authenticated users */}
            <Route path="/profile/edit" element={
              <ProtectedRoute allowedRoles={['student', 'alumni', 'admin']}>
                <ProfileEdit />
              </ProtectedRoute>
            } />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
