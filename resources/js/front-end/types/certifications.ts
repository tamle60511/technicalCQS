export interface Certification {
    name: string;
    image: string;
    url: string;
    code: string;
    issuer?: string;
    validUntil?: string;
    scope?: string;
    status?: 'valid' | 'pending-renewal' | 'expired';
    issueDate?: string;
    lastAudit?: string;
    requirements?: string[];
    icon?: React.ComponentType<{ size?: number }>;
}
