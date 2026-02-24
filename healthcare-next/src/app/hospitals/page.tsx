import { useState } from 'react';
import { MapPin, Phone, Star, Stethoscope, Building2, Clock, Ambulance } from 'lucide-react';
import { getAllStates, getCitiesByState, getHospitalsByCity, Hospital } from '@/lib/hospital-data';

export default function HospitalsPage() {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [hospitalType, setHospitalType] = useState<'All' | 'Government' | 'Private' | 'Charity'>('All');
    const [emergencyOnly, setEmergencyOnly] = useState(false);

    const states = getAllStates();
    const cities = selectedState ? getCitiesByState(selectedState) : [];
    const hospitals = selectedCity
        ? getHospitalsByCity(selectedState, selectedCity)
        : [];

    // Filter hospitals based on search criteria
    const filteredHospitals = hospitals.filter(hospital => {
        const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            hospital.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
            hospital.specialties.some(specialty =>
                specialty.toLowerCase().includes(searchQuery.toLowerCase())
            );

        const matchesType = hospitalType === 'All' || hospital.type === hospitalType;
        const matchesEmergency = !emergencyOnly || hospital.emergency;

        return matchesSearch && matchesType && matchesEmergency;
    });

    const getRatingColor = (rating: number) => {
        if (rating >= 4.5) return 'text-green-600';
        if (rating >= 4.0) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'Government': return 'bg-blue-100 text-blue-800';
            case 'Private': return 'bg-green-100 text-green-800';
            case 'Charity': return 'bg-purple-100 text-purple-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <section className="relative py-20 px-5 md:px-[5%] max-w-[1400px] mx-auto">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-secondary/10 -z-10" />
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-text-main">
                        Find Hospitals Near You
                    </h1>
                    <p className="text-xl text-text-muted mb-12">
                        Discover quality healthcare facilities across India with detailed information,
                        specialties, and emergency services.
                    </p>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="px-5 md:px-[5%] max-w-[1400px] mx-auto mb-16">
                <div className="glass-card rounded-3xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {/* State Selection */}
                        <div className="lg:col-span-1">
                            <label className="block text-sm font-semibold text-text-muted mb-2">State</label>
                            <select
                                value={selectedState}
                                onChange={(e) => {
                                    setSelectedState(e.target.value);
                                    setSelectedCity('');
                                }}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            >
                                <option value="">Select State</option>
                                {states.map(state => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>

                        {/* City Selection */}
                        <div className="lg:col-span-1">
                            <label className="block text-sm font-semibold text-text-muted mb-2">City</label>
                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                disabled={!selectedState}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <option value="">Select City</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>

                        {/* Hospital Type Filter */}
                        <div className="lg:col-span-1">
                            <label className="block text-sm font-semibold text-text-muted mb-2">Hospital Type</label>
                            <select
                                value={hospitalType}
                                onChange={(e) => setHospitalType(e.target.value as any)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            >
                                <option value="All">All Types</option>
                                <option value="Government">Government</option>
                                <option value="Private">Private</option>
                                <option value="Charity">Charity</option>
                            </select>
                        </div>

                        {/* Emergency Filter */}
                        <div className="lg:col-span-1">
                            <label className="block text-sm font-semibold text-text-muted mb-2">Emergency Services</label>
                            <div className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    id="emergency"
                                    checked={emergencyOnly}
                                    onChange={(e) => setEmergencyOnly(e.target.checked)}
                                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                                />
                                <label htmlFor="emergency" className="text-sm text-text-muted">Emergency Only</label>
                            </div>
                        </div>

                        {/* Search Input */}
                        <div className="lg:col-span-1">
                            <label className="block text-sm font-semibold text-text-muted mb-2">Search</label>
                            <input
                                type="text"
                                placeholder="Search by name, address, or specialty..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="px-5 md:px-[5%] max-w-[1400px] mx-auto mb-20">
                {selectedState && selectedCity ? (
                    <div className="space-y-8">
                        <div className="flex justify-between items-center">
                            <h2 className="text-3xl font-bold text-text-main">
                                Hospitals in {selectedCity}, {selectedState}
                            </h2>
                            <p className="text-text-muted">
                                {filteredHospitals.length} hospital{filteredHospitals.length !== 1 ? 's' : ''} found
                            </p>
                        </div>

                        {filteredHospitals.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {filteredHospitals.map((hospital) => (
                                    <div key={hospital.id} className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group">
                                        <div className="flex flex-col lg:flex-row gap-6">
                                            {/* Hospital Image */}
                                            <div className="lg:w-1/3">
                                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                                    <img
                                                        src={hospital.image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"}
                                                        alt={hospital.name}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    {hospital.emergency && (
                                                        <div className="absolute top-3 left-3 bg-danger text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                                                            <Ambulance className="w-4 h-4" />
                                                            Emergency
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Hospital Details */}
                                            <div className="lg:w-2/3 space-y-4">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors duration-300">
                                                            {hospital.name}
                                                        </h3>
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(hospital.type)}`}>
                                                                {hospital.type}
                                                            </span>
                                                            <div className="flex items-center gap-1 text-sm text-text-muted">
                                                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                                <span>{hospital.rating.toFixed(1)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-2xl font-bold text-primary">{hospital.beds}</div>
                                                        <div className="text-sm text-text-muted">Beds Available</div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-text-muted">
                                                    <div className="flex items-start gap-3">
                                                        <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                        <div>
                                                            <div className="font-semibold text-text-main">Address</div>
                                                            <div className="text-sm">{hospital.address}</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                        <div>
                                                            <div className="font-semibold text-text-main">Contact</div>
                                                            <div className="text-sm">{hospital.contact}</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {hospital.specialties.slice(0, 4).map((specialty) => (
                                                        <span key={specialty} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                                            {specialty}
                                                        </span>
                                                    ))}
                                                    {hospital.specialties.length > 4 && (
                                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                                            +{hospital.specialties.length - 4} more
                                                        </span>
                                                    )}
                                                </div>

                                                {hospital.description && (
                                                    <p className="text-text-muted line-clamp-3">
                                                        {hospital.description}
                                                    </p>
                                                )}

                                                <div className="flex gap-4 pt-4">
                                                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-colors duration-300">
                                                        <MapPin className="w-5 h-5" />
                                                        View on Map
                                                    </button>
                                                    <button className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                                                        <Stethoscope className="w-5 h-5" />
                                                        Contact
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <div className="text-6xl mb-4">🏥</div>
                                <h3 className="text-2xl font-bold text-text-main mb-2">No hospitals found</h3>
                                <p className="text-text-muted mb-8">Try adjusting your filters or search criteria</p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setHospitalType('All');
                                        setEmergencyOnly(false);
                                    }}
                                    className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-colors duration-300"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🏥</div>
                        <h3 className="text-2xl font-bold text-text-main mb-4">Select a State and City</h3>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            Choose a state and city from the filters above to see hospitals in your area.
                            We have hospitals across major cities in India with various specialties and emergency services.
                        </p>
                    </div>
                )}
            </section>
        </div>
    );
}