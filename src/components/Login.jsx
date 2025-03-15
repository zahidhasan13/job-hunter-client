import { useForm } from 'react-hook-form';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

import { 
  Input 
} from '@/components/ui/input';
import { 
  Button 
} from '@/components/ui/button';
import { 
  Label 
} from '@/components/ui/label';
import { 
  Checkbox 
} from '@/components/ui/checkbox';
import { 
  Separator 
} from '@/components/ui/separator';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { 
  AtSign, 
  Lock,
  Github,
  Linkedin,
  Eye,
  EyeOff,
  Loader2
} from 'lucide-react';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import useLogin from '@/hooks/useLogin';

const Login = () => {
  const {login, loginError, loading} = useLogin();
  const [showSignInPassword, setShowSignInPassword] = useState(false);

  // Initialize react-hook-form
  const signInForm = useForm({
    defaultValues: {
      email: "",
      password: "",
      role: "jobseeker", // Default role
      remember: false,
    },
  });

  // Handle form submission
  const onSignInSubmit = async(data) => {
    const {email, password, role} = data;
    await login(email, password, role);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>
          Sign in to your account to continue
        </CardDescription>
      </CardHeader>
      <Form {...signInForm}>
        <form onSubmit={signInForm.handleSubmit(onSignInSubmit)}>
          <CardContent className="space-y-4">
            {/* Email Field */}
            <FormField
              control={signInForm.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <FormControl>
                      <Input 
                        placeholder="name@example.com" 
                        className="pl-10" 
                        type="email"
                        {...field} 
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={signInForm.control}
              name="password"
              rules={{ 
                required: "Password is required" 
              }}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input 
                      placeholder="••••••••" 
                      className="pl-10 pr-10" 
                      type={showSignInPassword ? "text" : "password"} 
                      {...field} 
                    />
                    <button 
                      type="button"
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                      onClick={() => setShowSignInPassword(!showSignInPassword)}
                    >
                      {showSignInPassword ? 
                        <EyeOff className="h-4 w-4" /> : 
                        <Eye className="h-4 w-4" />
                      }
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Role Selection */}
            <FormField
              control={signInForm.control}
              name="role"
              rules={{ required: "Please select a role" }}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Sign in as a</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-2"
                    >
                      <div className="flex items-center space-x-2 w-1/2">
                        <RadioGroupItem value="jobseeker" id="loginJobSeeker" className="border-slate-300" />
                        <Label htmlFor="loginJobSeeker" className="cursor-pointer font-normal">Job Seeker</Label>
                      </div>
                      <div className="flex items-center space-x-2 w-1/2">
                        <RadioGroupItem value="recruiter" id="loginRecruiter" className="border-slate-300" />
                        <Label htmlFor="loginRecruiter" className="cursor-pointer font-normal">Recruiter</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Remember Me Checkbox */}
            <FormField
              control={signInForm.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Remember me</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </CardContent>

          {/* Footer with Submit Button and Social Login Options */}
          <CardFooter className="flex flex-col mt-2">
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
            
            {/* Error message display */}
            {loginError && (
              <div className="mt-3 text-sm text-red-600 w-full text-center">
                {loginError}
              </div>
            )}

            <div className="mt-6 space-y-4 w-full">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-500">Or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button type="button" variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                  Github
                </Button>
                <Button type="button" variant="outline" className="w-full">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default Login;