import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TopCompanies = () => {
  // Mock data - replace with actual API data
  const companies = [
    {
      id: 1,
      name: 'TechCorp',
      logo: '/api/placeholder/64/64',
      industry: 'Technology',
      jobs: 45,
      location: 'New York, NY',
      featuredJob: 'Senior Frontend Developer'
    },
    {
      id: 2,
      name: 'BrandGrowth',
      logo: '/api/placeholder/64/64',
      industry: 'Marketing',
      jobs: 32,
      location: 'Chicago, IL',
      featuredJob: 'Digital Marketing Specialist'
    },
    {
      id: 3,
      name: 'Global Finance',
      logo: '/api/placeholder/64/64',
      industry: 'Finance',
      jobs: 28,
      location: 'Boston, MA',
      featuredJob: 'Financial Analyst'
    },
    {
      id: 4,
      name: 'CreativeStudio',
      logo: '/api/placeholder/64/64',
      industry: 'Design',
      jobs: 19,
      location: 'San Francisco, CA',
      featuredJob: 'UX/UI Designer'
    },
    {
      id: 5,
      name: 'CloudSystems',
      logo: '/api/placeholder/64/64',
      industry: 'Technology',
      jobs: 36,
      location: 'Seattle, WA',
      featuredJob: 'DevOps Engineer'
    },
    {
      id: 6,
      name: 'ServiceFirst',
      logo: '/api/placeholder/64/64',
      industry: 'Customer Service',
      jobs: 23,
      location: 'Austin, TX',
      featuredJob: 'Customer Success Manager'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Companies Hiring</h2>
            <p className="text-gray-600">Explore opportunities with leading employers</p>
          </div>
          <Link to="/companies">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Companies
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Link key={company.id} to={`/companies/${company.id}`}>
              <Card className="transition-all hover:shadow-md h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img src={company.logo} alt={company.name} className="w-16 h-16 rounded-md mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{company.name}</h3>
                      <p className="text-sm text-gray-500">{company.industry}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span>{company.jobs} open positions</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>{company.location}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      <span>Featured: {company.featuredJob}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;