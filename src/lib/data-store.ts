import { Wind, Zap, Droplets, Flame, Shield, Cpu, Briefcase } from "lucide-react";

// Image Path Helper
const getAsset = (name: string) => `/src/assets/${name}`;

// Initial data for Projects
export const initialProjects = [
    {
        id: 1,
        title: "Marina Heights Tower",
        category: "hvac",
        type: "Commercial",
        location: "Coimbatore, Tamil Nadu",
        scope: "Complete HVAC design for 45-story mixed-use tower including VRF systems and district cooling integration.",
        image: getAsset("marina-heights.jpg"),
    },
    {
        id: 2,
        title: "Al Rashid Hospital Complex",
        category: "electrical",
        type: "Healthcare",
        location: "Coimbatore, Tamil Nadu",
        scope: "Power distribution, emergency systems, and medical-grade electrical infrastructure for 300-bed hospital.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 3,
        title: "Palm Residences Phase 2",
        category: "plumbing",
        type: "Residential",
        location: "Nilgiris, Tamil Nadu",
        scope: "Sustainable plumbing design with greywater recycling for 150 luxury villas.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 4,
        title: "Gulf Industrial Park",
        category: "fire",
        type: "Industrial",
        location: "Coimbatore Industrial Estate",
        scope: "Comprehensive fire protection systems including high-hazard sprinkler design and FM-200 systems.",
        image: getAsset("gulf-industrial-park.jpg"),
    },
    {
        id: 5,
        title: "Emirates Financial Center",
        category: "elv",
        type: "Commercial",
        location: "DIFC, Dubai",
        scope: "Integrated BMS, security systems, and smart building infrastructure for Class A office complex.",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 6,
        title: "Sunset Mall Expansion",
        category: "hvac",
        type: "Retail",
        location: "Sharjah, UAE",
        scope: "Energy-efficient HVAC retrofit and expansion for 200,000 sqm retail development.",
        image: getAsset("Sunset Mall Expansion.jpg"),
    },
    {
        id: 10,
        title: "Skyline Data Center",
        category: "elv",
        type: "Technology",
        location: "Coimbatore, Tamil Nadu",
        scope: "Tier III data center ELV systems, carrier-neutral connectivity, and advanced security infrastructure.",
        image: getAsset("skyline-data-center.jpg"),
    },
    {
        id: 11,
        title: "Grand Terminal Expansion",
        category: "hvac",
        type: "Infrastructure",
        location: "Dubai International Airport",
        scope: "Specialized aircraft cooling systems and large-scale terminal air handling units.",
        image: getAsset("Grand Terminal Expansion.jpg"),
    }
];

// Initial data for Services
export const initialServices = [
    {
        id: "hvac",
        icon: "Wind",
        title: "HVAC Systems Design",
        subtitle: "Climate Control Excellence",
        description: "Our HVAC engineering team designs innovative heating, ventilation, and air conditioning systems that optimize comfort, energy efficiency, and indoor air quality for all building types.",
        image: getAsset("hvac-engineering-latest.jpg"),
        capabilities: [
            "Central air conditioning systems",
            "Variable Refrigerant Flow (VRF) systems",
            "Chilled water systems design",
            "District cooling integration",
            "Heat recovery systems",
            "Clean room and specialized HVAC",
            "Energy modeling and optimization"
        ]
    },
    {
        id: "electrical",
        icon: "Zap",
        title: "Electrical Engineering",
        subtitle: "Power Your Vision",
        description: "We deliver comprehensive electrical engineering solutions that ensure reliable power distribution, safety, and efficiency for commercial, industrial, and residential projects.",
        image: getAsset("innovative-engineering.jpg"),
        capabilities: [
            "High and low voltage distribution",
            "Emergency power systems",
            "Lighting design and controls",
            "Power quality analysis",
            "Renewable energy integration"
        ]
    },
    {
        id: "plumbing",
        icon: "Droplets",
        title: "Plumbing & Drainage",
        subtitle: "Sustainable Water Solutions",
        description: "Our plumbing engineers design efficient water supply and drainage systems that conserve resources while meeting the highest standards of hygiene and performance.",
        image: getAsset("phe-engineering-latest.jpg"),
        capabilities: [
            "Domestic water supply systems",
            "Sanitary drainage design",
            "Stormwater management",
            "Water treatment systems",
            "Greywater recycling"
        ]
    },
    {
        id: "fire",
        icon: "Flame",
        title: "Fire Protection Systems",
        subtitle: "Life Safety First",
        description: "We design comprehensive fire protection systems that safeguard lives and property through advanced detection, suppression, and evacuation solutions.",
        image: getAsset("Fire Protection.jpg"),
        capabilities: [
            "Fire detection and alarm systems",
            "Sprinkler system design",
            "FM-200 and clean agent systems",
            "Fire pump systems",
            "Smoke management systems"
        ]
    },
    {
        id: "elv",
        icon: "Shield",
        title: "ELV Systems",
        subtitle: "Smart Building Integration",
        description: "Our Extra Low Voltage systems expertise covers the full spectrum of building technology, creating intelligent environments that enhance security, communication, and comfort.",
        image: getAsset("elv-engineering-latest.jpg"),
        capabilities: [
            "Building Management Systems (BMS)",
            "Access control and security",
            "CCTV and surveillance",
            "Structured cabling",
            "AV systems"
        ]
    }
];

// Store functions
export const getData = (key: string, initialData: any) => {
    if (typeof window === "undefined") return initialData;
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
    localStorage.setItem(key, JSON.stringify(initialData));
    return initialData;
};

export const saveData = (key: string, data: any) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, JSON.stringify(data));
};

export const resetData = () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("projects");
    localStorage.removeItem("services");
    window.location.reload();
};
