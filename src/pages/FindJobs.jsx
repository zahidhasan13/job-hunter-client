import React, { useState } from 'react';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Search, 
  MapPin, 
  Filter, 
  ChevronsUpDown
} from 'lucide-react';
import JobCard from '@/components/JobCard'; // Import the JobCard component

const FindJobs = () => {
  const [savedJobs, setSavedJobs] = useState({});
  const [filters, setFilters] = useState({
    jobType: [],
    experienceLevel: [],
    salaryRange: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5; // Number of jobs to display per page

  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      companyName: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      jobType: 'Full-time',
      postingDate: '2 days ago',
      salary: '100K - 150K',
      experienceLevel: "Senior Level",
      description: 'We are looking for an experienced Frontend Developer to join our team. The ideal candidate has strong React experience and a passion for creating exceptional user experiences.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      companyLogo: 'https://via.placeholder.com/150' // Example logo URL
    },
    {
      id: 2,
      title: 'Backend Engineer',
      companyName: 'DataFlow Systems',
      location: 'Remote',
      jobType: 'Contract',
      postingDate: '1 week ago',
      salary: '100K - 150K',
      experienceLevel: "Senior Level",
      description: 'Join our backend team to develop scalable APIs and microservices. You should be comfortable with cloud technologies and database optimization.',
      tags: ['Node.js', 'AWS', 'MongoDB'],
      companyLogo: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      companyName: 'Creative Minds',
      location: 'New York, NY',
      jobType: 'Full-time',
      postingDate: '3 days ago',
      salary: '70K - 100K',
      experienceLevel: "Mid Level",
      description: 'Design beautiful and intuitive user interfaces for our clients. Work closely with developers to ensure proper implementation of your designs.',
      tags: ['Figma', 'Adobe XD', 'User Research'],
      companyLogo: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      companyName: 'CloudTech Solutions',
      location: 'Chicago, IL',
      jobType: 'Full-time',
      postingDate: 'Today',
      salary: '100K - 150K',
      experienceLevel: "Senior Level",
      description: 'Improve our CI/CD pipeline and infrastructure. Experience with containerization and orchestration is a must for this position.',
      tags: ['Docker', 'Kubernetes', 'Jenkins'],
      companyLogo: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      title: 'Data Scientist',
      companyName: 'AnalyticsPro',
      location: 'Remote',
      jobType: 'Part-time',
      postingDate: '5 days ago',
      salary: '40K - 70K',
      experienceLevel: "Entry Level",
      description: 'Work on predictive models and data analysis. This is a part-time position perfect for experienced data scientists looking for flexibility.',
      tags: ['Python', 'Machine Learning', 'SQL'],
      companyLogo: 'https://via.placeholder.com/150'
    }
  ];

  // Filter options
  const jobTypeOptions = ['Full-time', 'Part-time', 'Contract', 'Remote'];
  const experienceLevelOptions = ['Entry Level', 'Mid Level', 'Senior Level'];
  const salaryRangeOptions = ['40K - 70K', '70K - 100K', '100K - 150K', '150K+'];

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value) // Remove if already selected
        : [...prev[filterType], value] // Add if not selected
    }));
    setCurrentPage(1); // Reset to the first page when filters change
  };

  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter(job => {
    const matchesJobType = filters.jobType.length === 0 || filters.jobType.includes(job.jobType);
    const matchesExperienceLevel = filters.experienceLevel.length === 0 || filters.experienceLevel.includes(job.experienceLevel);
    const matchesSalaryRange = filters.salaryRange.length === 0 || filters.salaryRange.includes(job.salary);
    return matchesJobType && matchesExperienceLevel && matchesSalaryRange;
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <div className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Your Dream Job</h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input 
                placeholder="Job title, skills, or keywords" 
                className="pl-10 py-6 text-slate-800" 
              />
            </div>
            <div className="relative md:w-1/4">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input 
                placeholder="Location or Remote" 
                className="pl-10 py-6 text-slate-800" 
              />
            </div>
            <Button className="py-6 px-8 bg-blue-800 hover:bg-blue-900">
              Search Jobs
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters */}
          <div className="lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="mr-2 h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Job Type Filters */}
                <div>
                  <h3 className="font-medium mb-3">Job Type</h3>
                  <div className="space-y-2">
                    {jobTypeOptions.map(option => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={option}
                          checked={filters.jobType.includes(option)}
                          onChange={() => handleFilterChange('jobType', option)}
                          className="mr-2"
                        />
                        <label htmlFor={option}>{option}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Experience Level Filters */}
                <div>
                  <h3 className="font-medium mb-3">Experience Level</h3>
                  <div className="space-y-2">
                    {experienceLevelOptions.map(option => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={option}
                          checked={filters.experienceLevel.includes(option)}
                          onChange={() => handleFilterChange('experienceLevel', option)}
                          className="mr-2"
                        />
                        <label htmlFor={option}>{option}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Salary Range Filters */}
                <div>
                  <h3 className="font-medium mb-3">Salary Range</h3>
                  <div className="space-y-2">
                    {salaryRangeOptions.map(option => (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          id={option}
                          checked={filters.salaryRange.includes(option)}
                          onChange={() => handleFilterChange('salaryRange', option)}
                          className="mr-2"
                        />
                        <label htmlFor={option}>{option}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <Button className="w-full" onClick={() => setFilters({ jobType: [], experienceLevel: [], salaryRange: [] })}>
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                {filteredJobs.length} Jobs Found
              </h2>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-slate-600">Sort by:</span>
                <Button variant="outline" className="flex items-center">
                  Most Relevant <ChevronsUpDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Render JobCard components */}
            <div className="space-y-4">
              {currentJobs.map(job => (
                <JobCard
                  key={job.id}
                  job={job}
                  isSaved={savedJobs[job.id] || false}
                  onSave={() => toggleSaveJob(job.id)}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <Button 
                variant="outline" 
                className="mx-1" 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  key={index + 1}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  className="mx-1"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
              <Button 
                variant="outline" 
                className="mx-1" 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;