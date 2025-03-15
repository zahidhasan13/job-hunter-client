import React from 'react';
import { 
  Bell, 
  MessageCircle, 
  Zap, 
  Clock 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileAppPromotion = () => {
  const features = [
    {
      icon: <Bell className="h-6 w-6 text-blue-500" />,
      title: "Real-time Notifications",
      description: "Get instant alerts when new jobs match your profile"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-500" />,
      title: "Chat with Recruiters",
      description: "Direct messaging with potential employers"
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "One-Tap Apply",
      description: "Apply to jobs with a single tap"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Interview Scheduler",
      description: "Manage your interview calendar on the go"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* App Info */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Take Your Job Search Mobile</h2>
            <p className="text-lg mb-6">
              Download our app and never miss an opportunity. Search, apply, and interview for jobs on the go with our feature-rich mobile application.
            </p>
            
            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-blue-100 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2 h-12 px-6">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 13.5C17.5 13.5 19.95 12.1 20 12C20.05 11.9 18.3 11.07 17.5 10.5V13.5Z" />
                  <path d="M15.9 14.8C15.24 14.41 14.57 14.02 13.92 13.62C13.26 13.22 12.62 12.82 12 12.43V17.5C12.3 17.5 12.57 17.45 12.93 17.31C13.29 17.17 15.63 15.91 15.9 15.78V14.8Z" />
                  <path d="M8.5 17.5C9.11 17.5 9.74 17.1 10.42 16.71C11.1 16.32 11.5 16 12 16V12C11.5 12.34 11.02 12.65 10.5 13C9.5 13.69 8.5 14.04 8.5 14.71V17.5Z" />
                  <path d="M8.5 14.5C8.5 14.5 6.13 13.17 6 13C5.87 12.83 8.5 11.5 8.5 11.5V14.5Z" />
                </svg>
                <span>
                  <span className="text-xs block">Download on the</span>
                  <span className="text-xl leading-none">App Store</span>
                </span>
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2 h-12 px-6">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" />
                  <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" />
                  <path d="M16.81 8.88L14.54 11.15L6.05 2.66L16.81 8.88Z" />
                  <path d="M19.69 9.97L17.07 11.26L14.54 8.73L16.81 6.46L19.69 9.97Z" />
                  <path d="M19.69 14.03L16.81 17.54L14.54 15.27L17.07 12.74L19.69 14.03Z" />
                </svg>
                <span>
                  <span className="text-xs block">GET IT ON</span>
                  <span className="text-xl leading-none">Google Play</span>
                </span>
              </Button>
            </div>
          </div>
          
          {/* App Screenshots */}
          <div className="md:w-1/2 relative">
            <div className="relative h-96 w-full">
              {/* Phone mockup container */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-64 h-full">
                <div className="bg-gray-800 rounded-3xl h-full w-full relative overflow-hidden border-8 border-gray-800">
                  {/* Phone screen - using placeholder for actual screenshot */}
                  <div className="h-full w-full bg-white rounded-2xl overflow-hidden">
                    <img src="appImage2.png" alt="App Screenshot" className="object-cover w-full h-full" />
                  </div>
                  {/* Home button */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gray-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Second phone mockup (partially visible) */}
              <div className="absolute left-1/4 transform -translate-x-1/2 w-56 h-5/6 top-8">
                <div className="bg-gray-800 rounded-3xl h-full w-full relative overflow-hidden border-8 border-gray-800 rotate-12">
                  {/* Phone screen - using placeholder for actual screenshot */}
                  <div className="h-full w-full bg-white rounded-2xl overflow-hidden">
                    <img src="appImage.png" alt="App Screenshot" className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppPromotion;