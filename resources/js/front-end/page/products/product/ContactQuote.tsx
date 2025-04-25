
import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, Globe, Send, Layers, ChevronRight } from 'lucide-react';

// Types and Interfaces
interface ContactMethod {
  id: string;
  icon: React.ReactNode;
  title: string;
  link: string;
  text: string;
}

interface RelatedProduct {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  productInterest: string;
  message: string;
  inquiryType: string;
  consent: boolean;
}

// Reusable Components
interface TechnicalCornerAccentProps {
  position: 'top-left' | 'bottom-right';
}

const TechnicalCornerAccent: React.FC<TechnicalCornerAccentProps> = ({ position }) => {
  const isTopLeft = position === 'top-left';

  return (
    <div
      className={`absolute ${isTopLeft ? 'top-0 left-0' : 'bottom-0 right-0'} w-32 h-32
      ${isTopLeft ? 'border-t-2 border-l-2' : 'border-b-2 border-r-2'} border-primary-600/30`}
    >
      <div
        className={`absolute ${isTopLeft ? 'top-4 left-4' : 'bottom-4 right-4'} w-8 h-8
        ${isTopLeft ? 'border-t border-l' : 'border-b border-r'} border-primary-600/40`}
      ></div>
    </div>
  );
};

interface SectionHeadingProps {
  icon: React.ReactNode;
  subtitle: string;
  title: React.ReactNode;
  description?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ icon, subtitle, title, description }) => {
  return (
    <>
      <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
        {icon}
        <span className="text-sm font-medium tracking-wider uppercase">{subtitle}</span>
      </div>

      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>

      <div className="w-20 h-0.5 bg-neutral-700 mb-6 relative">
        <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-700 transform -translate-x-1/2 rotate-45"></div>
      </div>

      {description && (
        <p className="text-neutral-300 mb-6">{description}</p>
      )}
    </>
  );
};

interface ContactInfoItemProps {
  item: ContactMethod;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ item }) => {
  return (
    <div className="flex items-start">
      {item.icon}
      <div>
        <div className="font-medium text-white">{item.title}</div>
        <a href={item.link} className="text-primary-400 hover:text-primary-300 transition-colors">
          {item.text}
        </a>
      </div>
    </div>
  );
};

