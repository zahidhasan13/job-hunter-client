import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  import { Edit, Trash2, Eye, Plus } from "lucide-react";
  
  const JobListingsTab = () => {
    // Mock data for job listings
    const jobListings = [
      {
        id: 1,
        title: "Senior Frontend Developer",
        location: "San Francisco, CA",
        status: "active", // active, closed
        postedDate: "2023-10-01",
        applications: 12,
      },
      {
        id: 2,
        title: "UI/UX Designer",
        location: "New York, NY",
        status: "closed",
        postedDate: "2023-09-25",
        applications: 8,
      },
      {
        id: 3,
        title: "Backend Developer",
        location: "Remote",
        status: "active",
        postedDate: "2023-09-20",
        applications: 15,
      },
    ];
  
    // Function to get status badge color
    const getStatusBadge = (status) => {
      switch (status) {
        case "active":
          return "bg-green-100 text-green-800";
        case "closed":
          return "bg-red-100 text-red-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };
  
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Job Listings</CardTitle>
              <CardDescription>
                Manage your job postings and view applications.
              </CardDescription>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" /> Create Job
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg"
            >
              <div className="space-y-1">
                <h4 className="font-medium">{job.title}</h4>
                <p className="text-sm text-slate-500">{job.location}</p>
                <div className="flex items-center text-sm text-slate-500">
                  <span>Posted on: {job.postedDate}</span>
                  <span className="mx-2">•</span>
                  <span>{job.applications} applications</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <Badge variant="outline" className={getStatusBadge(job.status)}>
                  {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </Badge>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4 mr-2" /> View
                </Button>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4 mr-2" /> Edit
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" /> Delete
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  };
  
  export default JobListingsTab;