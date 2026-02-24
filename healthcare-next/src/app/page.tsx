import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Ambulance, Droplet, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row mb-20 items-center justify-between px-5 md:px-[5%] max-w-[1400px] mx-auto min-h-[calc(100vh-120px)] pb-16">
        {/* Background Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-light rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-[float_10s_infinite_ease-in-out_alternate] -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-[float_10s_infinite_ease-in-out_alternate_reverse] -z-10" />

        <div className="flex-1 lg:pr-16 text-center lg:text-left mb-12 lg:mb-0 animate-[slideUp_1s_ease-out_forwards]">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-text-main leading-tight tracking-tight">
            Leading Medical Care <br className="hidden lg:block" />
            <span className="text-gradient">You Can Trust</span>
          </h1>
          <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto lg:mx-0">
            Welcome to Kindred Spirits HealthCare. We provide compassionate, comprehensive medical services with top-tier professionals and state-of-the-art facilities dedicated to your well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Link href="/doctors" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 border-none bg-gradient-to-br from-primary to-primary-light text-white shadow-[0_4px_15px_rgba(79,70,229,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(79,70,229,0.5)]">
              Find a Doctor
            </Link>
            <Link href="/emergency" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 border-none bg-gradient-to-br from-danger to-red-400 text-white shadow-[0_4px_15px_rgba(239,68,68,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(239,68,68,0.5)]">
              Emergency Care
            </Link>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-xl animate-[fadeIn_1.5s_ease-out_forwards]">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-500">
            <Image
              src="https://images.unsplash.com/photo-1538108149393-cebb47beeca2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Modern Hospital Team"
              width={1000}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-5 md:px-[5%] max-w-[1400px] mx-auto py-20 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Essential Services</h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">Comprehensive care tailored to your specific medical needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service Card 1 */}
          <div className="glass-card group relative p-10 rounded-3xl text-center hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl hover:border-white/80 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <div className="w-24 h-24 mx-auto bg-primary/10 rounded-[30%] flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Stethoscope className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Top Specialists</h3>
            <p className="text-text-muted mb-8 leading-relaxed">Consult with our experienced, board-certified specialists across various medical fields.</p>
            <Link href="/doctors" className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full border-2 border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_4px_15px_rgba(79,70,229,0.3)]">
              View Directory
            </Link>
          </div>

          {/* Service Card 2 */}
          <div className="glass-card group relative p-10 rounded-3xl text-center hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl hover:border-white/80 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-danger to-red-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <div className="w-24 h-24 mx-auto bg-danger/10 rounded-[30%] flex items-center justify-center text-danger mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Ambulance className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4">24/7 Emergency</h3>
            <p className="text-text-muted mb-8 leading-relaxed">Immediate medical attention available round the clock for all critical emergencies.</p>
            <Link href="/emergency" className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full border-2 border-danger text-danger transition-all duration-300 hover:bg-danger hover:text-white hover:shadow-[0_4px_15px_rgba(239,68,68,0.3)]">
              Emergency Info
            </Link>
          </div>

          {/* Service Card 3 */}
          <div className="glass-card group relative p-10 rounded-3xl text-center hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl hover:border-white/80 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-accent to-rose-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <div className="w-24 h-24 mx-auto bg-accent/10 rounded-[30%] flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Droplet className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Blood Bank</h3>
            <p className="text-text-muted mb-8 leading-relaxed">Access our fully equipped blood bank for urgent transfusions or become a donor today.</p>
            <Link href="/blood-bank" className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full border-2 border-accent text-accent transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-[0_4px_15px_rgba(244,63,94,0.3)]">
              Donate Blood
            </Link>
          </div>

          {/* Service Card 4 */}
          <div className="glass-card group relative p-10 rounded-3xl text-center hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl hover:border-white/80 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-secondary to-blue-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <div className="w-24 h-24 mx-auto bg-secondary/10 rounded-[30%] flex items-center justify-center text-secondary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <MapPin className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Find Hospitals</h3>
            <p className="text-text-muted mb-8 leading-relaxed">Discover quality healthcare facilities across India with detailed information, specialties, and Google Maps integration.</p>
            <Link href="/hospitals" className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full border-2 border-secondary text-secondary transition-all duration-300 hover:bg-secondary hover:text-white hover:shadow-[0_4px_15px_rgba(14,165,233,0.3)]">
              Find Hospitals
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 md:px-[5%] max-w-[1200px] mx-auto py-24 mb-10 w-full">
        <div className="bg-text-main rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] bg-primary rounded-full filter blur-[100px] opacity-30" />
          <div className="absolute bottom-[-50%] left-[-10%] w-[400px] h-[400px] bg-secondary rounded-full filter blur-[100px] opacity-20" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Healthcare Community</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
              Create an account to manage appointments, access medical records securely, and connect with our services faster.
            </p>
            <Link href="/signup" className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full transition-all duration-300 border-none bg-gradient-to-br from-primary to-primary-light text-white shadow-[0_4px_20px_rgba(79,70,229,0.5)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(79,70,229,0.7)]">
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
