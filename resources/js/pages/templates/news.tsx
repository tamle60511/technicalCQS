import Layout from '@/front-end/layout/Layout'
import FeaturedArticles from '@/front-end/page/news/FeaturedArticle'
import LatestNewsGrid from '@/front-end/page/news/LatestNews'
import NewsArchivesSection from '@/front-end/page/news/NewsArchivesSection'
import NewsCategoriesSection from '@/front-end/page/news/NewsCategoriesSection'
import NewsHeroSection from '@/front-end/page/news/NewsHeroSection'
import NewsletterSection from '@/front-end/page/news/NewsletterSection'
import NewsSearchFilter from '@/front-end/page/news/NewsSearch'
import PressContactSection from '@/front-end/page/news/PressContactSection'
import SocialMediaLinks from '@/front-end/page/news/SocialMediaLinks'
import React from 'react'

type Props = {}

const news = (props: Props) => {
  return (
    <Layout title='News' >
        <NewsHeroSection />
        <NewsSearchFilter />
        <LatestNewsGrid />
        <FeaturedArticles />
        <NewsletterSection />
        <NewsCategoriesSection />
        <NewsArchivesSection />
        <PressContactSection />
        <SocialMediaLinks />
    </Layout>
  )
}

export default news
