import CategoryBrowser from '@/components/CategoryBrowser';
import FeaturedJobs from '@/components/FeaturedJobs';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import MobileAppPromotion from '@/components/MobileAppPromotion';
import TopCompanies from '@/components/TopCompanies';
import TrustBadges from '@/components/TrustBadges';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturedJobs/>
            <TopCompanies/>
            <CategoryBrowser/>
            <HowItWorks/>
            <MobileAppPromotion/>
            <TrustBadges/>
        </div>
    );
};

export default Home;