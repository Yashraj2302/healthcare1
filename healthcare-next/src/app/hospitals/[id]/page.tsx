import { notFound } from 'next/navigation';
import { getHospitalById, Hospital } from '@/lib/hospital-data';
import { MapPin, Phone, Star, Stethoscope, Building2, Clock, Ambulance, Users, Calendar, Award } from 'lucide-react';

interface Props {
    params: {
        id: string;
    };
}

export default function HospitalDetailPage({ params }: Props) {
    const hospital: Hospital | undefined = getHospitalById(params.id);

    if (!hospital) {
        notFound();
    }

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
            <section className="relative py-16 px-5 md:px-[5%] max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Hospital Image */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={hospital.image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"}
                                alt={hospital.name}
                                className="w-full h-full object-cover"
                            />
                            {hospital.emergency && (
                                <div className="absolute top-6 left-6 bg-danger text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                                    <Ambulance className="w-4 h-4" />
                                    24/7 Emergency
                                </div>
                            )}
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                    </div>

                    {/* Hospital Info */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getTypeColor(hospital.type)}`}>
                                    {hospital.type}
                                </span>
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <span className={`font-semibold text-lg ${getRatingColor(hospital.rating)}`}>
                                        {hospital.rating.toFixed(1)}
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-text-main leading-tight">
                                {hospital.name}
                            </h1>

                            <p className="text-text-muted text-lg leading-relaxed">
                                {hospital.description || `A leading ${hospital.type.toLowerCase()} hospital in ${hospital.city}, ${hospital.state} providing comprehensive healthcare services to the community.`}
                            </p>
                        </div>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="glass-card rounded-2xl p-6 text-center">
                                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                                <div className="text-2xl font-bold text-text-main">{hospital.beds}</div>
                                <div className="text-sm text-text-muted">Beds</div>
                            </div>

                            <div className="glass-card rounded-2xl p-6 text-center">
                                <Stethoscope className="w-8 h-8 text-secondary mx-auto mb-2" />
                                <div className="text-2xl font-bold text-text-main">{hospital.specialties.length}</div>
                                <div className="text-sm text-text-muted">Specialties</div>
                            </div>

                            <div className="glass-card rounded-2xl p-6 text-center">
                                <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                                <div className="text-lg font-bold text-text-main">{hospital.emergency ? '24/7' : 'Regular'}</div>
                                <div className="text-sm text-text-muted">Hours</div>
                            </div>

                            <div className="glass-card rounded-2xl p-6 text-center">
                                <Award className="w-8 h-8 text-success mx-auto mb-2" />
                                <div className="text-lg font-bold text-text-main">4.2★</div>
                                <div className="text-sm text-text-muted">Rating</div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={`tel:${hospital.contact}`}
                                className="flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-colors duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                Call Now
                            </a>
                            <button className="flex items-center gap-3 px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                                <MapPin className="w-5 h-5" />
                                Get Directions
                            </button>
                            <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-secondary to-primary text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                                <Calendar className="w-5 h-5" />
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="px-5 md:px-[5%] max-w-[1400px] mx-auto mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Hospital Details */}
                    <div className="lg:col-span-2 glass-card rounded-3xl p-8">
                        <h2 className="text-3xl font-bold text-text-main mb-6">About {hospital.name}</h2>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-text-main">Location</h3>
                                    <div className="flex items-start gap-3 text-text-muted">
                                        <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-medium text-text-main">{hospital.address}</div>
                                            <div className="text-sm">{hospital.city}, {hospital.state} - {hospital.pincode}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-text-main">Contact Information</h3>
                                    <div className="flex items-center gap-3 text-text-muted">
                                        <Phone className="w-5 h-5 text-primary" />
                                        <span className="font-medium">{hospital.contact}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-text-main">Available Specialties</h3>
                                <div className="flex flex-wrap gap-3">
                                    {hospital.specialties.map((specialty) => (
                                        <span key={specialty} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-text-main">Services</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                                        <span className="text-text-muted">24/7 Emergency Services</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                                        <span className="text-text-muted">ICU & Critical Care</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                                        <span className="text-text-muted">Diagnostic Services</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-success rounded-full"></div>
                                        <span className="text-text-muted">Ambulance Services</span>
                                    </div>
                                </div>
                            </div>

                            {hospital.description && (
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-text-main">About the Hospital</h3>
                                    <p className="text-text-muted leading-relaxed">
                                        {hospital.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Quick Facts */}
                        <div className="glass-card rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-text-main mb-6">Quick Facts</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-text-muted">Established</span>
                                    <span className="font-semibold">1950</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-text-muted">Type</span>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(hospital.type)}`}>
                                        {hospital.type}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-text-muted">Beds</span>
                                    <span className="font-semibold">{hospital.beds}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-text-muted">Rating</span>
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        <span className={`font-semibold ${getRatingColor(hospital.rating)}`}>
                                            {hospital.rating.toFixed(1)}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-text-muted">Emergency</span>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${hospital.emergency ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                        {hospital.emergency ? 'Available' : 'Not Available'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Map Preview */}
                        <div className="glass-card rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-text-main mb-6">Location Map</h3>
                            <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <p className="text-text-muted text-sm">Interactive map will be available here</p>
                                    <p className="text-text-muted text-xs mt-2">Google Maps integration coming soon</p>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <button className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-colors duration-300">
                                    View Full Map
                                </button>
                            </div>
                        </div>

                        {/* Nearby Hospitals */}
                        <div className="glass-card rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-text-main mb-6">Nearby Hospitals</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                                    <div>
                                        <div className="font-semibold text-text-main">City General Hospital</div>
                                        <div className="text-sm text-text-muted">2.5 km away</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                                    <div>
                                        <div className="font-semibold text-text-main">District Medical Center</div>
                                        <div className="text-sm text-text-muted">3.8 km away</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                                    <div>
                                        <div className="font-semibold text-text-main">Regional Hospital</div>
                                        <div className="text-sm text-text-muted">5.2 km away</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}