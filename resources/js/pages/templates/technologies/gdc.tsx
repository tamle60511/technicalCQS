import Layout from '@/front-end/layout/Layout';
import AppHero from '@/front-end/layout/TechnologyHero';
import CoatingPerformanceComparison from '@/front-end/page/technologies/PerformanceRating';
import TechnicalSpecifications from '@/front-end/page/technologies/Specification';
import Technologies from '@/front-end/page/technologies/Technologies';
import TechnologyAdvantages from '@/front-end/page/technologies/TechnologyAdvantage';
import TechnologyOverview from '@/front-end/page/technologies/TechnologyOverview';
import TechnologyProcess from '@/front-end/page/technologies/TechnologyProcess';


type Props = {};

const gdc = (props: Props) => {
    return (
        <>
            <Layout title="GDC">
                <AppHero
                    title="Manufacturing Technology"
                    titleHighlight="Gravity Die Casting"
                    acronym="GDC"
                    description="Our gravity die casting technology produces high-quality metal components with excellent mechanical properties and smooth surface finish. Utilizing metal molds and gravity to fill the cavity, GDC offers an excellent balance of quality, cost-effectiveness, and production efficiency"
                    imageSrc="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    imageAlt="GDC Process"
                    imageCaption="Molten aluminum being poured into permanent metallic mold through gravity"
                    imageRefCode="GDC-REF-01"
                    specs={[
                        { icon: 'gauge', label: 'Component Size', value: '50g - 5kg' },
                        { icon: 'checkCircle', label: 'Tolerance', value: '±0.2mm' },
                        { icon: 'settings', label: 'Wall Thickness', value: 'Min. 3mm' },
                        { icon: 'network', label: 'Materials', value: 'Al, Zn, Mg Alloys' },
                    ]}
                />
                <TechnologyOverview />
                <TechnologyProcess />.
                <TechnologyAdvantages />
                <Technologies />
                <TechnicalSpecifications />
                <CoatingPerformanceComparison />
            </Layout>
        </>
    );
};

export default gdc;
