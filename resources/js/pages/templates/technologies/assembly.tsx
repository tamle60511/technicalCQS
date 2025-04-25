import Layout from '@/front-end/layout/Layout'
import AppHero from '@/front-end/layout/TechnologyHero'
import CoatingPerformanceComparison from '@/front-end/page/technologies/PerformanceRating'
import TechnicalSpecifications from '@/front-end/page/technologies/Specification'
import Technologies from '@/front-end/page/technologies/Technologies'
import TechnologyAdvantages from '@/front-end/page/technologies/TechnologyAdvantage'
import TechnologyOverview from '@/front-end/page/technologies/TechnologyOverview'
import TechnologyProcess from '@/front-end/page/technologies/TechnologyProcess'

import React from 'react'

type Props = {}

const assembly = (props: Props) => {
  return (
    <>
    <Layout title='Assembly'>
    <AppHero
        title="Manufacturing Technology"
        titleHighlight="Assembly Technologies"
        acronym="AST"
        description="Our advanced assembly technologies combine precision engineering, automation, and quality control to deliver perfect product integration. From manual assembly to fully automated systems, we offer customized solutions to meet your production requirements with consistent quality and efficiency."
        imageSrc="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        imageAlt="Painting Process"
        imageCaption="Advanced robotic assembly line with integrated quality control and real-time monitoring systems"
        imageRefCode="AST-REF-01"
        specs={[
          { icon: 'gauge', label: 'Assembly Types', value: 'Manual to Automated' },
          { icon: 'checkCircle', label: 'Precision', value: '±0.1mm' },
          { icon: 'settings', label: 'Capacity', value: 'Up to 5,000 units/day' },
          { icon: 'network', label: 'Quality Control', value: 'Automated Inspection' }
        ]}
      />
      <TechnologyOverview />
      <TechnologyProcess />
      <TechnologyAdvantages />
      <Technologies />
      <TechnicalSpecifications />
      <CoatingPerformanceComparison />
    </Layout>
    </>
  )
}

export default assembly
