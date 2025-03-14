import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company section */}
          <div className="space-y-4">
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
              <span className="ml-2 text-xl font-bold text-white">JobPortal</span>
            </Link>
            <p className="text-gray-400">
              Connecting talented professionals with their dream careers.
            </p>
            <div className="flex space-x-4">
              <Link to="/social/twitter" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link to="/social/linkedin" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
                </svg>
              </Link>
              <Link to="/social/youtube" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs/browse" className="text-gray-400 hover:text-white">Browse Jobs</Link></li>
              <li><Link to="/resume/create" className="text-gray-400 hover:text-white">Create Resume</Link></li>
              <li><Link to="/jobs/alerts" className="text-gray-400 hover:text-white">Job Alerts</Link></li>
              <li><Link to="/resources/career" className="text-gray-400 hover:text-white">Career Resources</Link></li>
              <li><Link to="/tools/salary" className="text-gray-400 hover:text-white">Salary Calculator</Link></li>
            </ul>
          </div>
          
          {/* Additional links */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><Link to="/employer/post-job" className="text-gray-400 hover:text-white">Post a Job</Link></li>
              <li><Link to="/employer/search-resumes" className="text-gray-400 hover:text-white">Search Resumes</Link></li>
              <li><Link to="/employer/solutions" className="text-gray-400 hover:text-white">Recruiting Solutions</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing Plans</Link></li>
              <li><Link to="/employer/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest job opportunities and career advice.</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-gray-300"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} JobPortal. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;