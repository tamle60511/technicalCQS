import Hero from '@/front-end/components/Hero';
import Layout from '@/front-end/layout/Layout';
import CallToAction from '@/front-end/page/homepage/CallToAction';
import Certifications from '@/front-end/page/homepage/Certifications';
import Factory from '@/front-end/page/homepage/Factory';
import GlobalReach from '@/front-end/page/homepage/GlobalReach';
import IndustriesSection from '@/front-end/page/homepage/IndustriesSection';
import ProductsSection from '@/front-end/page/homepage/MetalsSection';
import News from '@/front-end/page/homepage/New';
import NewsResources from '@/front-end/page/homepage/NewsResources';
import OneStopService from '@/front-end/page/homepage/OneStopService';

import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Layout title="Home">
                <Hero />
                <Factory />
                <NewsResources />
                <IndustriesSection />
                <ProductsSection />
                <CallToAction />
                <OneStopService />
                <Certifications />
                <GlobalReach />
                <News />
            </Layout>
        </>
    );
}
