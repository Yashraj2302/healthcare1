export interface Hospital {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    contact: string;
    type: 'Government' | 'Private' | 'Charity';
    specialties: string[];
    rating: number;
    beds: number;
    emergency: boolean;
    latitude: number;
    longitude: number;
    image?: string;
    description?: string;
}

export interface City {
    name: string;
    hospitals: Hospital[];
}

export interface State {
    name: string;
    cities: City[];
}

// Sample hospital data for major Indian states and cities
export const hospitalData: State[] = [
    {
        name: "Maharashtra",
        cities: [
            {
                name: "Mumbai",
                hospitals: [
                    {
                        id: "mumbai-1",
                        name: "King Edward Memorial Hospital",
                        address: "Parel, Mumbai, Maharashtra 400012",
                        city: "Mumbai",
                        state: "Maharashtra",
                        pincode: "400012",
                        contact: "+91-22-2410-2222",
                        type: "Government",
                        specialties: ["General Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology"],
                        rating: 4.2,
                        beds: 1200,
                        emergency: true,
                        latitude: 18.9750,
                        longitude: 72.8333,
                        image: "https://images.unsplash.com/photo-1581056771259-6a8497216c10?w=400&h=300&fit=crop",
                        description: "One of Mumbai's oldest and largest government hospitals providing comprehensive healthcare services."
                    },
                    {
                        id: "mumbai-2",
                        name: "Lilavati Hospital and Research Centre",
                        address: "Bandra West, Mumbai, Maharashtra 400050",
                        city: "Mumbai",
                        state: "Maharashtra",
                        pincode: "400050",
                        contact: "+91-22-6140-0100",
                        type: "Private",
                        specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology"],
                        rating: 4.6,
                        beds: 312,
                        emergency: true,
                        latitude: 19.0330,
                        longitude: 72.8270,
                        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
                        description: "Premier private hospital known for advanced medical technology and patient care."
                    },
                    {
                        id: "mumbai-3",
                        name: "Jaslok Hospital",
                        address: "Peddar Road, Mumbai, Maharashtra 400026",
                        city: "Mumbai",
                        state: "Maharashtra",
                        pincode: "400026",
                        contact: "+91-22-6621-8888",
                        type: "Private",
                        specialties: ["Cardiac Surgery", "Neurology", "Gastroenterology", "Nephrology"],
                        rating: 4.5,
                        beds: 340,
                        emergency: true,
                        latitude: 18.9939,
                        longitude: 72.8180,
                        image: "https://images.unsplash.com/photo-1581056771259-6a8497216c10?w=400&h=300&fit=crop",
                        description: "Multi-specialty hospital with state-of-the-art facilities and renowned specialists."
                    }
                ]
            },
            {
                name: "Pune",
                hospitals: [
                    {
                        id: "pune-1",
                        name: "Deenanath Mangeshkar Hospital",
                        address: "Erandwane, Pune, Maharashtra 411004",
                        city: "Pune",
                        state: "Maharashtra",
                        pincode: "411004",
                        contact: "+91-20-2543-0000",
                        type: "Charity",
                        specialties: ["General Medicine", "Surgery", "Cardiology", "Orthopedics"],
                        rating: 4.3,
                        beds: 500,
                        emergency: true,
                        latitude: 18.5204,
                        longitude: 73.8567,
                        image: "https://images.unsplash.com/photo-1581056771259-6a8497216c10?w=400&h=300&fit=crop",
                        description: "Charitable hospital providing quality healthcare at affordable costs."
                    },
                    {
                        id: "pune-2",
                        name: "Sahyadri Super Speciality Hospital",
                        address: "Deccan Gymkhana, Pune, Maharashtra 411004",
                        city: "Pune",
                        state: "Maharashtra",
                        pincode: "411004",
                        contact: "+91-20-6729-6000",
                        type: "Private",
                        specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology"],
                        rating: 4.4,
                        beds: 200,
                        emergency: true,
                        latitude: 18.5196,
                        longitude: 73.8554,
                        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
                        description: "Advanced super speciality hospital with cutting-edge medical technology."
                    }
                ]
            }
        ]
    },
    {
        name: "Karnataka",
        cities: [
            {
                name: "Bengaluru",
                hospitals: [
                    {
                        id: "bangalore-1",
                        name: "Narayana Health City",
                        address: "Bommasandra, Bengaluru, Karnataka 560099",
                        city: "Bengaluru",
                        state: "Karnataka",
                        pincode: "560099",
                        contact: "+91-80-2297-7777",
                        type: "Private",
                        specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology", "Transplant"],
                        rating: 4.7,
                        beds: 1000,
                        emergency: true,
                        latitude: 12.9716,
                        longitude: 77.5946,
                        image: "https://images.unsplash.com/photo-1581056771259-6a8497216c10?w=400&h=300&fit=crop",
                        description: "Multi-specialty quaternary care hospital with international standards."
                    },
                    {
                        id: "bangalore-2",
                        name: "St. John's Medical College Hospital",
                        address: "Sarjapur Road, Bengaluru, Karnataka 560034",
                        city: "Bengaluru",
                        state: "Karnataka",
                        pincode: "560034",
                        contact: "+91-80-4999-4444",
                        type: "Charity",
                        specialties: ["General Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology"],
                        rating: 4.2,
                        beds: 800,
                        emergency: true,
                        latitude: 12.9698,
                        longitude: 77.6395,
                        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
                        description: "Reputed charitable hospital providing quality healthcare services."
                    },
                    {
                        id: "bangalore-3",
                        name: "Apollo Hospitals",
                        address: "Bannerghatta Road, Bengaluru, Karnataka 560076",
                        city: "Bengaluru",
                        state: "Karnataka",
                        pincode: "560076",
                        contact: "+91-80-2222-2222",
                        type: "Private",
                        specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology", "Nephrology"],
                        rating: 4.5,
                        beds: 500,
                        emergency: true,
                        latitude: 12.9165,
                        longitude: 77.6227,
                        image: "https://images.unsplash.com/photo-1581056771259-6a8497216c10?w=400&h=300&fit=crop",
                        description: "Leading private hospital with comprehensive medical services."
                    }
                ]
            },
            {
                name: "Mysuru",
                hospitals: [
                    {
                        id: "mysuru-1",
                        name: "Mysore Medical College and Research Institute",
                        address: "Irwin Road, Mysuru, Karnataka 570001",
                        city: "Mysuru",
                        state: "Karnataka",
                        pincode: "570001",
                        contact: "+91-821-244-2222",
                        type: "Government",
                        specialties: ["General Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology"],
                        rating: 4.0,
                        beds: 600,
                        emergency: true,
                        latitude: 12.2958,
                        longitude: 76.6394,
                        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
                        description: "Government medical college and hospital serving the Mysuru region."
                    }
                ]
            }
        ]
    },
    {
        name: "Delhi",
        cities: [
            {
                name: "New Delhi",
                hospitals: [
                    {
                        id: "delhi-1",
                        name: "All India Institute of Medical Sciences (AIIMS)",
                        address: "Ansari Nagar, New Delhi, Delhi 110029",
                        city: "New Delhi",
                        state: "Delhi",
                        pincode: "110029",
                        contact: "+91-11-2658-8500",
                        type: "Government",
                        specialties: ["All Specialties", "Research", "Super Speciality"],
                        rating: 4.8,
                        beds: 2500,
                        emergency: true,
                        latitude: 28.5667,
                        longitude: 77.2390,
                        image: "https://images.unsplash.com/photo-1581056771259-6a8497216c10?w=400&h=300&fit=crop",
                        description: "Premier medical institute and hospital providing world-class healthcare."
                    },
                    {
                        id: "delhi-2",
                        name: "Sir Ganga Ram Hospital",
                        address: "Rajendra Place, New Delhi, Delhi 110060",
                        city: "New Delhi",
                        state: "Delhi",
                        pincode: "110060",
                        contact: "+91-11-4225-5225",
                        type: "Private",
                        specialties: ["Cardiology", "Neurology", "Orthopedics", "Gastroenterology", "Nephrology"],
                        rating: 4.6,
                        beds: 675,
                        emergency: true,
                        latitude: 28.6353,
                        longitude: 77.1720,
                        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
                        description: "Leading private hospital known for advanced medical care and technology."
                    },
                    {
                        id: "delhi-3",
                        name: "Max Super Speciality Hospital",
                        address: "Saket, New Delhi, Delhi 110017",
                        city: "New Delhi",
                        state: "Delhi",
                        pincode: "110017",
                        contact: "+91-11-2625-2525",
                        type: "Private",
                        specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology", "Transplant"],
                        rating: 4.5,
                        beds: 450,
                        emergency: true,
                        latitude: 28.5236,
                        longitude: 77.1905,
                        image: "https://images.unsplash.com/photo-1581056771259-6a8497216c10?w=400&h=300&fit=crop",
                        description: "Multi-specialty hospital with comprehensive healthcare services."
                    }
                ]
            },
            {
                name: "Noida",
                hospitals: [
                    {
                        id: "noida-1",
                        name: "Fortis Hospital",
                        address: "Sector 62, Noida, Uttar Pradesh 201301",
                        city: "Noida",
                        state: "Delhi",
                        pincode: "201301",
                        contact: "+91-120-439-7777",
                        type: "Private",
                        specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology"],
                        rating: 4.4,
                        beds: 300,
                        emergency: true,
                        latitude: 28.5355,
                        longitude: 77.3910,
                        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
                        description: "Advanced private hospital with comprehensive medical services."
                    }
                ]
            }
        ]
    },
    {
        name: "Tamil Nadu",
        cities: [
            {
                name: "Chennai",
                hospitals: [
                    {
                        id: "chennai-1",
                        name: "Apollo Hospitals",
                        address: "Greams Lane, Chennai, Tamil Nadu 600006",
                        city: "Chennai",
                        state: "Tamil Nadu",
                        pincode: "600006",
                        contact: "+91-44-2829-0000",
                        type: "Private",
                        specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology", "Transplant"],
                        rating: 4.7,
                        beds: 700,
                        emergency: true,
                        latitude: 13.0827,
                        longitude: 80.2707,
                        image: "https://images.unsplash.com/photo-1581056771259-6a8497216c10?w=400&h=300&fit=crop",
                        description: "Flagship hospital of Apollo Group, providing world-class healthcare."
                    },
                    {
                        id: "chennai-2",
                        name: "Government General Hospital",
                        address: "Park Town, Chennai, Tamil Nadu 600003",
                        city: "Chennai",
                        state: "Tamil Nadu",
                        pincode: "600003",
                        contact: "+91-44-2530-1000",
                        type: "Government",
                        specialties: ["All Specialties", "Teaching Hospital"],
                        rating: 4.1,
                        beds: 2500,
                        emergency: true,
                        latitude: 13.0674,
                        longitude: 80.2376,
                        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
                        description: "Historic government hospital and teaching institution."
                    },
                    {
                        id: "chennai-3",
                        name: "Fortis Malar Hospital",
                        address: "Adyar, Chennai, Tamil Nadu 600020",
                        city: "Chennai",
                        state: "Tamil Nadu",
                        pincode: "600020",
                        contact: "+91-44-4293-9999",
                        type: "Private",
                        specialties: ["Cardiology", "Orthopedics", "Gynecology", "Pediatrics"],
                        rating: 4.4,
                        beds: 200,
                        emergency: true,
                        latitude: 13.0049,
                        longitude: 80.2501,
                        image: "https://images.unsplash.com/photo-1581056771259-6a8497216c10?w=400&h=300&fit=crop",
                        description: "Multi-specialty hospital known for cardiac and orthopedic care."
                    }
                ]
            },
            {
                name: "Coimbatore",
                hospitals: [
                    {
                        id: "coimbatore-1",
                        name: "G.Kuppuswamy Naidu Memorial Hospital",
                        address: "RS Puram, Coimbatore, Tamil Nadu 641002",
                        city: "Coimbatore",
                        state: "Tamil Nadu",
                        pincode: "641002",
                        contact: "+91-422-237-3737",
                        type: "Private",
                        specialties: ["General Medicine", "Surgery", "Cardiology", "Orthopedics"],
                        rating: 4.3,
                        beds: 400,
                        emergency: true,
                        latitude: 11.0168,
                        longitude: 76.9558,
                        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
                        description: "Reputed private hospital serving the Coimbatore region."
                    }
                ]
            }
        ]
    },
    {
        name: "Telangana",
        cities: [
            {
                name: "Hyderabad",
                hospitals: [
                    {
                        id: "hyderabad-1",
                        name: "Yashoda Hospitals",
                        address: "Somajiguda, Hyderabad, Telangana 500082",
                        city: "Hyderabad",
                        state: "Telangana",
                        pincode: "500082",
                        contact: "+91-40-2360-6666",
                        type: "Private",
                        specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology"],
                        rating: 4.5,
                        beds: 500,
                        emergency: true,
                        latitude: 17.3850,
                        longitude: 78.4867,
                        image: "https://images.unsplash.com/photo-1581056771259-6a8497216c10?w=400&h=300&fit=crop",
                        description: "Multi-specialty hospital with advanced medical facilities."
                    },
                    {
                        id: "hyderabad-2",
                        name: "Osmania General Hospital",
                        address: "Afzalgunj, Hyderabad, Telangana 500012",
                        city: "Hyderabad",
                        state: "Telangana",
                        pincode: "500012",
                        contact: "+91-40-2460-0100",
                        type: "Government",
                        specialties: ["All Specialties", "Teaching Hospital"],
                        rating: 4.0,
                        beds: 2700,
                        emergency: true,
                        latitude: 17.3616,
                        longitude: 78.4747,
                        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
                        description: "Historic government hospital and major teaching institution."
                    },
                    {
                        id: "hyderabad-3",
                        name: "Nizam's Institute of Medical Sciences",
                        address: "Punjagutta, Hyderabad, Telangana 500082",
                        city: "Hyderabad",
                        state: "Telangana",
                        pincode: "500082",
                        contact: "+91-40-2354-5454",
                        type: "Government",
                        specialties: ["All Specialties", "Super Speciality", "Research"],
                        rating: 4.4,
                        beds: 1200,
                        emergency: true,
                        latitude: 17.4353,
                        longitude: 78.4483,
                        image: "https://images.unsplash.com/photo-1581056771259-6a8497216c10?w=400&h=300&fit=crop",
                        description: "Premier medical institute and hospital with super speciality services."
                    }
                ]
            }
        ]
    }
];

// Helper functions to get all states, cities, and hospitals
export const getAllStates = (): string[] => {
    return hospitalData.map(state => state.name);
};

export const getCitiesByState = (stateName: string): string[] => {
    const state = hospitalData.find(s => s.name === stateName);
    return state ? state.cities.map(city => city.name) : [];
};

export const getHospitalsByCity = (stateName: string, cityName: string): Hospital[] => {
    const state = hospitalData.find(s => s.name === stateName);
    if (!state) return [];

    const city = state.cities.find(c => c.name === cityName);
    return city ? city.hospitals : [];
};

export const getAllHospitals = (): Hospital[] => {
    return hospitalData.flatMap(state =>
        state.cities.flatMap(city => city.hospitals)
    );
};

export const getHospitalById = (id: string): Hospital | undefined => {
    return getAllHospitals().find(hospital => hospital.id === id);
};