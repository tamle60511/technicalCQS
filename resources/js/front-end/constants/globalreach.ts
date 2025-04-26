import { Building, Calendar, Globe, Shield } from "lucide-react";

export  const companyStats = [
    {
      label: "Established",
      value: "2002",
      icon: Calendar,
      code: "EST-2002",
      growth: "+21 years"
    },
    {
      label: "Headquarters",
      value: "Vietnam",
      icon: Building,
      code: "HQ-VNM",
      growth: "15,000 m²"
    },
    {
      label: "Global Markets",
      value: "8+ Countries",
      icon: Globe,
      code: "GLB-MKT",
      growth: "+3 in 5 years"
    },
    {
      label: "Certification",
      value: "IATF 16949",
      icon: Shield,
      code: "CERT-IATF",
      growth: "ISO 9001, 14001"
    }
  ];

  // Global presence data
 export const globalPresence = [
    { region: "Asia", countries: ["Vietnam", "China", "Japan", "Taiwan"], marketShare: 65 },
    { region: "North America", countries: ["USA", "Canada", "Mexico"], marketShare: 20 },
    { region: "Europe", countries: ["Italy", "Germany"], marketShare: 15 }
  ];
