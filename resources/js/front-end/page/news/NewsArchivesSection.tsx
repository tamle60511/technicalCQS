

import React from 'react';
import { Archive, History, FileText, Download } from 'lucide-react';
import { SectionTitle } from './NewsCategoriesSection'; // Reusing component from previous artifact

// Interface for archive year
interface ArchiveYear {
  year: string;
  count: number;
  link: string;
}

// Interface for annual report
interface AnnualReport {
  year: string;
  link: string;
}

// Interface for component props
interface NewsArchivesSectionProps {
  className?: string;
  archiveYears?: ArchiveYear[];
  annualReports?: AnnualReport[];
}

// Year Link component
const YearLink: React.FC<{ yearData: ArchiveYear }> = ({ yearData }) => {
  return (
    <a href={yearData.link} className="flex items-center justify-between p-3 border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 group transition-colors relative">
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>

      <span className="font-medium text-neutral-800 group-hover:text-primary-700 transition-colors">{yearData.year}</span>
      <span className="text-neutral-500 text-sm">({yearData.count})</span>
    </a>
  );
};

// Report Button component
const ReportButton: React.FC<{ report: AnnualReport }> = ({ report }) => {
  return (
    <a href={report.link} className="px-4 py-2 bg-white border border-primary-300 hover:border-primary-500 text-primary-700 hover:text-primary-800 hover:bg-primary-50 text-sm font-medium transition-colors inline-flex items-center">
      <Download className="w-4 h-4 mr-2" />
      {report.year} Report
    </a>
  );
};

// Default archive years data
const defaultArchiveYears: ArchiveYear[] = [
  { year: '2023', count: 42, link: '#' },
  { year: '2022', count: 58, link: '#' },
  { year: '2021', count: 47, link: '#' },
  { year: '2020', count: 39, link: '#' }
];

// Default annual reports data
const defaultAnnualReports: AnnualReport[] = [
  { year: '2023', link: '#' },
  { year: '2022', link: '#' },
  { year: '2021', link: '#' }
];

const NewsArchivesSection: React.FC<NewsArchivesSectionProps> = ({
  className = "",
  archiveYears = defaultArchiveYears,
  annualReports = defaultAnnualReports
}) => {
  return (
    <section className={`py-16 bg-white relative ${className}`}>
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            icon={<Archive className="w-4 h-4 mr-2" />}
            subtitle="Historical Content"
            title={<>News <span className="text-primary-600">Archives</span></>}
          />

          <div className="bg-white border border-neutral-200 shadow-sm p-6 mb-12">
            <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center">
              <History className="w-5 h-5 mr-2 text-primary-600" />
              Browse By Year
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {archiveYears.map((yearData, index) => (
                <YearLink key={`year-${index}`} yearData={yearData} />
              ))}
            </div>

            {/* Download Archives */}
            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-neutral-600 text-sm">
                Need access to older archives? Download our complete press release collection.
              </div>

              <a href="#" className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium transition-colors border border-neutral-900 inline-flex items-center group relative">
                <Download className="w-4 h-4 mr-2" />
                Download Complete Archives
              </a>
            </div>
          </div>

          {/* Annual Reports */}
          <div className="bg-primary-50 border border-primary-200 p-6 relative">
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary-400"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary-400"></div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-primary-600" />
                  Annual Reports
                </h3>
                <p className="text-neutral-600 text-sm">
                  Access our annual reports to get comprehensive insights into our performance, strategies, and future outlook.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {annualReports.map((report, index) => (
                  <ReportButton key={`report-${index}`} report={report} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsArchivesSection;
