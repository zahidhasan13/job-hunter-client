import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import { 
      Github,
      Globe,
      Linkedin,
      Mail,
    MapPin,
    Pencil,
    Phone,
    Twitter
  } from 'lucide-react';
  import { Progress } from "@/components/ui/progress"
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";


const ProfileSidebar = ({ userType, profileCompletion }) => {
    const profileData = userType === "jobSeeker" 
      ? {
          name: "Alex Johnson",
          title: "Senior Frontend Developer",
          location: "San Francisco, CA",
          email: "alex.johnson@example.com",
          phone: "(555) 123-4567",
          about: "Passionate frontend developer with 5+ years of experience creating responsive and user-friendly web applications."
        }
      : {
          name: "Sarah Williams",
          title: "HR Manager",
          company: "TechCorp Solutions",
          location: "Austin, TX",
          email: "s.williams@techcorp.com",
          phone: "(555) 987-6543",
          about: "Experienced HR professional focused on recruiting top talent in the tech industry."
        };
    
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src={userType === "jobSeeker" ? "/user-avatar.png" : "/recruiter-avatar.png"} />
              <AvatarFallback>{profileData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            
            <h2 className="mt-4 text-xl font-semibold">{profileData.name}</h2>
            <p className="text-slate-600">{profileData.title}</p>
            {userType === "recruiter" && <p className="text-slate-600">{profileData.company}</p>}
            
            <div className="flex items-center mt-2 text-slate-600">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{profileData.location}</span>
            </div>
            
            <div className="w-full mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Profile Completion</span>
                <span>{profileCompletion}%</span>
              </div>
              <Progress value={profileCompletion} className="h-2" />
            </div>
            
            <Button variant="outline" className="mt-4 w-full">
              <Pencil className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>
          
          <Separator className="my-4" />
          
          <div className="space-y-3">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-slate-500" />
              <span className="text-sm">{profileData.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-slate-500" />
              <span className="text-sm">{profileData.phone}</span>
            </div>
            {userType === "recruiter" && (
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2 text-slate-500" />
                <span className="text-sm">www.techcorp.com</span>
              </div>
            )}
          </div>
          
          <Separator className="my-4" />
          
          <div>
            <h3 className="font-medium mb-2">About</h3>
            <p className="text-sm text-slate-600">{profileData.about}</p>
          </div>
          
          <Separator className="my-4" />
          
          <div>
            <h3 className="font-medium mb-2">Social Profiles</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };
export default ProfileSidebar;  