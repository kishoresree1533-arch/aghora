<?php
// server/seed.php
require_once 'db.php';

// Helper for image paths - assuming they are in assets folder on server
// or we can keep them as they are in initial data for now if they are relative to root
function getAsset($name)
{
    return "/src/assets/" . $name;
}

$initialProjects = [
    [
        'title' => "Marina Heights Tower",
        'category' => "hvac",
        'type' => "Commercial",
        'location' => "Coimbatore, Tamil Nadu",
        'scope' => "Complete HVAC design for 45-story mixed-use tower including VRF systems and district cooling integration.",
        'image' => getAsset("marina-heights.jpg"),
    ],
    [
        'title' => "Al Rashid Hospital Complex",
        'category' => "electrical",
        'type' => "Healthcare",
        'location' => "Coimbatore, Tamil Nadu",
        'scope' => "Power distribution, emergency systems, and medical-grade electrical infrastructure for 300-bed hospital.",
        'image' => "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
    ],
    [
        'title' => "Palm Residences Phase 2",
        'category' => "plumbing",
        'type' => "Residential",
        'location' => "Nilgiris, Tamil Nadu",
        'scope' => "Sustainable plumbing design with greywater recycling for 150 luxury villas.",
        'image' => "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000",
    ],
    [
        'title' => "Gulf Industrial Park",
        'category' => "fire",
        'type' => "Industrial",
        'location' => "Coimbatore Industrial Estate",
        'scope' => "Comprehensive fire protection systems including high-hazard sprinkler design and FM-200 systems.",
        'image' => getAsset("gulf-industrial-park.jpg"),
    ],
    [
        'title' => "Emirates Financial Center",
        'category' => "elv",
        'type' => "Commercial",
        'location' => "DIFC, Dubai",
        'scope' => "Integrated BMS, security systems, and smart building infrastructure for Class A office complex.",
        'image' => "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000",
    ],
    [
        'title' => "Sunset Mall Expansion",
        'category' => "hvac",
        'type' => "Retail",
        'location' => "Sharjah, UAE",
        'scope' => "Energy-efficient HVAC retrofit and expansion for 200,000 sqm retail development.",
        'image' => getAsset("Sunset Mall Expansion.jpg"),
    ],
    [
        'title' => "Skyline Data Center",
        'category' => "elv",
        'type' => "Technology",
        'location' => "Coimbatore, Tamil Nadu",
        'scope' => "Tier III data center ELV systems, carrier-neutral connectivity, and advanced security infrastructure.",
        'image' => getAsset("skyline-data-center.jpg"),
    ],
    [
        'title' => "Grand Terminal Expansion",
        'category' => "hvac",
        'type' => "Infrastructure",
        'location' => "Dubai International Airport",
        'scope' => "Specialized aircraft cooling systems and large-scale terminal air handling units.",
        'image' => getAsset("Grand Terminal Expansion.jpg"),
    ]
];

$initialServices = [
    [
        'id' => "hvac",
        'icon' => "Wind",
        'title' => "HVAC SYSTEMS DESIGN",
        'subtitle' => "CLIMATE CONTROL EXCELLENCE",
        'description' => "We provide professional HVAC system design services tailored for commercial, industrial, and residential buildings. Our expert HVAC engineering team delivers energy-efficient heating, ventilation, and air conditioning solutions that enhance indoor comfort, improve air quality, and reduce operational costs.",
        'image' => getAsset("hvac-engineering-latest.jpg"),
        'capabilities' => [
            "Central air conditioning systems",
            "Variable Refrigerant Flow (VRF) systems",
            "Chilled water systems design",
            "District cooling integration",
            "Heat recovery systems",
            "Clean room and specialized HVAC",
            "Energy modeling and optimization"
        ]
    ],
    [
        'id' => "electrical",
        'icon' => "Zap",
        'title' => "ELECTRICAL ENGINEERING",
        'subtitle' => "Power Your Vision",
        'description' => "We provide end-to-end electrical engineering solutions designed to deliver safe, efficient, and dependable power systems. Our expertise covers commercial, industrial, and residential projects, ensuring optimal performance, regulatory compliance, and long-term reliability",
        'image' => getAsset("innovative-engineering.jpg"),
        'capabilities' => [
            "High and low voltage distribution",
            "Emergency power systems",
            "Lighting design and controls",
            "Power quality analysis",
            "Renewable energy integration"
        ]
    ],
    [
        'id' => "plumbing",
        'icon' => "Droplets",
        'title' => "PLUMBING & DRAINAGE",
        'subtitle' => "Sustainable Water Solutions",
        'description' => "We provide expert plumbing and drainage system design services for commercial, industrial, and residential buildings. Our engineering approach focuses on water efficiency, sustainability, and compliance with health and safety standards.",
        'image' => getAsset("phe-engineering-latest.jpg"),
        'capabilities' => [
            "Domestic water supply systems",
            "Sanitary drainage design",
            "Stormwater management",
            "Water treatment systems",
            "Greywater recycling"
        ]
    ],
    [
        'id' => "fire",
        'icon' => "Flame",
        'title' => "FIRE PROTECTION SYSTEMS",
        'subtitle' => "LIFE SAFETY FIRST",
        'description' => "We design and deliver comprehensive fire protection solutions that protect lives, assets, and infrastructure. Our systems combine advanced detection, suppression, and evacuation technologies to ensure rapid response and maximum safety in critical situations.",
        'image' => getAsset("Fire Protection.jpg"),
        'capabilities' => [
            "Fire detection and alarm systems",
            "Sprinkler system design",
            "FM-200 and clean agent systems",
            "Fire pump systems",
            "Smoke management systems"
        ]
    ],
    [
        'id' => "elv",
        'icon' => "Shield",
        'title' => "ELV SYSTEMS",
        'subtitle' => "SMART BUILDING INTEGRATION",
        'description' => "We deliver advanced Extra Low Voltage (ELV) solutions that power intelligent, secure, and seamlessly connected buildings. Our integrated systems enhance operational efficiency, strengthen security, and improve overall user experience across commercial, industrial, and residential environments.",
        'image' => getAsset("elv-engineering-latest.jpg"),
        'capabilities' => [
            "Building Management Systems (BMS)",
            "Access control and security",
            "CCTV and surveillance",
            "Structured cabling",
            "AV systems"
        ]
    ]
];

try {
    // Clear existing data
    $pdo->exec("TRUNCATE TABLE projects");
    $pdo->exec("DELETE FROM services"); // TRUNCATE might fail if there are constraints or if id is not auto-increment in some DBs

    // Insert Projects
    $stmtProj = $pdo->prepare("INSERT INTO projects (title, category, type, location, scope, image) VALUES (?, ?, ?, ?, ?, ?)");
    foreach ($initialProjects as $p) {
        $stmtProj->execute([
            $p['title'],
            $p['category'],
            $p['type'],
            $p['location'],
            $p['scope'],
            $p['image']
        ]);
    }

    // Insert Services
    $stmtServ = $pdo->prepare("INSERT INTO services (id, title, subtitle, description, icon, image, capabilities) VALUES (?, ?, ?, ?, ?, ?, ?)");
    foreach ($initialServices as $s) {
        $stmtServ->execute([
            $s['id'],
            $s['title'],
            $s['subtitle'],
            $s['description'],
            $s['icon'],
            $s['image'],
            json_encode($s['capabilities'])
        ]);
    }

    echo "Successfully seeded database with " . count($initialProjects) . " projects and " . count($initialServices) . " services.";
} catch (PDOException $e) {
    echo "Seeding failed: " . $e->getMessage();
}
