
import React from 'react';
import { Megaphone, User, Mail, Phone, Download } from 'lucide-react';

// Interface for contact person
interface ContactPerson {
  name: string;
  title: string;
  email: string;
  emailDescription: string;
  phone: string;
  phoneDescription: string;
}

// Interface for component props
interface PressContactSectionProps {
  id?: string;
  className?: string;
  contactPerson?: ContactPerson;
  pressKitUrl?: string;
}

// Technical corner accent component (reused from previous components)
const TechnicalCornerAccent: React.FC<{ position: 'top-left' | 'bottom-right' }> = ({ position }) => {
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

// Contact Info Item component
const ContactInfoItem: React.FC<{
  icon: React.ReactNode;
  primary: string;
  secondary: string;
}> = ({ icon, primary, secondary }) => {
  return (
    <div className="flex items-start">
      <div className="mt-0.5 mr-3">{icon}</div>
      <div>
        <div className="font-medium">{primary}</div>
        <div className="text-sm text-neutral-400">{secondary}</div>
      </div>
    </div>
  );
};

const PressContactSection: React.FC<PressContactSectionProps> = ({
  id = "press-contact",
  className = "",
  contactPerson = {
    name: "Sarah Martinez",
    title: "Director of Communications",
    email: "press@company.com",
    emailDescription: "Email for media inquiries",
    phone: "+1 (555) 123-4567",
    phoneDescription: "Monday-Friday, 9AM-5PM EST"
  },
  pressKitUrl = "#"
}) => {
  return (
    <section id={id} className={`py-16 bg-neutral-900 text-white relative ${className}`}>
      {/* Technical background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#444_50px,#444_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#444_50px,#444_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.03]"></div>

      {/* Technical corner accents */}
      <TechnicalCornerAccent position="top-left" />
      <TechnicalCornerAccent position="bottom-right" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-neutral-800/50 border border-neutral-700 p-8 relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-500 -m-2"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-500 -m-2"></div>

            <div className="md:w-1/3 text-center md:text-left">
              <div className="w-20 h-20 rounded-full bg-primary-600/20 border border-primary-500/30 flex items-center justify-center mx-auto md:mx-0 mb-4">
                <Megaphone className="w-10 h-10 text-primary-500" />
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-3">Press & Media Contact</h3>
              <p className="text-neutral-300 mb-4">
                For press inquiries, interview requests, or additional information about any news story, please contact our communications team.
              </p>

              <div className="space-y-3">
                <ContactInfoItem
                  icon={<User className="w-5 h-5 text-primary-500" />}
                  primary={contactPerson.name}
                  secondary={contactPerson.title}
                />

                <ContactInfoItem
                  icon={<Mail className="w-5 h-5 text-primary-500" />}
                  primary={contactPerson.email}
                  secondary={contactPerson.emailDescription}
                />

                <ContactInfoItem
                  icon={<Phone className="w-5 h-5 text-primary-500" />}
                  primary={contactPerson.phone}
                  secondary={contactPerson.phoneDescription}
                />
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-700">
                <a href={pressKitUrl} className="inline-flex items-center px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors border border-primary-700 group relative">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Press Kit Download
                  <Download className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressContactSection;
