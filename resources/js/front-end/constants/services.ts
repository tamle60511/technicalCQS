import { Factory, Hammer, Package, Paintbrush, Settings, Wrench } from "lucide-react";
import { Service } from "../types/services";


export const defaultServices: Service[] = [
    {
      title: 'High Pressure Die Casting',
      description: 'Advanced aluminum die casting with machines ranging from 250 to 1,650 tons',
      icon: Factory,
      code: 'HPDC',
      capacityLevel: 90,
      precisionLevel: 95,
      compatibility: ['A380', 'ADC12', 'A383', 'A356'],
      status: 'active',
      techSpecs: 'Machine Capacity: 250-1,650 tons | Precision: ±0.05mm'
    },
    {
      title: 'CNC Precision Processing',
      description: 'High-precision CNC machining for complex component manufacturing',
      icon: Settings,
      code: 'CNC',
      capacityLevel: 95,
      precisionLevel: 98,
      compatibility: ['All Aluminum Alloys', 'Steel Components'],
      status: 'active',
      techSpecs: 'Axis: 3-5 | Precision: ±0.02mm | CAM: Integrated'
    },
    {
      title: 'Gravity Die Casting',
      description: 'Specialized gravity casting for premium aluminum components',
      icon: Hammer,
      code: 'GDC',
      capacityLevel: 85,
      precisionLevel: 90,
      compatibility: ['A356', 'A357', 'ADC12'],
      status: 'active',
      techSpecs: 'Max Size: 800mm | Wall Thickness: 3mm+ | T6 Heat Treatment'
    },
    {
      title: 'Surface Treatment',
      description: 'Professional painting and surface finishing for enhanced aesthetics and protection',
      icon: Paintbrush,
      code: 'PNT',
      capacityLevel: 88,
      precisionLevel: 92,
      compatibility: ['Die Cast Parts', 'CNC Machined Components'],
      status: 'active',
      techSpecs: 'E-Coating | Powder Coating | Anodizing | Chromating'
    },
    {
      title: 'Assembly Services',
      description: 'Comprehensive assembly solutions with rigorous quality control',
      icon: Wrench,
      code: 'ASM',
      capacityLevel: 92,
      precisionLevel: 94,
      compatibility: ['All CQS Components', 'Client-Provided Parts'],
      status: 'active',
      techSpecs: 'Semi/Full Automation | Torque Verification | Vision Systems'
    },
    {
      title: 'Packaging & Logistics',
      description: 'Global distribution to Taiwan, the US, Canada, Mexico, Japan, Italy, China, and Southeast Asia',
      icon: Package,
      code: 'PKG',
      capacityLevel: 94,
      precisionLevel: 90,
      compatibility: ['All CQS Products', 'MRO Components'],
      status: 'active',
      techSpecs: 'Global Shipping | JIT Delivery | 8+ Countries Served'
    }
  ];