const TechnicalSupportInfo: React.FC = () => {
  return (
    <div className="p-4 bg-neutral-800 border-l-2 border-primary-500">
      <div className="text-sm text-neutral-400 mb-2">Technical Support Hours</div>
      <div className="text-white">Monday - Friday: 8:00 AM - 6:00 PM (EST)</div>
      <div className="text-neutral-400 text-sm mt-1">24/7 emergency support available for OEM partners</div>
    </div>
  );
};

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  // State to manage form data
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    productInterest: '',
    message: '',
    inquiryType: '',
    consent: false
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Handle checkbox and radio changes
  const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked, name, value } = e.target;

    if (name === 'inquiry-type') {
      setFormData(prev => ({ ...prev, inquiryType: value }));
    } else {
      setFormData(prev => ({ ...prev, [id]: checked }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-neutral-300 mb-1">First Name</label>
          <input
            type="text"
            id="firstName"
            className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
            placeholder="Your first name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-neutral-300 mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
            placeholder="Your last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Rest of the form fields... */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-1">Company</label>
        <input
          type="text"
          id="company"
          className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
          placeholder="Your company name"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="productInterest" className="block text-sm font-medium text-neutral-300 mb-1">Product Interest</label>
        <select
          id="productInterest"
          className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
          value={formData.productInterest}
          onChange={handleChange}
        >
          <option value="">Select product series</option>
          <option value="performance">Performance Series (AL-P)</option>
          <option value="commercial">Commercial Series (AL-C)</option>
          <option value="offroad">Off-Road Series (AL-X)</option>
          <option value="custom">Custom / OEM Solutions</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">Message</label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 rounded-sm"
          placeholder="Please describe your specific requirements or questions"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-300 mb-1">Inquiry Type</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="quote"
              name="inquiry-type"
              value="quote"
              checked={formData.inquiryType === 'quote'}
              onChange={handleCheckedChange}
              className="mr-2 bg-neutral-700 border-neutral-600 text-primary-600 focus:ring-primary-500"
            />
            <label htmlFor="quote" className="text-sm text-neutral-300">Request for Quote</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="information"
              name="inquiry-type"
              value="information"
              checked={formData.inquiryType === 'information'}
              onChange={handleCheckedChange}
              className="mr-2 bg-neutral-700 border-neutral-600 text-primary-600 focus:ring-primary-500"
            />
            <label htmlFor="information" className="text-sm text-neutral-300">Technical Information</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="custom"
              name="inquiry-type"
              value="custom"
              checked={formData.inquiryType === 'custom'}
              onChange={handleCheckedChange}
              className="mr-2 bg-neutral-700 border-neutral-600 text-primary-600 focus:ring-primary-500"
            />
            <label htmlFor="custom" className="text-sm text-neutral-300">Custom Solution Request</label>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="consent"
          checked={formData.consent}
          onChange={handleCheckedChange}
          className="mt-1 bg-neutral-700 border-neutral-600 text-primary-600 focus:ring-primary-500 rounded"
        />
        <label htmlFor="consent" className="ml-2 text-sm text-neutral-400">
          I consent to CQS collecting and storing my data to process my inquiry and provide relevant information about aluminum wheel products.
        </label>
      </div>

      <button type="submit" className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors border border-primary-700 inline-flex items-center justify-center group relative">
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        Submit Request
        <Send className="w-4 h-4 ml-2" />
      </button>
    </form>
  );
};

interface RelatedProductCardProps {
  product: RelatedProduct;
}

const RelatedProductCard: React.FC<RelatedProductCardProps> = ({ product }) => {
  return (
    <a href={product.link} className="bg-neutral-800/50 border border-neutral-700 p-4 hover:border-primary-600 transition-colors flex items-center group relative">
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500/30"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500/30"></div>

      <div className="mr-4 w-16 h-16 flex-shrink-0 bg-neutral-700 rounded-sm overflow-hidden">
        <img src={product.imageSrc} alt={product.title} className="w-full h-full object-cover" />
      </div>

      <div>
        <h4 className="text-white font-medium group-hover:text-primary-400 transition-colors">{product.title}</h4>
        <p className="text-neutral-400 text-sm">{product.description}</p>
      </div>

      <ChevronRight className="w-5 h-5 text-neutral-500 ml-auto transform group-hover:translate-x-1 transition-transform" />
    </a>
  );
};

interface RelatedProductsProps {
  products: RelatedProduct[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <div className="mt-16">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center">
        <Layers className="w-5 h-5 mr-2 text-primary-500" />
        Related Products
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <RelatedProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Default data
const defaultContactMethods: ContactMethod[] = [
  {
    id: 'contact-email',
    icon: <Mail className="w-5 h-5 text-primary-500 mt-0.5 mr-3" />,
    title: 'Email Us',
    link: 'mailto:wheels@cqs.com',
    text: 'wheels@cqs.com'
  },
  {
    id: 'contact-phone',
    icon: <Phone className="w-5 h-5 text-primary-500 mt-0.5 mr-3" />,
    title: 'Call Our Product Line',
    link: 'tel:+15551234567',
    text: '+1 (555) 123-4567'
  },
  {
    id: 'contact-distributor',
    icon: <Globe className="w-5 h-5 text-primary-500 mt-0.5 mr-3" />,
    title: 'Find a Distributor',
    link: '#',
    text: 'Locate nearest dealer'
  }
];

const defaultRelatedProducts: RelatedProduct[] = [
  {
    id: 'product-1',
    title: 'Light-Weight Products',
    description: 'Advanced materials for weight reduction',
    imageSrc: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
  {
    id: 'product-2',
    title: 'Green Energy Products',
    description: 'Sustainable manufacturing solutions',
    imageSrc: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    link: '#'
  },
  {
    id: 'product-3',
    title: 'Agricultural Products',
    description: 'Solutions for farming equipment',
    imageSrc: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    link: '#'
  }
];

// Main Component
interface ContactQuoteSectionProps {
  contactMethods?: ContactMethod[];
  relatedProducts?: RelatedProduct[];
  onFormSubmit?: (data: ContactFormData) => void; // Made optional with ?
}

const ContactQuote: React.FC<ContactQuoteSectionProps> = ({
  contactMethods = defaultContactMethods,
  relatedProducts = defaultRelatedProducts,
  onFormSubmit = (data) => console.log('Form submitted:', data) // Added default handler
}) => {
  return (
    <section id="contact" className="py-16 bg-neutral-900 text-white relative">
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#444_50px,#444_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#444_50px,#444_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.03]"></div>

      {/* Technical corner accents */}
      <TechnicalCornerAccent position="top-left" />
      <TechnicalCornerAccent position="bottom-right" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <SectionHeading
                icon={<MessageSquare className="w-4 h-4 mr-2" />}
                subtitle="Get In Touch"
                title={<>Request a Quote or <span className="text-primary-500">Product Information</span></>}
                description="Contact our product specialists to discuss your specific aluminum wheel requirements, request custom configurations, or get detailed information about our product series."
              />

              <div className="space-y-4 mb-8">
                {contactMethods.map(method => (
                  <ContactInfoItem key={method.id} item={method} />
                ))}
              </div>

              <TechnicalSupportInfo />
            </div>

            <div className="md:w-1/2 bg-neutral-800/50 border border-neutral-700 p-6 relative">
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary-500/40"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-primary-500/40"></div>

              <h3 className="text-xl font-bold text-white mb-4">Request Information or Quote</h3>
              <p className="text-neutral-300 mb-4">
                Fill out the form below and our team will respond within 24 business hours with the information you need.
              </p>

              <ContactForm onSubmit={onFormSubmit} />
            </div>
          </div>

          {/* Related Products */}
          <RelatedProducts products={relatedProducts} />
        </div>
      </div>
    </section>
  );
};

export default ContactQuote;
