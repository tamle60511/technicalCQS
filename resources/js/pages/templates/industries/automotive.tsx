
import CTASection from '@/front-end/about/CTA'
import Capabilities from '@/front-end/industries/Capabilities'
import CaseStudies from '@/front-end/industries/CaseStudies'
import CoreProducts from '@/front-end/industries/CoreProduct'
import IndustrySectors from '@/front-end/industries/IndustrySector'
import Metrics from '@/front-end/industries/Metris'
import Layout from '@/front-end/layout/Layout'
import AppHero from '@/front-end/layout/TechnologyHero'
import React from 'react'

type Props = {}

const Automotive = (props: Props) => {
  return (
    <Layout title='AutoMotive'>
        <AppHero />
        <Metrics />
        <IndustrySectors />
        <CoreProducts />
        <Capabilities />
        <CaseStudies />
        <CTASection />
    </Layout>
  )
}

export default Automotive
