import {
    Monitor, Info, Cpu, Database, Globe, AlertCircle, Terminal,
    Hexagon, Settings, Layers, BoxSelect, Zap
  } from 'lucide-react';
import { type NavItem } from '../types/types';

export const navItems: NavItem[] = [
    { label: 'Home', href: '/', icon: Monitor, code: 'NAV-01' },
    { label: 'About', href: '/about', icon: Info, code: 'NAV-02' },
    {
      label: 'Technologies',
      href: '/technologies',
      hasDropdown: true,
      icon: Cpu,
      code: 'NAV-03',
      dropdownItems: [
        { label: 'HPDC', href: '/technologies/hpdc', icon: Hexagon, code: 'TECH-01' },
        { label: 'CNC', href: '/technologies/cnc', icon: Settings, code: 'TECH-02' },
        { label: 'GDC', href: '/technologies/gdc', icon: Layers, code: 'TECH-03' },
        { label: 'Painting', href: '/technologies/painting', icon: BoxSelect, code: 'TECH-04', isNew: true },
      ],
    },
    {
      label: 'Products',
      href: '/products',
      hasDropdown: true,
      icon: Database,
      code: 'NAV-04',
      dropdownItems: [
        { label: 'AL. Wheel', href: '/products/el-wheel', icon: Hexagon, code: 'PROD-01' },
        { label: 'Light-Weight Products', href: '/products/lightweight', icon: Layers, code: 'PROD-02', isNew: true },
        { label: 'Green Energy Products', href: '/products/gren-energy', icon: Zap, code: 'PROD-03' },
        { label: 'Agricultural Products', href: '/products/agricultura', icon: Globe, code: 'PROD-04' },
      ],
    },
    {
      label: 'Industries',
      href: '/industry',
      hasDropdown: true,
      icon: Globe,
      code: 'NAV-05',
      dropdownItems: [
        { label: 'Industry 1', href: '/industry/industry1', icon: Database, code: 'IND-01' },
        { label: 'Industry 2', href: '/industry/industry2', icon: Database, code: 'IND-02' },
        { label: 'Industry 3', href: '/industry/industry3', icon: Database, code: 'IND-03' },
      ],
    },
    { label: 'News', href: '/news', icon: AlertCircle, code: 'NAV-06' },
    { label: 'Contact Us', href: '/contact', isButton: true, icon: Terminal, code: 'NAV-07' },
  ];
