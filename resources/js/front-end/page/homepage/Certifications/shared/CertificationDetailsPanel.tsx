import { Certification } from '@/front-end/types/certifications';
import { ArrowRight, Award, Calendar, FileText, Shield } from 'lucide-react';
import React, { useState } from 'react';

interface CertificationDetailsPanelProps {
    certification: Certification;
    currentYear: number;
    isLoaded?: boolean;
    onImageZoom?: () => void;
}

const CertificationDetailsPanel: React.FC<CertificationDetailsPanelProps> = ({ certification, currentYear, isLoaded = true, onImageZoom }) => {
    // Status styles helper
    const getStatusStyles = (status: Certification['status']) => {
        switch (status) {
            case 'valid':
                return {
                    dot: 'bg-emerald-500',
                    badge: 'border border-emerald-200 bg-emerald-50 text-emerald-700',
                    text: 'VALID',
                };
            case 'pending-renewal':
                return {
                    dot: 'bg-amber-500',
                    badge: 'border border-amber-200 bg-amber-50 text-amber-700',
                    text: 'PENDING RENEWAL',
                };
            default:
                return {
                    dot: 'bg-red-500',
                    badge: 'border border-red-200 bg-red-50 text-red-700',
                    text: 'EXPIRED',
                };
        }
    };

    const statusStyles = getStatusStyles(certification.status);
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div
            className={`mb-6 rounded-sm border border-neutral-200 bg-white shadow-md transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
        >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-200 p-4">
                <div className="flex items-center">
                    <Shield size={18} className="text-primary-600 mr-2" />
                    <h3 className="font-medium text-neutral-800">Certification Details</h3>
                </div>
                <div className="rounded-sm border border-neutral-200 bg-neutral-100 px-2 py-0.5 font-mono text-xs text-neutral-600">
                    {certification.code}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Image Preview */}

                {/* Certification Name and Status */}
                <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-lg font-bold text-neutral-800">{certification.name}</h4>
                    <div className={`flex items-center rounded-sm px-2 py-0.5 font-mono text-xs ${statusStyles.badge}`}>
                        <div className={`mr-1.5 h-1.5 w-1.5 rounded-full ${statusStyles.dot}`}></div>
                        {statusStyles.text}
                    </div>
                </div>

                {/* Details Grid */}
                <div className="mb-5 space-y-4">
                    {/* Scope */}
                    <div className="rounded-sm border border-neutral-200 bg-neutral-50 p-3">
                        <div className="mb-1 text-xs font-medium text-neutral-500 uppercase">SCOPE</div>
                        <div className="text-neutral-700">{certification.scope}</div>
                    </div>

                    {/* Issuer and Valid Until */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-sm border border-neutral-200 bg-neutral-50 p-3">
                            <div className="mb-1 text-xs font-medium text-neutral-500 uppercase">ISSUER</div>
                            <div className="flex items-center text-neutral-700">
                                <Award size={14} className="text-primary-600 mr-1.5" />
                                {certification.issuer}
                            </div>
                        </div>

                        <div className="rounded-sm border border-neutral-200 bg-neutral-50 p-3">
                            <div className="mb-1 text-xs font-medium text-neutral-500 uppercase">VALID UNTIL</div>
                            <div className="flex items-center text-neutral-700">
                                <Calendar size={14} className="text-primary-600 mr-1.5" />
                                {certification.validUntil}
                            </div>
                        </div>
                    </div>

                    {/* Issue Date and Last Audit */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-sm border border-neutral-200 bg-neutral-50 p-3">
                            <div className="mb-1 text-xs font-medium text-neutral-500 uppercase">ISSUE DATE</div>
                            <div className="font-mono text-neutral-700">{certification.issueDate}</div>
                        </div>

                        <div className="rounded-sm border border-neutral-200 bg-neutral-50 p-3">
                            <div className="mb-1 text-xs font-medium text-neutral-500 uppercase">LAST AUDIT</div>
                            <div className="font-mono text-neutral-700">{certification.lastAudit}</div>
                        </div>
                    </div>
                </div>

                {/* Requirements and Certificate Link */}
                <div className="mt-4 border-t border-dashed border-neutral-200 pt-4">
                    {certification.requirements && certification.requirements.length > 0 && (
                        <ul className="mb-4 space-y-1">
                            {certification.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start">
                                    <div className="text-primary-600 mt-1 mr-2">•</div>
                                    <span className="text-sm text-neutral-600">{req}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {certification.url && (
                        <div className='flex justify-center pt-2'>
                            <button
                                onClick={onImageZoom}
                                className="text-primary-600 hover:text-primary-700 inline-flex items-center text-sm font-medium"
                            >
                                <FileText size={14} className="mr-1.5" />
                                View Certificate
                                <ArrowRight size={14} className="ml-1.5" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-neutral-200 bg-neutral-50 px-5 py-3 font-mono text-xs text-neutral-500">
                <span>
                    CERT: {certification.code}.{currentYear}
                </span>
                <div className="flex items-center">
                    <div
                        className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
                            certification.status === 'valid'
                                ? 'bg-emerald-500'
                                : certification.status === 'pending-renewal'
                                  ? 'bg-amber-500'
                                  : 'bg-red-500'
                        }`}
                    ></div>
                    <span>
                        STATUS:{' '}
                        {certification.status === 'valid'
                            ? 'CERTIFIED'
                            : certification.status === 'pending-renewal'
                              ? 'RENEWAL SCHEDULED'
                              : 'REQUIRES UPDATE'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CertificationDetailsPanel;
