import CategoryBrowser from '@/components/CategoryBrowser';
import FeaturedJobs from '@/components/FeaturedJobs';
import Hero from '@/components/Hero';
import TopCompanies from '@/components/TopCompanies';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturedJobs/>
            <TopCompanies/>
            <CategoryBrowser/>
        </div>
    );
};

export default Home;