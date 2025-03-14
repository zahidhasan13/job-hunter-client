import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JobCard from './JobCard';


const FeaturedJobs = () => {
    const [activeTab, setActiveTab] = useState('all');
    
    // Sample job data - in a real app, this would come from an API
    const jobs = [
      {
        id: 'job1',
        title: 'Senior React Developer',
        companyName: 'TechCorp Inc.',
        companyLogo: null,
        location: 'Remote',
        salary: '110K - 150K',
        jobType: 'Full-time',
        postingDate: '2 days ago',
        description: 'We are looking for an experienced React developer to join our team and help build cutting-edge web applications.',
        tags: ['React', 'TypeScript', 'Redux', 'Next.js'],
        category: 'tech'
      },
      {
        id: 'job2',
        title: 'Marketing Manager',
        companyName: 'Brand Solutions',
        companyLogo: null,
        location: 'New York, NY',
        salary: '85K - 110K',
        jobType: 'Full-time',
        postingDate: '1 day ago',
        description: 'Lead our marketing team and develop strategies to increase brand awareness and drive customer engagement.',
        tags: ['Marketing', 'SEO', 'Social Media', 'Analytics'],
        category: 'marketing'
      },
      {
        id: 'job3',
        title: 'UX/UI Designer',
        companyName: 'Creative Labs',
        companyLogo: null,
        location: 'San Francisco, CA',
        salary: '90K - 120K',
        jobType: 'Contract',
        postingDate: '3 days ago',
        description: 'Design intuitive and beautiful user interfaces for our flagship mobile application.',
        tags: ['UI Design', 'Figma', 'Prototyping', 'User Research'],
        category: 'design'
      },
      {
        id: 'job4',
        title: 'Data Scientist',
        companyName: 'DataMetrics',
        companyLogo: null,
        location: 'Chicago, IL',
        salary: '120K - 160K',
        jobType: 'Full-time',
        postingDate: 'Just now',
        description: 'Apply machine learning and statistical methods to solve complex business problems and extract insights from data.',
        tags: ['Python', 'Machine Learning', 'SQL', 'Data Visualization'],
        category: 'tech'
      },
      {
        id: 'job5',
        title: 'Financial Analyst',
        companyName: 'Global Finance',
        companyLogo: null,
        location: 'Boston, MA',
        salary: '75K - 95K',
        jobType: 'Part-time',
        postingDate: '1 week ago',
        description: 'Analyze financial data, prepare reports, and support strategic financial decision-making.',
        tags: ['Financial Reporting', 'Excel', 'Forecasting', 'Budgeting'],
        category: 'finance'
      },
      {
        id: 'job6',
        title: 'Sales Representative',
        companyName: 'Growth Partners',
        companyLogo: null,
        location: 'Austin, TX',
        salary: '60K + Commission',
        jobType: 'Full-time',
        postingDate: '3 days ago',
        description: 'Identify and pursue sales opportunities to meet and exceed targets while building strong client relationships.',
        tags: ['B2B Sales', 'CRM', 'Negotiation', 'Lead Generation'],
        category: 'sales'
      }
    ];
    
    const filteredJobs = activeTab === 'all' 
      ? jobs 
      : jobs.filter(job => job.category === activeTab);
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Jobs</h2>
            <p className="text-lg text-gray-600">Discover opportunities from top employers</p>
          </div>
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All Jobs</TabsTrigger>
                <TabsTrigger value="tech">Technology</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="sales">Sales</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tech" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="design" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="marketing" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="finance" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="sales" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-8">
            <Link to="/jobs/browse">
              <Button>Browse All Jobs</Button>
            </Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedJobs;