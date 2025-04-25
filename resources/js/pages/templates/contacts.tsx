
import Layout from '@/front-end/layout/Layout'
import CallToActionSection from '@/front-end/page/contacts/CallToAction'
import ContactInformationSection from '@/front-end/page/contacts/ContactInformation'
import ContactInformationHero from '@/front-end/page/contacts/ContactInformationHero'
import LocationMapSection from '@/front-end/page/contacts/LocationMap'
import React from 'react'

type Props = {}

const contacts = (props: Props) => {
  return (
    <Layout title='Contact Us'>
        <ContactInformationHero />
        <ContactInformationSection />
        <LocationMapSection />
        <CallToActionSection />
    </Layout>
  )
}

export default contacts
