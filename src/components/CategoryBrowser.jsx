import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Briefcase, 
  Code, 
  Building2, 
  Stethoscope, 
  Truck, 
  GraduationCap, 
  ShoppingBag, 
  Utensils, 
  BadgeDollarSign, 
  Globe,
  PenTool,
  Hammer,
  Microscope
} from 'lucide-react';

const CategoryBrowser = () => {
  const categories = [
    { name: "Technology", icon: <Code className="h-8 w-8" />, color: "bg-blue-100" },
    { name: "Healthcare", icon: <Stethoscope className="h-8 w-8" />, color: "bg-green-100" },
    { name: "Finance", icon: <BadgeDollarSign className="h-8 w-8" />, color: "bg-purple-100" },
    { name: "Education", icon: <GraduationCap className="h-8 w-8" />, color: "bg-yellow-100" },
    { name: "Retail", icon: <ShoppingBag className="h-8 w-8" />, color: "bg-pink-100" },
    { name: "Logistics", icon: <Truck className="h-8 w-8" />, color: "bg-orange-100" },
    { name: "Corporate", icon: <Building2 className="h-8 w-8" />, color: "bg-indigo-100" },
    { name: "Hospitality", icon: <Utensils className="h-8 w-8" />, color: "bg-red-100" },
    { name: "Design", icon: <PenTool className="h-8 w-8" />, color: "bg-teal-100" },
    { name: "Construction", icon: <Hammer className="h-8 w-8" />, color: "bg-amber-100" },
    { name: "Science", icon: <Microscope className="h-8 w-8" />, color: "bg-cyan-100" },
    { name: "Global", icon: <Globe className="h-8 w-8" />, color: "bg-violet-100" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Browse Jobs by Category</h2>
        <a href="/all-categories" className="text-blue-600 hover:underline font-medium">
          View All Categories
        </a>
      </div>
      
      <ScrollArea className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.name} 
              className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              <CardContent className="p-0">
                <a href={`/jobs/category/${category.name.toLowerCase()}`} className="block">
                  <div className={`flex flex-col items-center justify-center p-6 ${category.color}`}>
                    <div className="mb-3">
                      {category.icon}
                    </div>
                    <span className="font-medium text-center">{category.name}</span>
                    <span className="text-sm text-gray-500 mt-1">
                      Browse Jobs
                    </span>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryBrowser;