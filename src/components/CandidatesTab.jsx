import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  import { User, Mail, Phone, Eye, CheckCircle, XCircle } from "lucide-react";
  
  const CandidatesTab = () => {
    // Mock data for candidates
    const candidates = [
      {
        id: 1,
        name: "Alex Johnson",
        appliedJob: "Senior Frontend Developer",
        status: "pending", // pending, accepted, rejected
        email: "alex.johnson@example.com",
        phone: "+1 (555) 123-4567",
      },
      {
        id: 2,
        name: "Maria Garcia",
        appliedJob: "UI/UX Designer",
        status: "accepted",
        email: "maria.garcia@example.com",
        phone: "+1 (555) 987-6543",
      },
      {
        id: 3,
        name: "John Doe",
        appliedJob: "Backend Developer",
        status: "rejected",
        email: "john.doe@example.com",
        phone: "+1 (555) 456-7890",
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
          <CardTitle>Candidates</CardTitle>
          <CardDescription>
            View and manage candidates who have applied to your job postings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {candidates.map((candidate) => {
            const statusBadge = getStatusBadge(candidate.status);
            return (
              <div
                key={candidate.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <h4 className="font-medium">{candidate.name}</h4>
                  <p className="text-sm text-slate-500">
                    Applied for: {candidate.appliedJob}
                  </p>
                  <div className="flex items-center text-sm text-slate-500">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{candidate.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{candidate.phone}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <Badge variant="outline" className={statusBadge.color}>
                    {statusBadge.icon}
                    {candidate.status.charAt(0).toUpperCase() +
                      candidate.status.slice(1)}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" /> View Profile
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4 mr-2" /> Contact
                  </Button>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    );
  };
  
  export default CandidatesTab;