
import React, { useState } from 'react';
import {
  FileText, Building, Phone, Mail, Clock, Linkedin, Twitter,
  Facebook, Instagram, Youtube, Send, ArrowRight
} from 'lucide-react';

// Types and Interfaces
interface SectionHeaderProps {
  icon: React.ReactNode;
  subtitle: string;
  title: React.ReactNode;
  description?: string;
}

interface ContactDetailProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

interface PhoneContact {
  id: string;
  label: string;
  number: string;
  link: string;
}

interface EmailContact {
  id: string;
  label: string;
  email: string;
  link: string;
}

interface SocialMedia {
  id: string;
  icon: React.ReactNode;
  link: string;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  department: string;
  consent: boolean;
}

interface ContactInformationSectionProps {
  phoneContacts?: PhoneContact[];
  emailContacts?: EmailContact[];
  socialMediaLinks?: SocialMedia[];
  onSubmitForm?: (data: ContactFormData) => void;
}

// Reusable Components
const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, subtitle, title, description }) => {
  return (
    <div className="mb-10">
      <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
        {icon}
        <span className="text-sm font-medium tracking-wider uppercase">{subtitle}</span>
      </div>

      <h2 className="text-2xl font-bold text-neutral-900 mb-4">
        {title}
      </h2>

      <div className="w-16 h-0.5 bg-neutral-300 mb-6 relative">
        <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
      </div>

      {description && (
        <p className="text-neutral-600 mb-6">
          {description}
        </p>
      )}
    </div>
  );
};

