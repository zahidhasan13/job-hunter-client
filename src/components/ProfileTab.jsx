import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Separator } from "@/components/ui/separator";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Textarea } from "@/components/ui/textarea";
  import { Badge } from "@/components/ui/badge";
  import { Plus } from "lucide-react";
  
  const ProfileTab = ({ userType = "jobseeker" }) => {
    const isJobSeeker = userType === "jobseeker";
  
    return (
      <div className="space-y-6">
        {/* Profile Information */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Update your {isJobSeeker ? "job seeker" : "recruiter"} profile
              details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter your location" />
              </div>
            </div>
  
            <div>
              <Label htmlFor="about">About</Label>
              <Textarea
                id="about"
                placeholder={
                  isJobSeeker
                    ? "Tell us about your skills and experience"
                    : "Tell us about your company"
                }
                className="min-h-32"
              />
            </div>
  
            {isJobSeeker && (
              <>
                <Separator />
                <div>
                  <Label>Skills</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">TailwindCSS</Badge>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Plus className="h-4 w-4" /> Add Skill
                    </Button>
                  </div>
                </div>
              </>
            )}
  
            <Separator />
  
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
  
        {/* Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>
              Set your {isJobSeeker ? "job" : "recruitment"} preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {isJobSeeker ? (
              <>
                <div>
                  <Label>Job Types</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">Full-time</Badge>
                    <Badge variant="secondary">Part-time</Badge>
                    <Badge variant="secondary">Remote</Badge>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Plus className="h-4 w-4" /> Add Job Type
                    </Button>
                  </div>
                </div>
                <div>
                  <Label>Preferred Locations</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">San Francisco, CA</Badge>
                    <Badge variant="secondary">New York, NY</Badge>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Plus className="h-4 w-4" /> Add Location
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Label>Recruitment Preferences</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">Tech</Badge>
                    <Badge variant="secondary">Marketing</Badge>
                    <Badge variant="secondary">Design</Badge>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Plus className="h-4 w-4" /> Add Preference
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default ProfileTab;