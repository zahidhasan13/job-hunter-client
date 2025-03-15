import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  import { Trash2, Clock, CheckCircle, XCircle } from "lucide-react";
  
  const ApplicationsTab = () => {
    // Mock data for job applications
    const applications = [
      {
        id: 1,
        jobTitle: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        status: "pending", // pending, accepted, rejected
        appliedDate: "2023-10-01",
      },
      {
        id: 2,
        jobTitle: "UI/UX Designer",
        company: "Creative Agency",
        status: "accepted",
        appliedDate: "2023-09-25",
      },
      {
        id: 3,
        jobTitle: "Backend Developer",
        company: "Code Masters",
        status: "rejected",
        appliedDate: "2023-09-20",
      },
    ];
  
    // Function to get status badge color and icon
    const getStatusBadge = (status) => {
      switch (status) {
        case "pending":
          return {
            color: "bg-yellow-100 text-yellow-800",
            icon: <Clock className="h-4 w-4 mr-2" />,
          };
        case "accepted":
          return {
            color: "bg-green-100 text-green-800",
            icon: <CheckCircle className="h-4 w-4 mr-2" />,
          };
        case "rejected":
          return {
            color: "bg-red-100 text-red-800",
            icon: <XCircle className="h-4 w-4 mr-2" />,
          };
        default:
          return {
            color: "bg-gray-100 text-gray-800",
            icon: null,
          };
      }
    };
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Job Applications</CardTitle>
          <CardDescription>
            View and manage your job applications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {applications.map((application) => {
            const statusBadge = getStatusBadge(application.status);
            return (
              <div
                key={application.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <h4 className="font-medium">{application.jobTitle}</h4>
                  <p className="text-sm text-slate-500">{application.company}</p>
                  <div className="flex items-center text-sm text-slate-500">
                    <span>Applied on: {application.appliedDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <Badge variant="outline" className={statusBadge.color}>
                    {statusBadge.icon}
                    {application.status.charAt(0).toUpperCase() +
                      application.status.slice(1)}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4 mr-2" /> Withdraw
                  </Button>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    );
  };
  
  export default ApplicationsTab;