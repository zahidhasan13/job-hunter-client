import React from 'react';
import { 
  UserPlus,        // Create Profile
  Search,          // Search Jobs
  Send,            // Apply Easily
  Handshake        // Get Hired (corrected from HandshakeIcon)
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <UserPlus className="h-12 w-12" />,
      title: 'Create Your Profile',
      description: 'Sign up and build your professional profile to showcase your skills and experience.'
    },
    {
      id: 2,
      icon: <Search className="h-12 w-12" />,
      title: 'Search Jobs',
      description: 'Browse through thousands of job listings tailored to your preferences.'
    },
    {
      id: 3,
      icon: <Send className="h-12 w-12" />,
      title: 'Apply Easily',
      description: 'Submit your application with just a few clicks and track your progress.'
    },
    {
      id: 4,
      icon: <Handshake className="h-12 w-12" />,
      title: 'Get Hired',
      description: 'Connect with employers and land your dream job.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600">Simple steps to find your next job opportunity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="flex justify-center items-center mb-6">
                <div className="bg-blue-50 rounded-full p-4 text-blue-600">
                  {step.icon}
                </div>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;