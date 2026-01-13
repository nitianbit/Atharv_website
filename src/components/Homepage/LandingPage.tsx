// import { Shield, User, Clipboard, Pill } from 'lucide-react'; // or use react-icons

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
            {/* Main Container */}
            <div className="container mx-auto px-6 lg:px-12 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Content Section */}
                    <div className="space-y-8">
                        {/* Heading */}
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="text-blue-600">Building Trusted Healthcare</span>
                            <br />
                            <span className="text-gray-900">Access For India</span>
                            <br />
                            <span className="text-gray-900">Since 2019</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
                            With <span className="font-semibold">7+ years of experience</span>, 
                            <span className="font-semibold"> Atharv Healthcare</span> delivers dependable 
                            primary healthcare services — online doctor consultations, genuine medicines, 
                            lab tests at home and ambulance assistance across India.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                CONSULT DOCTOR ONLINE
                            </button>
                            <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold px-8 py-4 rounded-full border-2 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                ORDER MEDICINES ONLINE
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Doctor Image with Badges */}
                    <div className="relative flex justify-center items-center">
                        <img src="/Homepage/LandingPage.png" alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
