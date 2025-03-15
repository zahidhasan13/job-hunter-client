import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProfileSidebar from '@/components/ProfileSidebar';
import ProfileTab from '@/components/ProfileTab';
import ResumeTab from '@/components/ResumeTab';
import ApplicationsTab from '@/components/ApplicationTab';
import JobListingsTab from '@/components/JobListingsTab';
import CandidatesTab from '@/components/CandidatesTab';
import SettingsTab from '@/components/SettingsTab';


const ProfilePage = ({ userType = "jobSeeker" }) => {
  const [profileCompletion, setProfileCompletion] = useState(75);
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Sidebar - Profile Summary */}
        <div className="lg:col-span-1">
          <ProfileSidebar userType={userType} profileCompletion={profileCompletion} />
        </div>
        
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              {userType === "jobSeeker" ? (
                <>
                  <TabsTrigger value="resume">Resume</TabsTrigger>
                  <TabsTrigger value="applications">Applications</TabsTrigger>
                </>
              ) : (
                <>
                  <TabsTrigger value="jobs">Job Listings</TabsTrigger>
                  <TabsTrigger value="candidates">Candidates</TabsTrigger>
                </>
              )}
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="mt-6">
              <ProfileTab userType={userType} />
            </TabsContent>
            
            {userType === "jobSeeker" ? (
              <>
                <TabsContent value="resume" className="mt-6">
                  <ResumeTab />
                </TabsContent>
                <TabsContent value="applications" className="mt-6">
                  <ApplicationsTab />
                </TabsContent>
              </>
            ) : (
              <>
                <TabsContent value="jobs" className="mt-6">
                  <JobListingsTab />
                </TabsContent>
                <TabsContent value="candidates" className="mt-6">
                  <CandidatesTab />
                </TabsContent>
              </>
            )}
            
            <TabsContent value="settings" className="mt-6">
              <SettingsTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;