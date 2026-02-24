import { Wind, Zap, Droplets, Flame, Shield, Cpu, Briefcase } from "lucide-react";

// Server API path (relative to your domain)
const API_BASE = "/server";

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
        title: "HVAC SYSTEMS DESIGN",
        subtitle: "CLIMATE CONTROL EXCELLENCE",
        description: "We provide professional HVAC system design services tailored for commercial, industrial, and residential buildings. Our expert HVAC engineering team delivers energy-efficient heating, ventilation, and air conditioning solutions that enhance indoor comfort, improve air quality, and reduce operational costs.",
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
        title: "ELECTRICAL ENGINEERING",
        subtitle: "Power Your Vision",
        description: "We provide end-to-end electrical engineering solutions designed to deliver safe, efficient, and dependable power systems. Our expertise covers commercial, industrial, and residential projects, ensuring optimal performance, regulatory compliance, and long-term reliability",
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
        title: "PLUMBING & DRAINAGE",
        subtitle: "Sustainable Water Solutions",
        description: "We provide expert plumbing and drainage system design services for commercial, industrial, and residential buildings. Our engineering approach focuses on water efficiency, sustainability, and compliance with health and safety standards.",
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
        title: "FIRE PROTECTION SYSTEMS",
        subtitle: "LIFE SAFETY FIRST",
        description: "We design and deliver comprehensive fire protection solutions that protect lives, assets, and infrastructure. Our systems combine advanced detection, suppression, and evacuation technologies to ensure rapid response and maximum safety in critical situations.",
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
        title: "ELV SYSTEMS",
        subtitle: "SMART BUILDING INTEGRATION",
        description: "We deliver advanced Extra Low Voltage (ELV) solutions that power intelligent, secure, and seamlessly connected buildings. Our integrated systems enhance operational efficiency, strengthen security, and improve overall user experience across commercial, industrial, and residential environments.",
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

    // Sync with server if on production
    const endpoint = key === "projects" ? "projects.php" : "services.php";
    // We only sync the last action for efficiency (this is a simplified approach)
    // In a full implementation, we'd call the POST/PUT specifically in the component
};

// PHP Sync Helpers
export const syncProjects = async () => {
    try {
        const res = await fetch(`${API_BASE}/projects.php`);
        const data = await res.json();
        if (data && data.length > 0) {
            localStorage.setItem("projects", JSON.stringify(data));
            return data;
        }
    } catch (e) { console.error("Server sync failed", e); }
    return getData("projects", initialProjects);
};

export const syncServices = async () => {
    try {
        const res = await fetch(`${API_BASE}/services.php`);
        const data = await res.json();
        if (data && data.length > 0) {
            localStorage.setItem("services", JSON.stringify(data));
            return data;
        }
    } catch (e) { console.error("Server sync failed", e); }
    return getData("services", initialServices);
};

export const resetData = () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("projects");
    localStorage.removeItem("services");
    window.location.reload();
};
