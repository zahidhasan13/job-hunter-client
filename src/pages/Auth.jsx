import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Login from '@/components/Login';
import Signup from '@/components/Signup';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('signin');

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md p-6">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-slate-800">
            <Link to="/" className="flex items-center">
              <svg 
                className="h-8 w-8 text-blue-500" 
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
              <span className="ml-2 text-xl font-bold">JobHunter</span>
            </Link>
            </h1>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 w-full mb-6">
            <TabsTrigger value="signin" className="cursor-pointer">Sign In</TabsTrigger>
            <TabsTrigger value="signup" className="cursor-pointer">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin">
          <Login/>
          </TabsContent>
          
          <TabsContent value="signup">
            
            <Signup/>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;