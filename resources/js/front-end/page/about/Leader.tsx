import React from 'react';
import { Users, Mail, Briefcase, Award, Linkedin, BookOpen, Clock, Shield, Target, GitMerge } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  id?: string; // Technical ID
  expertise?: string[]; // Technical expertise areas
  yearsOfExperience?: number; // Experience in years
  education?: string; // Educational background
}

interface LeadershipTeamProps {
  className?: string;
  sectionTitle?: string;
  heading?: React.ReactNode;
  teamMembers?: TeamMember[];
  companyName?: string;
}

const LeadershipTeam: React.FC<LeadershipTeamProps> = ({
  className = '',
  sectionTitle = 'Our Team',
  heading = <>Leadership <span className="text-primary-600">Team</span></>,
  companyName = 'CQS',
  teamMembers = [
    {
      name: 'Robert Chen',
      position: 'Chief Executive Officer',
      bio: 'With over 25 years of experience in precision manufacturing, Robert leads CQS with a focus on technical excellence and strategic growth in the global automotive components market.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      id: 'CEO-001',
      expertise: ['Strategic Leadership', 'Manufacturing Excellence', 'Global Markets'],
      yearsOfExperience: 25,
      education: 'MBA, Manufacturing Engineering'
    },
    {
      name: 'Sarah Nguyen',
      position: 'Chief Technical Officer',
      bio: 'A mechanical engineering PhD with expertise in advanced aluminum alloys, Sarah drives CQS\'s technical innovation, overseeing R&D and new manufacturing process implementation.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      id: 'CTO-002',
      expertise: ['Aluminum Alloys', 'Process Design', 'R&D Management'],
      yearsOfExperience: 18,
      education: 'PhD, Mechanical Engineering'
    },
    {
      name: 'Michael Tran',
      position: 'Chief Operations Officer',
      bio: 'Michael brings 18 years of automotive manufacturing experience, optimizing CQS\'s production systems and ensuring operational excellence across all facilities.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      id: 'COO-003',
      expertise: ['Operational Excellence', 'Supply Chain', 'Lean Manufacturing'],
      yearsOfExperience: 18,
      education: 'MS, Industrial Engineering'
    }
  ]
}) => {
  // Technical patterns
  const gridPatternClass = "bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]";
  const diagonalPatternClass = "bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:8px_8px]";

  // Current year for reference codes
  const currentYear = new Date().getFullYear();

  return (
    <section className={`py-16 md:py-24 relative overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className={`absolute inset-0 opacity-5 pointer-events-none ${gridPatternClass}`}></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#eee_50px,#eee_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#eee_50px,#eee_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.4]"></div>

      {/* Technical corner accents */}
      <div className="absolute top-12 right-12 w-24 h-24 border-t border-r border-neutral-300 hidden lg:block"></div>
      <div className="absolute bottom-12 left-12 w-24 h-24 border-b border-l border-neutral-300 hidden lg:block"></div>

      {/* Technical measurement marks */}
      <div className="absolute top-0 left-0 right-0 h-2 flex opacity-30 hidden md:flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-neutral-400/20 relative">
            {i % 5 === 0 && (
              <div className="absolute top-0 right-0 w-0.5 h-2 bg-neutral-400/50"></div>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          {/* Technical label with enhanced styling */}
          <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
            <Users className="mr-2" size={14} />
            <span className="text-sm font-medium tracking-wider uppercase">{sectionTitle}</span>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center relative">
            {heading}
            <div className="absolute -top-2 -right-3 text-xs text-primary-500 font-mono opacity-60">[exec]</div>
          </h2>

          <div className="w-20 h-0.5 bg-neutral-300 mb-8 relative">
            <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
          </div>

          {/* Technical reference number */}
          <div className="text-xs text-neutral-500 font-mono flex items-center">
            <span className="mr-2">REF</span>
            <span className="text-primary-500 mr-2">{companyName}-LEADERSHIP-{currentYear}</span>
            <div className="w-6 h-px bg-neutral-300"></div>
          </div>
        </div>

        {/* Technical index line with markers */}
        <div className="w-full h-px bg-neutral-200 mb-12 relative max-w-5xl mx-auto hidden md:block">
          <div className="absolute -top-3 left-0 text-xs font-mono text-neutral-500">PERSONNEL.INDEX</div>
          <div className="absolute -top-3 right-0 text-xs font-mono text-neutral-500">EXP.MATRIX</div>
          {teamMembers.map((member, index) => (
            <div
              key={`marker-${index}`}
              className="absolute -top-1 w-0.5 h-2 bg-primary-600"
              style={{ left: `${(index + 1) * 33.33}%` }}
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs font-mono text-primary-600">
                {member.id || `LEAD-${index+1}`}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={`team-member-${index}`}
              className="bg-white border border-neutral-200 shadow-sm overflow-hidden group relative"
            >
              {/* Technical corner elements */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-neutral-300 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-neutral-300 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Technical ID badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-mono px-2 py-1 border border-neutral-200 z-20 flex items-center">
                <span className="text-primary-600 mr-1">ID:</span>
                {member.id || `EXEC-00${index+1}`}
              </div>

              {/* Image container with technical elements */}
              <div className="relative">
                {/* Measurement marks on image */}
                <div className="absolute left-0 top-0 bottom-0 w-1 z-10 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex-1 border-b border-white/30 relative">
                      {i % 2 === 0 && (
                        <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-white/50"></div>
                      )}
                    </div>
                  ))}
                </div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Technical overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className={`absolute inset-0 ${diagonalPatternClass} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                {/* Experience badge */}
                {member.yearsOfExperience && (
                  <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-sm border-l border-primary-500 flex items-center">
                    <Clock size={12} className="mr-1 text-primary-400" />
                    <span>{member.yearsOfExperience}+ YRS</span>
                  </div>
                )}

                {/* Technical hover info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-neutral-900/80 backdrop-blur-sm text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <div className="text-xs mb-2 font-medium uppercase tracking-wider text-neutral-400">Technical Expertise</div>
                  <div className="flex flex-wrap gap-1">
                    {(member.expertise || ['Leadership']).map((skill, skillIndex) => (
                      <div key={`skill-${index}-${skillIndex}`} className="text-xs bg-neutral-800 px-2 py-1 rounded-sm border-l border-primary-600/50">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Position badge */}
                <div className="absolute -bottom-6 left-6 right-6 bg-primary-600/90 text-white py-2 px-3 text-center shadow-md backdrop-blur-sm transform -translate-y-0 group-hover:-translate-y-4 transition-transform">
                  <div className="text-xs uppercase tracking-wider">{member.position}</div>
                </div>
              </div>

              <div className="p-6 pt-8">
                {/* Name with technical styling */}
                <div className="flex items-center mb-4">
                  <div className="w-1 h-8 bg-primary-500 mr-3"></div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
                    {member.education && (
                      <div className="text-xs text-neutral-500 font-mono mt-1">
                        <BookOpen size={10} className="inline mr-1" />
                        {member.education}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bio with technical border */}
                <div className="relative mb-4">
                  <div className="absolute top-0 bottom-0 left-0 w-px bg-neutral-200"></div>
                  <p className="text-neutral-600 text-sm leading-relaxed pl-3">
                    {member.bio}
                  </p>
                </div>

                {/* Technical footer */}
                <div className="mt-4 pt-3 border-t border-dashed border-neutral-200 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-neutral-50 border border-neutral-200 flex items-center justify-center rounded-full">
                      <Mail size={12} className="text-neutral-500" />
                    </div>
                    <div className="w-6 h-6 bg-neutral-50 border border-neutral-200 flex items-center justify-center rounded-full">
                      <Linkedin size={12} className="text-neutral-500" />
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400">
                    {member.id || `P${index+1}`}/<span className="text-primary-500">{companyName}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical org chart indicator */}
        <div className="mt-16 relative flex justify-center max-w-5xl mx-auto">
          <div className="text-xs font-mono text-neutral-500 flex items-center">
            <div className="w-8 h-px bg-neutral-300 mr-2"></div>
            <GitMerge size={14} className="text-primary-500 mr-2" />
            <span>ORGANIZATIONAL STRUCTURE: EXECUTIVE LEADERSHIP TEAM</span>
            <div className="w-8 h-px bg-neutral-300 ml-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
