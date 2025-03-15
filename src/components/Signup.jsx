import { useForm } from 'react-hook-form';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
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
  User, 
  Github,
  Linkedin,
  Eye,
  EyeOff,
  Loader2
} from 'lucide-react';
import { useState } from 'react';
import useSignup from '@/hooks/useSignup';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Signup = () => {
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const { signup, signupError, loading } = useSignup();

  // Initialize react-hook-form
  const signUpForm = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      role: 'jobSeeker', // Default role
      terms: false,
    }
  });

  // Form submit handler
  const onSignUpSubmit = async(data) => {
    const { fullName, email, password, role } = data;
    await signup(fullName, email, password, role);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information to get started
        </CardDescription>
      </CardHeader>
      <Form {...signUpForm}>
        <form onSubmit={signUpForm.handleSubmit(onSignUpSubmit)}>
          <CardContent className="space-y-4">
            <div className="">
              {/* First Name Field */}
              <FormField
                control={signUpForm.control}
                name="fullName"
                rules={{ required: "Full Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <FormControl>
                        <Input placeholder="John" className="pl-10" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email Field */}
            <FormField
              control={signUpForm.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
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
              control={signUpForm.control}
              name="password"
              rules={{ 
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <FormControl>
                      <Input 
                        placeholder="••••••••" 
                        className="pl-10 pr-10" 
                        type={showSignUpPassword ? "text" : "password"} 
                        {...field} 
                      />
                    </FormControl>
                    <button 
                      type="button"
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                      onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                    >
                      {showSignUpPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Role Selection */}
            <FormField
              control={signUpForm.control}
              name="role"
              rules={{ required: "Please select a role" }}
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>I am a</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-x-2"
                    >
                      <div className="flex items-center space-x-2 w-1/2">
                        <RadioGroupItem value="jobSeeker" id="jobSeeker" className="border-slate-300" />
                        <Label htmlFor="jobSeeker" className="cursor-pointer font-normal">Job Seeker</Label>
                      </div>
                      <div className="flex items-center space-x-2 w-1/2">
                        <RadioGroupItem value="recruiter" id="recruiter" className="border-slate-300" />
                        <Label htmlFor="recruiter" className="cursor-pointer font-normal">Recruiter</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Terms and Conditions */}
            <FormField
              control={signUpForm.control}
              name="terms"
              rules={{ required: "You must accept the terms and conditions" }}
              render={({ field }) => (
                <div>
                  <FormItem className="flex flex-row items-start space-x-3">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    I agree to the <a href="#" className="text-blue-600 hover:text-blue-800">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
                  </FormLabel>
                </FormItem>
                  <FormMessage className="ml-8 mt-3"/>
                </div>
              )}
            />
          </CardContent>

          <CardFooter className="flex flex-col mt-2">
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </Button>

            {/* Error message display */}
            {signupError && (
              <div className="mt-3 text-sm text-red-600 w-full text-center">
                {signupError}
              </div>
            )}

            <div className="mt-6 space-y-4 w-full">
              <Separator />
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

export default Signup;