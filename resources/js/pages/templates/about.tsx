
import Layout from '@/front-end/layout/Layout'
import CompanyHero from '@/front-end/page/about/AppHero'
import Overview from '@/front-end/page/about/Overview'
import MissionVision from '@/front-end/page/about/MissionVision'
import Manufacturing from '@/front-end/page/about/Manufacturing'
import CoreValues from '@/front-end/page/about/CoreValue'
import LeadershipTeam from '@/front-end/page/about/Leader'
import CTASection from '@/front-end/page/about/CTA'
import Timeline from '@/front-end/page/about/Timeline'



type Props = {}

const about = (props: Props) => {
  return (
    <>
    <Layout title='About'>
        <CompanyHero />
        <Overview />
        <Timeline />
        <MissionVision />
        <Manufacturing />
        <CoreValues />
        <LeadershipTeam />
        <CTASection />
    </Layout>
    </>
  )
}

export default about
