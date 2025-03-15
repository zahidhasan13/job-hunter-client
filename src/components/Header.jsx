import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import useAuthContext from '@/hooks/useAuthContext';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Header = () => {
  const {user} = useAuthContext();
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <svg 
              className="h-8 w-8 text-blue-600" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12h-6.5" />
              <path d="M13 15l3-3-3-3" />
            </svg>
            <span className="ml-2 text-xl font-bold text-gray-900">JobHunter</span>
          </Link>
        </div>

        {/* Middle - Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/jobs" className="text-gray-600 hover:text-blue-600 font-medium">Find Jobs</Link>
          <Link to="/companies" className="text-gray-600 hover:text-blue-600 font-medium">Companies</Link>
          <Link to="/resources" className="text-gray-600 hover:text-blue-600 font-medium">Resources</Link>
          <Link to="/post-job" className="text-gray-600 hover:text-blue-600 font-medium">Post a Job</Link>
        </nav>

        {/* Right side - Auth buttons */}
        <div className="flex items-center space-x-4">
          {user ? (
             <Popover>
             <PopoverTrigger asChild>
               <Avatar className="cursor-pointer">
                 <AvatarImage src={user?.avatarUrl || "https://via.placeholder.com/150"} alt="User Avatar" />
                 <AvatarFallback>
                   {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                 </AvatarFallback>
               </Avatar>
             </PopoverTrigger>
             <PopoverContent className="w-60">
               <div className="grid gap-2">
                 <Link to="/profile" className="hover:bg-gray-100 p-2 rounded">
                   Profile
                 </Link>
                 <Button variant="outline">
                   Logout
                 </Button>
               </div>
             </PopoverContent>
           </Popover>
          ) : (
            <Link to="/auth">
              <Button variant="outline" className="hidden sm:inline-flex cursor-pointer">
                Sign In / Sign Up
              </Button>
            </Link>
          )}
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <svg 
                className="h-6 w-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;