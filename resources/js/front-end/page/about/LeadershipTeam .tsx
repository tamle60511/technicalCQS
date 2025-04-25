import React, { useState } from 'react';
import { Users, Mail, Briefcase, Award, Linkedin, BookOpen, Clock, Shield, Target, GitMerge, Terminal, BarChart2, ChevronRight, User, Code, Database, CheckCircle, AlertCircle, Cpu, Search, ChevronDown, RotateCw, Layers, FileText, Star, Zap, Globe } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  id?: string; // Technical ID
  expertise?: string[]; // Technical expertise areas
  yearsOfExperience?: number; // Experience in years
  education?: string; // Educational background
  projects?: number;
  patents?: number;
  certifications?: string[];
  responsibilities?: string[]; // Key responsibilities
  achievements?: string[]; // Notable achievements
  previousExperience?: string; // Prior work experience
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
  sectionTitle = 'Executive Leadership',
  heading = <>Management <span className="text-primary-600">Team</span></>,
  companyName = 'CQS',
  teamMembers = [
    {
      name: 'CEO-001',
      position: 'Founder & Chief Executive Officer',
      bio: 'With 28 years of experience in aluminum die casting, Mr. Minh founded CQS in 2002 with a vision to create a world-class precision components manufacturer. His leadership has established CQS as a trusted partner for automotive manufacturers across Asia, Europe, and North America.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      id: 'CEO-001',
      expertise: ['Strategic Leadership', 'Die Casting Technology', 'International Business'],
      yearsOfExperience: 28,
      education: 'MBA, Mechanical Engineering',
      projects: 125,
      patents: 8,
      certifications: ['ISO 9001 Lead Auditor', 'Six Sigma Black Belt'],
      responsibilities: ['Global Business Strategy', 'Stakeholder Relations', 'Investment Planning'],
      achievements: ['Expanded operations to 3 countries', 'Secured partnership with 5 major automotive OEMs', 'Led company to 300% growth since 2010'],
      previousExperience: 'Former Technical Director at Global Aluminum Technologies (1994-2002)'
    },
    {
      name: 'CTO-002',
      position: 'Chief Technical Officer',
      bio: 'CTO-002 leads our technical innovation and R&D initiatives, specializing in high-performance aluminum alloys and precision manufacturing technologies. Her research has resulted in 12 patents and breakthrough advancements in thin-wall die casting for EV battery housing components.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      id: 'CTO-002',
      expertise: ['Aluminum Metallurgy', 'Process Innovation', 'Automotive Engineering'],
      yearsOfExperience: 22,
      education: 'PhD, Materials Science',
      projects: 78,
      patents: 12,
      certifications: ['IATF 16949 Certified', 'Materials Science Specialist'],
      responsibilities: ['R&D Operations', 'Technology Roadmap', 'Patent Portfolio Management'],
      achievements: ['Developed proprietary aluminum alloy formulation', 'Reduced component weight by 35%', 'Led 15 successful R&D projects'],
      previousExperience: 'Senior Research Engineer at Automotive Materials Institute (2001-2008)'
    },
    {
      name: 'COO-003',
      position: 'Chief Operations Officer',
      bio: 'COO-003 oversees all manufacturing operations across our facilities, implementing lean manufacturing principles and IATF 16949 quality standards. His expertise in automated production systems has enabled CQS to achieve industry-leading efficiency with 99.8% on-time delivery performance.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      id: 'COO-003',
      expertise: ['Manufacturing Excellence', 'Quality Systems', 'Supply Chain Optimization'],
      yearsOfExperience: 25,
      education: 'MS, Industrial Engineering',
      projects: 92,
      patents: 6,
      certifications: ['Lean Six Sigma Master Black Belt', 'CSCP (Certified Supply Chain Professional)'],
      responsibilities: ['Production Operations', 'Quality Management', 'Supply Chain Oversight'],
      achievements: ['Implemented IATF 16949 standards across all facilities', 'Achieved 99.8% on-time delivery rate', 'Reduced production waste by 42%'],
      previousExperience: 'Operations Director at Precision Manufacturing Group (1998-2005)'
    }
  ]
}) => {
  // Technical patterns
  const gridPatternClass = "bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]";
  const gridLinesClass = "bg-[linear-gradient(to_right,transparent_49px,#eee_50px,#eee_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#eee_50px,#eee_51px,transparent_51px)] [background-size:50px_50px]";

  // Current year for reference codes
  const currentYear = new Date().getFullYear();

  // Active executive state
  const [activeExecIndex, setActiveExecIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate total experience
  const totalExperience = teamMembers.reduce((sum, member) => sum + (member.yearsOfExperience || 0), 0);

  // Calculate total patents
  const totalPatents = teamMembers.reduce((sum, member) => sum + (member.patents || 0), 0);

  // Calculate total projects
  const totalProjects = teamMembers.reduce((sum, member) => sum + (member.projects || 0), 0);

  // Handle executive selection with animation
  const handleSelectExec = (index: number) => {
    if (index === activeExecIndex) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveExecIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className={`py-16 md:py-24 bg-white relative overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className={`pointer-events-none absolute inset-0 opacity-[0.03] ${gridPatternClass}`}></div>
      <div className={`pointer-events-none absolute inset-0 opacity-[0.03] ${gridLinesClass}`}></div>

      {/* Technical corner accents with enhanced styling */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-600/20 hidden lg:block">
        <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-primary-500/30"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-600/20 hidden lg:block">
        <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-primary-500/30"></div>
      </div>

      {/* Technical measurement marks */}
      <div className="absolute top-0 left-0 right-0 h-2 flex opacity-30">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-primary-600/20 relative">
            {i % 5 === 0 && (
              <div className="absolute top-0 right-0 w-0.5 h-2 bg-primary-600/50"></div>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Technical section header */}
          <div className="flex flex-col items-center mb-12">
            <div className="border-primary-600 relative mb-6 inline-flex items-center border-l-2 bg-neutral-800/90 px-4 py-2 text-white rounded-sm group">
              <div className="border-primary-400 absolute -top-1 -left-1 h-2 w-2 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="border-primary-400 absolute -right-1 -bottom-1 h-2 w-2 border-r border-b opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Users className="mr-2" size={14} />
              <span className="text-sm font-medium tracking-wider uppercase">{sectionTitle}</span>
            </div>

            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-neutral-900">{heading}</h2>

            <div className="relative mb-8 h-0.5 w-20 bg-neutral-300">
              <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 transform border border-neutral-300"></div>
            </div>

            <div className="relative">
              <p className="mb-12 max-w-2xl text-center text-neutral-600 leading-relaxed">
                Our leadership team brings together extensive experience in engineering, manufacturing, and business management
                to drive innovation and operational excellence.
              </p>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform font-mono text-xs text-neutral-500 flex items-center">
                <span className="mr-2">
                  <Clock size={12} className="inline mr-1 opacity-70" />
                  UPDATED: {new Date().toISOString().split('T')[0]}
                </span>
                <span className="mx-2 inline-block h-px w-12 bg-neutral-300 align-middle"></span>
                <span className="text-primary-600">{companyName}</span>
              </div>
            </div>
          </div>

          {/* Leadership Team Dashboard Header */}
          <div className="bg-white border border-neutral-200 rounded-sm shadow-sm mb-8 relative group hover:border-primary-300 transition-all duration-300">
            {/* Technical corner elements */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center">
                <Terminal size={18} className="text-primary-500 mr-2" />
                <h3 className="font-medium text-neutral-800">Leadership Team Overview</h3>
              </div>
              <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                {companyName}.EXEC.{currentYear}
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Executive Count */}
                <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 flex flex-col">
                  <div className="text-xs text-neutral-500 uppercase mb-2 tracking-wider">Executive Team</div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-50 rounded-sm flex items-center justify-center border border-primary-100">
                      <Users size={24} className="text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-2xl font-bold text-neutral-800">{teamMembers.length}</div>
                      <div className="text-xs text-neutral-500">EXEC OFFICERS</div>
                    </div>
                  </div>
                </div>

                {/* Combined Experience */}
                <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 flex flex-col">
                  <div className="text-xs text-neutral-500 uppercase mb-2 tracking-wider">Combined Experience</div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center border border-blue-100">
                      <Clock size={24} className="text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-2xl font-bold text-neutral-800">{totalExperience}</div>
                      <div className="text-xs text-neutral-500">YEARS EXPERIENCE</div>
                    </div>
                  </div>
                </div>

                {/* Patents */}
                <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 flex flex-col">
                  <div className="text-xs text-neutral-500 uppercase mb-2 tracking-wider">Innovation Metrics</div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-amber-50 rounded-sm flex items-center justify-center border border-amber-100">
                      <FileText size={24} className="text-amber-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-2xl font-bold text-neutral-800">{totalPatents}</div>
                      <div className="text-xs text-neutral-500">PATENTS FILED</div>
                    </div>
                  </div>
                </div>

                {/* Projects Led */}
                <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 flex flex-col">
                  <div className="text-xs text-neutral-500 uppercase mb-2 tracking-wider">Project Leadership</div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-50 rounded-sm flex items-center justify-center border border-emerald-100">
                      <Briefcase size={24} className="text-emerald-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-2xl font-bold text-neutral-800">{totalProjects}+</div>
                      <div className="text-xs text-neutral-500">PROJECTS LED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical documentation footer */}
            <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
              <span>REF: {companyName}.LEADERSHIP.{currentYear}</span>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></div>
                <span>ACTIVE EXECUTIVES: {teamMembers.length}/{teamMembers.length}</span>
              </div>
            </div>
          </div>

          {/* Main content - Leadership Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left column - Executive selector */}
            <div className="md:col-span-4">
              <div className="bg-white border border-neutral-200 rounded-sm shadow-sm h-full relative group hover:border-primary-300 transition-all duration-300">
                {/* Technical corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <Users size={18} className="text-primary-500 mr-2" />
                    <h3 className="font-medium text-neutral-800">Executive Officers</h3>
                  </div>
                  <div className="text-xs font-mono text-neutral-500">
                    TOTAL: {teamMembers.length}
                  </div>
                </div>

                <div className="p-4">
                  {teamMembers.map((member, index) => (
                    <button
                      key={index}
                      className={`w-full text-left mb-3 p-4 border rounded-sm transition-all ${
                        index === activeExecIndex
                            ? 'bg-primary-50 border-primary-200'
                            : 'bg-white border-neutral-200 hover:bg-neutral-50'
                      }`}
                      onClick={() => handleSelectExec(index)}
                    >
                      <div className="flex items-center">
                        <div className="relative">
                          <div className={`w-12 h-12 rounded-sm overflow-hidden border ${
                            index === activeExecIndex ? 'border-primary-300' : 'border-neutral-200'
                          }`}>
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          {/* Technical overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-tr from-primary-900/10 to-transparent pointer-events-none ${
                            index === activeExecIndex ? 'opacity-100' : 'opacity-0'
                          }`}></div>
                          {/* Status indicator */}
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                        </div>

                        <div className="ml-3 flex-1">
                          <div className="font-medium text-neutral-800 group-hover:text-neutral-900 flex items-center text-sm">
                            {member.name}
                            {index === activeExecIndex && (
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full ml-2"></div>
                            )}
                          </div>
                          <div className="text-xs text-neutral-500 mt-0.5">
                            {member.position}
                          </div>
                        </div>
                        <div className="ml-auto">
                          <ChevronRight size={16} className={`${
                            index === activeExecIndex
                                ? 'text-primary-500'
                                : 'text-neutral-400'
                          }`} />
                        </div>
                      </div>

                      {/* Key metrics summary */}
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <div className="text-xs bg-white border border-neutral-100 px-2 py-1 rounded-sm">
                          <div className="text-neutral-500">Experience</div>
                          <div className="font-medium text-neutral-700">{member.yearsOfExperience} Years</div>
                        </div>
                        <div className="text-xs bg-white border border-neutral-100 px-2 py-1 rounded-sm">
                          <div className="text-neutral-500">Patents</div>
                          <div className="font-medium text-neutral-700">{member.patents}</div>
                        </div>
                      </div>
                    </button>
                  ))}

                  {/* Technical footer */}
                  <div className="border-t border-dashed border-neutral-200 mt-4 pt-4 text-xs font-mono text-neutral-500">
                    <div className="flex items-center justify-between">
                      <span>SELECTED: {teamMembers[activeExecIndex].id}</span>
                      <span>REV: 2.{currentYear.toString().substring(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Active executive details */}
            <div className="md:col-span-8">
              <div className="bg-white border border-neutral-200 rounded-sm shadow-sm h-full relative group hover:border-primary-300 transition-all duration-300">
                {/* Technical corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center">
                    <User size={18} className="text-primary-500 mr-2" />
                    <h3 className="font-medium text-neutral-800">Executive Profile</h3>
                  </div>
                  <div className="text-xs font-mono bg-neutral-100 border border-neutral-200 px-2 py-1 rounded-sm">
                    {teamMembers[activeExecIndex].id}.PROFILE
                  </div>
                </div>

                <div className="p-6">
                  <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                      {/* Left side - Personal info */}
                      <div className="md:col-span-2">
                        <div className="mb-5 relative">
                          <div className="aspect-w-4 aspect-h-5 rounded-sm overflow-hidden border border-neutral-200">
                            <img
                              src={teamMembers[activeExecIndex].image}
                              alt={teamMembers[activeExecIndex].name}
                              className="w-full h-full object-cover object-center"
                            />

                            {/* Technical overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            {/* Grid scanning lines effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 pointer-events-none"></div>

                            {/* Scanning line animation */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-primary-400/50 z-30 animate-scan"></div>
                          </div>

                          {/* Technical ID badge */}
                          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-mono px-2 py-1 border border-neutral-200 z-20 flex items-center">
                            <span className="text-primary-600 mr-1">ID:</span>
                            {teamMembers[activeExecIndex].id}
                          </div>

                          {/* Experience badge */}
                          <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-sm border-l border-primary-500 flex items-center">
                            <Clock size={12} className="mr-1 text-primary-400" />
                            <span>{teamMembers[activeExecIndex].yearsOfExperience}+ YRS</span>
                          </div>
                        </div>

                        <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4">
                          <div className="flex items-center mb-4">
                            <div className="w-1 h-8 bg-primary-500 mr-3"></div>
                            <div>
                              <h3 className="text-xl font-bold text-neutral-800">{teamMembers[activeExecIndex].name}</h3>
                              <div className="text-sm text-neutral-600">{teamMembers[activeExecIndex].position}</div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {/* Education */}
                            <div className="flex items-start">
                              <div className="w-8 h-8 bg-blue-50 rounded-sm flex items-center justify-center mt-0.5 border border-blue-100">
                                <BookOpen size={16} className="text-blue-600" />
                              </div>
                              <div className="ml-3">
                                <div className="text-xs text-neutral-500">Education</div>
                                <div className="text-sm font-medium text-neutral-800">
                                  {teamMembers[activeExecIndex].education}
                                </div>
                              </div>
                            </div>

                            {/* Certification */}
                            <div className="flex items-start">
                              <div className="w-8 h-8 bg-emerald-50 rounded-sm flex items-center justify-center mt-0.5 border border-emerald-100">
                                <CheckCircle size={16} className="text-emerald-600" />
                              </div>
                              <div className="ml-3">
                                <div className="text-xs text-neutral-500">Certifications</div>
                                <div className="text-sm font-medium text-neutral-800">
                                  {teamMembers[activeExecIndex].certifications?.join(', ')}
                                </div>
                              </div>
                            </div>

                            {/* Previous Experience */}
                            <div className="flex items-start">
                              <div className="w-8 h-8 bg-amber-50 rounded-sm flex items-center justify-center mt-0.5 border border-amber-100">
                                <Briefcase size={16} className="text-amber-600" />
                              </div>
                              <div className="ml-3">
                                <div className="text-xs text-neutral-500">Previous Role</div>
                                <div className="text-sm font-medium text-neutral-800">
                                  {teamMembers[activeExecIndex].previousExperience}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right side - Executive data and bio */}
                      <div className="md:col-span-3">
                        {/* Key Achievements */}
                        <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 mb-5">
                          <div className="flex items-center mb-4">
                            <Star size={18} className="text-amber-500 mr-2" />
                            <h4 className="font-medium text-neutral-800">Key Achievements</h4>
                          </div>

                          <div className="space-y-2">
                            {teamMembers[activeExecIndex].achievements?.map((achievement, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="w-5 h-5 bg-amber-50 border border-amber-200 rounded-sm flex items-center justify-center mt-0.5">
                                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                </div>
                                <div className="ml-3 text-sm text-neutral-700">
                                  {achievement}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Key Responsibilities */}
                        <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 mb-5">
                          <div className="flex items-center mb-4">
                            <Globe size={18} className="text-blue-500 mr-2" />
                            <h4 className="font-medium text-neutral-800">Key Responsibilities</h4>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {teamMembers[activeExecIndex].responsibilities?.map((responsibility, idx) => (
                              <div key={idx} className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-sm border border-blue-100 flex items-center">
                                <div className="w-1 h-1 bg-blue-500 rounded-full mr-1.5"></div>
                                {responsibility}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bio section */}
                        <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4">
                          <div className="flex items-center mb-4">
                            <Database size={18} className="text-primary-500 mr-2" />
                            <h4 className="font-medium text-neutral-800">Executive Summary</h4>
                          </div>

                          <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                            {teamMembers[activeExecIndex].bio}
                          </p>

                          {/* Innovation stats */}
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-white border border-neutral-200 rounded-sm p-3 flex items-center">
                              <div className="w-8 h-8 bg-primary-50 rounded-full flex items-center justify-center border border-primary-100 mr-3">
                                <Zap size={16} className="text-primary-600" />
                              </div>
                              <div>
                                <div className="text-xs text-neutral-500">Patents Filed</div>
                                <div className="text-lg font-bold text-neutral-800">{teamMembers[activeExecIndex].patents}</div>
                              </div>
                            </div>
                            <div className="bg-white border border-neutral-200 rounded-sm p-3 flex items-center">
                              <div className="w-8 h-8 bg-primary-50 rounded-full flex items-center justify-center border border-primary-100 mr-3">
                                <Target size={16} className="text-primary-600" />
                              </div>
                              <div>
                                <div className="text-xs text-neutral-500">Projects Led</div>
                                <div className="text-lg font-bold text-neutral-800">{teamMembers[activeExecIndex].projects}+</div>
                              </div>
                            </div>
                          </div>

                          {/* Expertise tags */}
                          <div className="mt-4 pt-3 border-t border-dashed border-neutral-200">
                            <div className="text-xs text-neutral-500 mb-2">Technical Expertise</div>
                            <div className="flex flex-wrap gap-2">
                              {teamMembers[activeExecIndex].expertise?.map((skill, idx) => (
                                <div key={idx} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-sm border border-primary-100 flex items-center">
                                  <div className="w-1 h-1 bg-primary-500 rounded-full mr-1.5"></div>
                                  {skill}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical documentation footer */}
                <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
                  <span>REF: {companyName}.{teamMembers[activeExecIndex].id}.{currentYear}</span>
                  <div className="flex space-x-4">
                    <span>VERSION: 2.{currentYear.toString().substring(2)}</span>
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></div>
                      <span>ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical org chart visualization */}
          <div className="mt-8 bg-white border border-neutral-200 rounded-sm shadow-sm relative group hover:border-primary-300 transition-all duration-300">
            {/* Technical corner elements */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center">
                <GitMerge size={18} className="text-primary-500 mr-2" />
                <h3 className="font-medium text-neutral-800">Organizational Structure</h3>
              </div>
              <div className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded-sm text-neutral-600 border border-neutral-200">
                {companyName}.ORG.{currentYear}
              </div>
            </div>

            <div className="p-8 relative">
              {/* Blueprint grid background */}
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:20px_20px]"></div>

              <div className="flex flex-col items-center">
                {/* CEO Node */}
                <div className="mb-8 flex flex-col items-center">
                  <div className="relative w-20 h-20 rounded-full bg-primary-50 border-2 border-primary-200 flex items-center justify-center mb-2">
                    <img
                      src={teamMembers[0].image}
                      alt={teamMembers[0].name}
                      className="w-16 h-16 rounded-full object-cover object-center"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-primary-500/30"></div>
                  </div>
                  <div className="text-sm font-medium text-neutral-800">{teamMembers[0].name}</div>
                  <div className="text-xs text-neutral-500">{teamMembers[0].position}</div>
                </div>

                {/* Connecting line */}
                <div className="w-px h-8 bg-neutral-300"></div>

                {/* Second level execs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-32">
                  {teamMembers.slice(1).map((member, index) => (
                    <div key={index} className="flex flex-col items-center relative">
                      {/* Connector to CEO */}
                      <div className="absolute -top-8 left-1/2 w-px h-8 bg-neutral-300"></div>

                      <div className="relative w-16 h-16 rounded-full bg-primary-50 border-2 border-primary-200 flex items-center justify-center mb-2">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-12 h-12 rounded-full object-cover object-center"
                        />
                        <div className="absolute inset-0 rounded-full border-2 border-primary-500/30"></div>
                      </div>
                      <div className="text-sm font-medium text-neutral-800">{member.name}</div>
                      <div className="text-xs text-neutral-500">{member.position}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical note */}
              <div className="mt-10 text-sm text-neutral-600 border-t border-dashed border-neutral-200 pt-4">
                <div className="flex items-start">
                  <AlertCircle size={16} className="text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>
                    The executive leadership team oversees a global workforce of over 1,000 employees across
                    3 manufacturing facilities, with each executive directly managing specialized departments
                    aligned with their areas of expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical documentation footer */}
            <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-500 flex justify-between items-center">
              <span>REF: {companyName}.ORG.STRUCTURE.{currentYear}</span>
              <div className="flex items-center">
                <span>EST. 2002</span>
                <span className="mx-4">|</span>
                <span>LOCATIONS: 3</span>
                <span className="mx-4">|</span>
                <span>EMPLOYEES: 1,000+</span>
              </div>
            </div>
          </div>

          {/* Technical footer */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center text-xs font-mono text-neutral-500 bg-white px-4 py-2 border border-neutral-200 rounded-sm">
              <Shield size={12} className="mr-1.5 text-primary-500" />
              <span>DOC.{companyName}.LEADERSHIP.{currentYear} | REV 2.{currentYear.toString().substring(2)}</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default LeadershipTeam;
