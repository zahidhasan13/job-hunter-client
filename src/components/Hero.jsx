import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const Hero = () => {
  const navigate = useNavigate();
  
  const form = useForm({
    defaultValues: {
      searchQuery: '',
      location: '',
      category: '',
    },
  });

  const onSubmit = (data) => {
    navigate(`/jobs/search?query=${data.searchQuery}&location=${data.location}&category=${data.category}`);
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero content */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Connect with top employers and discover opportunities that match your skills and career goals.
          </p>
        </div>

        {/* Search form */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-4xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4">
              {/* Job title/keyword */}
              <FormField
                control={form.control}
                name="searchQuery"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Job Title or Keyword</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Software Engineer"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. New York, Remote"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Category */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Category</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="customer-service">Customer Service</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-end">
                <Button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                  Search Jobs
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">10,000+</p>
            <p className="text-blue-100">Active Jobs</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">5,000+</p>
            <p className="text-blue-100">Companies</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">15M+</p>
            <p className="text-blue-100">Job Seekers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">95%</p>
            <p className="text-blue-100">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;