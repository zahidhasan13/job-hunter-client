import React from 'react';
import { Shield, Lock, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TrustBadges = () => {
  const securityBadges = [
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      title: "256-bit SSL Encryption",
      description: "Your data is protected with industry-standard encryption"
    },
    {
      icon: <Lock className="h-12 w-12 text-blue-500" />,
      title: "GDPR Compliant",
      description: "We follow strict data protection regulations"
    },
    {
      icon: <Award className="h-12 w-12 text-blue-500" />,
      title: "ISO 27001 Certified",
      description: "Internationally recognized security standard"
    }
  ];

  const partners = [
    { name: "Microsoft", category: "tech" },
    { name: "Google", category: "tech" },
    { name: "Apple", category: "tech" },
    { name: "Amazon", category: "tech" },
    { name: "Goldman Sachs", category: "finance" },
    { name: "JPMorgan Chase", category: "finance" },
    { name: "Bank of America", category: "finance" },
    { name: "Citigroup", category: "finance" },
    { name: "Mayo Clinic", category: "healthcare" },
    { name: "Cleveland Clinic", category: "healthcare" },
    { name: "Johns Hopkins", category: "healthcare" },
    { name: "Kaiser Permanente", category: "healthcare" }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted By Industry Leaders</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies and millions of job seekers who trust our platform for their recruitment needs.
          </p>
        </div>

        {/* Security Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {securityBadges.map((badge, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">{badge.icon}</div>
                <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="mb-12">
          <h3 className="font-bold text-xl mb-6 text-center">Our Partners</h3>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 max-w-md mx-auto mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="tech">Tech</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24">
                    <div className="text-center">
                      <img 
                        src={`/api/placeholder/80/40`} 
                        alt={`${partner.name} logo`} 
                        className="mx-auto mb-2"
                      />
                      <p className="text-sm font-medium">{partner.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tech" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {partners
                  .filter(partner => partner.category === "tech")
                  .map((partner, index) => (
                    <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24">
                      <div className="text-center">
                        <img 
                          src={`/api/placeholder/80/40`} 
                          alt={`${partner.name} logo`} 
                          className="mx-auto mb-2"
                        />
                        <p className="text-sm font-medium">{partner.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="finance" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {partners
                  .filter(partner => partner.category === "finance")
                  .map((partner, index) => (
                    <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24">
                      <div className="text-center">
                        <img 
                          src={`/api/placeholder/80/40`} 
                          alt={`${partner.name} logo`} 
                          className="mx-auto mb-2"
                        />
                        <p className="text-sm font-medium">{partner.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="healthcare" className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {partners
                  .filter(partner => partner.category === "healthcare")
                  .map((partner, index) => (
                    <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24">
                      <div className="text-center">
                        <img 
                          src={`/api/placeholder/80/40`} 
                          alt={`${partner.name} logo`} 
                          className="mx-auto mb-2"
                        />
                        <p className="text-sm font-medium">{partner.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Industry Certifications */}
        <div className="text-center">
          <h3 className="font-bold text-xl mb-6">Industry Certifications</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Certification badges */}
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center w-36 h-36">
              <div className="text-center">
                <img src="/api/placeholder/60/60" alt="SOC 2 Badge" className="mx-auto mb-2" />
                <p className="text-sm font-medium">SOC 2 Certified</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center w-36 h-36">
              <div className="text-center">
                <img src="/api/placeholder/60/60" alt="ISO Badge" className="mx-auto mb-2" />
                <p className="text-sm font-medium">ISO 27001</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center w-36 h-36">
              <div className="text-center">
                <img src="/api/placeholder/60/60" alt="GDPR Badge" className="mx-auto mb-2" />
                <p className="text-sm font-medium">GDPR Compliant</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center w-36 h-36">
              <div className="text-center">
                <img src="/api/placeholder/60/60" alt="HIPAA Badge" className="mx-auto mb-2" />
                <p className="text-sm font-medium">HIPAA Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;