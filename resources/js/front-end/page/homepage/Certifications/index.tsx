import Background from '@/front-end/components/ui/Background';
import Title from '@/front-end/components/ui/Title/Title';
import ImageZoomModal from '@/front-end/components/ui/Zoom';
import { defaultCertification } from '@/front-end/constants/certifications';
import { Certification } from '@/front-end/types/certifications';
import { useCertificationCarousel } from '@/hooks/use-certification';
import { Terminal } from 'lucide-react';
import React, { useState } from 'react';
import CertificationCarousel from './shared/CertificationCarousel';
import CertificationDetailsPanel from './shared/CertificationDetailsPanel';

interface CertificationProps {
    initialCertifications?: Certification[];
}

const Certifications: React.FC<CertificationProps> = ({ initialCertifications = defaultCertification }) => {
    const {
        isLoaded,
        isScanning,
        activePage,
        activeDetailIndex,
        isAnimating,
        itemsPerPage,
        setActiveDetailIndex,
        handlePrevious,
        handleNext,
        totalPages,
    } = useCertificationCarousel();
    const currentYear = new Date().getFullYear();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentCertification = initialCertifications[activeDetailIndex];
    return (
        <section id="certifications" className="relative overflow-hidden bg-neutral-100 py-16 md:py-20">
            {/* Technical background patterns */}
            <Background isScanning={isScanning} />

            <div className="relative z-10 container mx-auto px-4 md:px-8">
                {/* Technical title header */}

                <Title
                    className="flex flex-col items-center"
                    metadata={{
                        icon: Terminal,
                        text: 'SYS: CQS.INDUSTRY_APPLICATIONS.{currentYear}',
                        variant: 'system',
                    }}
                    title={{
                        main: 'Certifications &',
                        highlight: ' Achievements',
                    }}
                    description="CQS adheres to international standards for quality management, environmental responsibility,
              and automotive industry requirements to deliver consistent, high-quality aluminum components."
                    showDivider
                />

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                    {/* Left Column - Certification Info (4 columns) */}
                    <div className="lg:col-span-4">
                        {/* Technical certification details panel */}
                        <CertificationDetailsPanel
                            certification={defaultCertification[activeDetailIndex]}
                            currentYear={currentYear}
                            onImageZoom={() => setIsModalOpen(true)}
                        />
                    </div>
                    <ImageZoomModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        imageSrc={currentCertification.image}
                        title={`${currentCertification.name}_CERTIFICATE`}
                        resolution="1920x1080"
                        description={currentCertification.scope}
                    />
                    {/* Right Column - Certificates Carousel (8 columns) */}
                    <div className="lg:col-span-8">
                        <CertificationCarousel
                            certifications={defaultCertification}
                            activePage={activePage}
                            itemsPerPage={itemsPerPage}
                            isLoaded={isLoaded}
                            isAnimating={isAnimating}
                            activeDetailIndex={activeDetailIndex}
                            totalPages={totalPages}
                            handlePrevious={handlePrevious}
                            handleNext={handleNext}
                            setActiveDetailIndex={setActiveDetailIndex}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
