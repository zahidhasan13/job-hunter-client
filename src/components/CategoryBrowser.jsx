import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CategoryBrowser = () => {
  // Mock data - replace with actual API data
  const categories = [
    {
      id: 1,
      name: 'Technology',
      icon: '💻',
      jobs: 120,
      link: '/jobs?category=technology'
    },
    {
      id: 2,
      name: 'Marketing',
      icon: '📈',
      jobs: 85,
      link: '/jobs?category=marketing'
    },
    {
      id: 3,
      name: 'Finance',
      icon: '💰',
      jobs: 75,
      link: '/jobs?category=finance'
    },
    {
      id: 4,
      name: 'Design',
      icon: '🎨',
      jobs: 60,
      link: '/jobs?category=design'
    },
    {
      id: 5,
      name: 'Healthcare',
      icon: '🏥',
      jobs: 95,
      link: '/jobs?category=healthcare'
    },
    {
      id: 6,
      name: 'Education',
      icon: '📚',
      jobs: 50,
      link: '/jobs?category=education'
    },
    {
      id: 7,
      name: 'Customer Service',
      icon: '📞',
      jobs: 45,
      link: '/jobs?category=customer-service'
    },
    {
      id: 8,
      name: 'Engineering',
      icon: '⚙️',
      jobs: 110,
      link: '/jobs?category=engineering'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by Category</h2>
            <p className="text-gray-600">Find jobs in your field of expertise</p>
          </div>
          <Link to="/jobs">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Jobs
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={category.link}>
              <Card className="transition-all hover:shadow-md h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-4xl mb-4">{category.icon}</span>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.jobs} open positions</p>
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

export default CategoryBrowser;