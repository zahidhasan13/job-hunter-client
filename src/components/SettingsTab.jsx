import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Switch } from "@/components/ui/switch";
  import { Mail, Lock, Bell } from "lucide-react";
import { Separator } from "./ui/separator";
  
  const SettingsTab = ({ userType = "jobseeker" }) => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>
            Manage your account settings and preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Account Information */}
          <div>
            <h3 className="text-lg font-medium">Account Information</h3>
            <p className="text-sm text-slate-500">
              Update your account details and contact information.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="email"
                    placeholder="your.email@example.com"
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </div>
          </div>
  
          <Separator />
  
          {/* Security Settings */}
          <div>
            <h3 className="text-lg font-medium">Security</h3>
            <p className="text-sm text-slate-500">
              Enhance the security of your account.
            </p>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-slate-500">
                    Add an extra layer of security to your account.
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Label>Login Alerts</Label>
                  <p className="text-sm text-slate-500">
                    Get notified when someone logs into your account.
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
  
          <Separator />
  
          {/* Notification Settings */}
          <div>
            <h3 className="text-lg font-medium">Notifications</h3>
            <p className="text-sm text-slate-500">
              Manage your notification preferences.
            </p>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-slate-500">
                    Receive important updates via email.
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-slate-500">
                    Get real-time updates on your device.
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
  
          <Separator />
  
          {/* Additional Settings for Recruiters */}
          {userType === "recruiter" && (
            <div>
              <h3 className="text-lg font-medium">Recruiter Settings</h3>
              <p className="text-sm text-slate-500">
                Customize settings specific to recruiters.
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label>Job Posting Alerts</Label>
                    <p className="text-sm text-slate-500">
                      Get notified when candidates apply to your job postings.
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label>Candidate Matching</Label>
                    <p className="text-sm text-slate-500">
                      Receive suggestions for candidates matching your job postings.
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };
  
  export default SettingsTab;