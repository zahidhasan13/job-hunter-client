import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Label } from "@/components/ui/label";
  import { Trash2 } from "lucide-react";
  
  const ResumeTab = () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Resume</CardTitle>
          <CardDescription>
            Upload and manage your resume for job applications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Upload Resume</Label>
            <div className="mt-2 border-2 border-dashed rounded-lg p-6 text-center">
              <p className="text-sm text-slate-500">
                Drag and drop your resume here or{" "}
                <Button variant="link" className="p-0 h-auto">
                  browse files
                </Button>
              </p>
            </div>
          </div>
          <div>
            <Label>Current Resume</Label>
            <div className="mt-2 flex items-center justify-between p-4 border rounded-lg">
              <p className="text-sm">resume.pdf</p>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };
  
  export default ResumeTab;