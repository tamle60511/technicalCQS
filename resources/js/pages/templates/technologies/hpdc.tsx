import Layout from '@/front-end/layout/Layout';
import AppHero from '@/front-end/layout/TechnologyHero';
import TechnicalSpecifications from '@/front-end/page/technologies/Specification';
import Technologies from '@/front-end/page/technologies/Technologies';
import TechnologyAdvantages from '@/front-end/page/technologies/TechnologyAdvantage';
import TechnologyOverview from '@/front-end/page/technologies/TechnologyOverview';
import TechnologyProcess from '@/front-end/page/technologies/TechnologyProcess';


type Props = {};

const hpdc = (props: Props) => {
    return (
        <>
            <Layout title="HPDC">
                <AppHero
                    title="High Pressure"
                    titleHighlight="Die Casting"
                    acronym="HPDC"
                    description="Our advanced high pressure die casting technology delivers precision aluminum components with superior dimensional accuracy and exceptional surface quality. Using injection pressures up to 120 MPa, we produce complex, thin-walled components with walls as thin as 0.8mm for automotive applications requiring lightweight design and structural integrity."
                    imageSrc="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    imageAlt="CQS HPDC Production Line"
                    imageCaption="Molten aluminum injection into precision-engineered steel dies at our IATF 16949 certified facility"
                    imageRefCode="CQS-HPDC-2023"
                    specs={[
                        { icon: 'gauge', label: 'Injection Pressure', value: '70-120 MPa' },
                        { icon: 'checkCircle', label: 'Dimensional Accuracy', value: '±0.05mm' },
                        { icon: 'settings', label: 'Min. Wall Thickness', value: '0.8mm' },
                        { icon: 'network', label: 'Aluminum Alloys', value: 'ADC12, A380, A383, A356' },
                    ]}
                />
                <TechnologyOverview />
                <TechnologyProcess />
                <TechnologyAdvantages />
                <Technologies />
                <TechnicalSpecifications />
            </Layout>
        </>
    );
};

export default hpdc;