const ContactDetailCard: React.FC<ContactDetailProps> = ({ icon, title, children }) => {
  return (
    <div className="bg-neutral-50 border border-neutral-200 p-6 relative">
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-500/30"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-500/30"></div>

      <div className="flex gap-4">
        <div className="w-12 h-12 bg-primary-100 rounded-md flex items-center justify-center flex-shrink-0">
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-bold text-neutral-900 mb-1">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

const SocialMediaLinks: React.FC<{ links: SocialMedia[] }> = ({ links }) => {
  return (
    <div className="bg-neutral-50 border border-neutral-200 p-6 relative">
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-500/30"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-500/30"></div>

      <h3 className="text-lg font-bold text-neutral-900 mb-4">Connect With Us</h3>

      <div className="flex flex-wrap gap-3">
        {links.map(link => (
          <a
            key={link.id}
            href={link.link}
            className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 text-white rounded-sm flex items-center justify-center transition-colors relative"
          >
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/30 opacity-0 hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/30 opacity-0 hover:opacity-100 transition-opacity"></div>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

const ContactForm: React.FC<{ onSubmit: (data: ContactFormData) => void }> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    department: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setFormData(prev => ({ ...prev, [id]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-neutral-50 border border-neutral-200 p-6 relative">
      <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary-500/30"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary-500/30"></div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">First Name *</label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
              placeholder="Your first name"
              required
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">Last Name *</label>
            <input
              type="text"
              id="lastName"
              className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
              placeholder="Your last name"
              required
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address *</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
              placeholder="Your email address"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">Company/Organization</label>
          <input
            type="text"
            id="company"
            className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
            placeholder="Your company or organization"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">Subject *</label>
          <input
            type="text"
            id="subject"
            className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
            placeholder="Message subject"
            required
            value={formData.subject}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message *</label>
          <textarea
            id="message"
            rows={6}
            className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
            placeholder="Your message"
            required
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div>
          <label htmlFor="department" className="block text-sm font-medium text-neutral-700 mb-1">Department</label>
          <select
            id="department"
            className="w-full px-3 py-2 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
            value={formData.department}
            onChange={handleInputChange}
          >
            <option value="">Select department</option>
            <option value="general">General Inquiry</option>
            <option value="sales">Sales Department</option>
            <option value="support">Technical Support</option>
            <option value="billing">Billing & Finance</option>
            <option value="partnership">Partnership Opportunities</option>
          </select>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            className="mt-1 bg-white border-neutral-300 text-primary-600 focus:ring-primary-500 rounded"
            required
            checked={formData.consent}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="consent" className="ml-2 text-sm text-neutral-600">
            I consent to CQS processing my personal data in accordance with the <a href="#" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</a>.
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors border border-primary-700 inline-flex items-center group relative"
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            Send Message
            <Send className="w-4 h-4 ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
};

// Default data
const defaultPhoneContacts: PhoneContact[] = [
  {
    id: 'phone-1',
    label: 'Main Office:',
    number: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    id: 'phone-2',
    label: 'Customer Support:',
    number: '+1 (555) 987-6543',
    link: 'tel:+15559876543'
  },
  {
    id: 'phone-3',
    label: 'Technical Support:',
    number: '+1 (555) 246-8101',
    link: 'tel:+15552468101'
  }
];

const defaultEmailContacts: EmailContact[] = [
  {
    id: 'email-1',
    label: 'General Inquiries:',
    email: 'info@cqs.com',
    link: 'mailto:info@cqs.com'
  },
  {
    id: 'email-2',
    label: 'Customer Support:',
    email: 'support@cqs.com',
    link: 'mailto:support@cqs.com'
  },
  {
    id: 'email-3',
    label: 'Sales Department:',
    email: 'sales@cqs.com',
    link: 'mailto:sales@cqs.com'
  }
];

const defaultSocialMediaLinks: SocialMedia[] = [
  {
    id: 'social-1',
    icon: <Linkedin className="w-5 h-5" />,
    link: '#'
  },
  {
    id: 'social-2',
    icon: <Twitter className="w-5 h-5" />,
    link: '#'
  },
  {
    id: 'social-3',
    icon: <Facebook className="w-5 h-5" />,
    link: '#'
  },
  {
    id: 'social-4',
    icon: <Instagram className="w-5 h-5" />,
    link: '#'
  },
  {
    id: 'social-5',
    icon: <Youtube className="w-5 h-5" />,
    link: '#'
  }
];

// Main Contact Information Section Component
const ContactInformationSection: React.FC<ContactInformationSectionProps> = ({
  phoneContacts = defaultPhoneContacts,
  emailContacts = defaultEmailContacts,
  socialMediaLinks = defaultSocialMediaLinks,
  onSubmitForm = (data) => console.log('Form submitted:', data)
}) => {
  return (
    <section className="py-16 bg-white relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Contact Details */}
            <div className="md:w-2/5">
              <SectionHeader
                icon={<FileText className="w-4 h-4 mr-2" />}
                subtitle="Contact Details"
                title={<>Our <span className="text-primary-600">Contact Information</span></>}
                description="Reach out to us through any of our communication channels below. Our customer service team is ready to assist you with any inquiries or support needs."
              />

              <div className="space-y-8">
                {/* Headquarters Address */}
                <ContactDetailCard icon={<Building className="w-6 h-6 text-primary-600" />} title="Headquarters">
                  <div className="text-neutral-600">
                    <p>1250 Technology Avenue, Suite 500</p>
                    <p>Innovation City, CA 92120</p>
                    <p>United States</p>
                  </div>

                  <div className="mt-3 text-sm text-primary-600 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Monday - Friday: 8:00 AM - 6:00 PM PST</span>
                  </div>
                </ContactDetailCard>

                {/* Phone Numbers */}
                <ContactDetailCard icon={<Phone className="w-6 h-6 text-primary-600" />} title="Phone Contact">
                  <div className="text-neutral-600 space-y-2">
                    {phoneContacts.map(phone => (
                      <div key={phone.id} className="flex flex-col">
                        <span className="text-sm text-neutral-500">{phone.label}</span>
                        <a href={phone.link} className="text-primary-600 hover:text-primary-700 transition-colors">
                          {phone.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </ContactDetailCard>

                {/* Email Addresses */}
                <ContactDetailCard icon={<Mail className="w-6 h-6 text-primary-600" />} title="Email Addresses">
                  <div className="text-neutral-600 space-y-2">
                    {emailContacts.map(email => (
                      <div key={email.id} className="flex flex-col">
                        <span className="text-sm text-neutral-500">{email.label}</span>
                        <a href={email.link} className="text-primary-600 hover:text-primary-700 transition-colors">
                          {email.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </ContactDetailCard>

                {/* Social Media */}
                <SocialMediaLinks links={socialMediaLinks} />
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-3/5">
              <SectionHeader
                icon={<Send className="w-4 h-4 mr-2" />}
                subtitle="Send Message"
                title={<>Send Us a <span className="text-primary-600">Message</span></>}
                description="Fill out the form below and our team will get back to you promptly. We value your feedback and inquiries."
              />

              <ContactForm onSubmit={onSubmitForm} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformationSection;
