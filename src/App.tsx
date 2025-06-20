import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Shield, 
  Users, 
  Globe, 
  Star, 
  ChevronRight, 
  Play,
  Bot,
  Video,
  Share2,
  Sparkles,
  MapPin,
  Calendar,
  DollarSign,
  Award,
  Target,
  Zap,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Hotel,
  Home,
  Coffee
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('properties');

  const stats = [
    { number: '10+', label: 'Verified Properties', icon: Building2 },
    { number: '100+', label: 'Realtors Join Monthly', icon: Users },
    { number: '100+', label: 'Bookings Per Week', icon: Calendar },
    { number: '25%', label: 'Maximum Commission', icon: DollarSign }
  ];

  const properties = [
    {
      name: 'Wyndham Bali',
      return: '19%',
      capital: '30%',
      fee: '5%',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Bali, Indonesia'
    },
    {
      name: 'Best Western Turkey',
      return: '12%',
      capital: '5%',
      fee: '10%',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Turkey'
    },
    {
      name: 'Radisson Georgia',
      return: '10%',
      capital: '20%',
      fee: '10%',
      image: 'https://images.pexels.com/photos/161758/governor-s-mansion-richmond-virginia-virginia-executive-mansion-161758.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Georgia'
    },
    {
      name: 'Brown Hotels Greece',
      return: '7%',
      capital: '12%',
      fee: '5%',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Greece'
    },
    {
      name: 'Accor Group Thailand',
      return: '6%',
      capital: '35%',
      fee: '7%',
      image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'Thailand'
    }
  ];

  const tools = [
    {
      icon: Share2,
      title: 'Automatic SMM Content Generation',
      description: 'Leverage our advanced system to create high-quality social media content. Our tool analyzes current trends and your audience\'s preferences, automatically generating posts that boost engagement and strengthen your brand\'s presence across social media platforms.'
    },
    {
      icon: Video,
      title: 'AI Video Presentations',
      description: 'Introducing an innovative solution for creating video presentations using artificial intelligence. Our system generates responses to frequently asked questions and delivers them in a professional presenter\'s voice, providing your clients with information in a convenient and engaging format.'
    },
    {
      icon: Bot,
      title: 'Intelligent Bot Assistant',
      description: 'Ensure instant support for your clients with our intelligent chatbot. It can answer common questions, provide information about your services, and guide users to the appropriate sections of your website, enhancing service quality and customer satisfaction.'
    },
    {
      icon: Sparkles,
      title: 'AI Promo Materials',
      description: 'Reduce time and resources spent on creating promotional materials with our AI platform. It automatically designs appealing promotional content, including banners, flyers, and social media posts, tailored to your brand and target audience, facilitating effective marketing of your services.'
    }
  ];

  const locations = [
    {
      region: 'US',
      cities: ['Beverly Hills', 'Malibu', 'Miami', 'Palm Beach', 'Hawaii']
    },
    {
      region: 'Europe North',
      cities: ['Ontario', 'Zurich', 'Geneva', 'Chelsea', 'Cornwall', 'Vienna', 'Salzburg']
    },
    {
      region: 'Caribbean',
      cities: ['Puerto Rico', 'Cayman', 'Bahamas', 'Barbados']
    },
    {
      region: 'Europe South',
      cities: ['French Riviera', 'Tuscany', 'Costa del Sol', 'Ibiza', 'Santorini', 'Monaco', 'Budva']
    },
    {
      region: 'MENA',
      cities: ['Dubai', 'Abu Dhabi', 'Morocco', 'Sharm El Sheikh', 'Cairo', 'Antalya', 'Bodrum', 'Qatar']
    },
    {
      region: 'Tropical Asia',
      cities: ['Goa', 'Phuket', 'Bali', 'Kuala Lumpur', 'Malaysia', 'Philippines', 'Sri Lanka', 'Maldives']
    }
  ];

  const propertyTypes = [
    { icon: Hotel, title: 'Standard Investment Property', description: 'Traditional investment opportunities with guaranteed returns' },
    { icon: Building2, title: 'Branded Investment Hotels & Resorts', description: 'Premium branded properties with established market presence' },
    { icon: Home, title: 'Branded Residences', description: 'Luxury residential properties under prestigious brand names' },
    { icon: Coffee, title: 'Fractional / Shared Property', description: 'Shared ownership opportunities for high-value properties' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 text-amber-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold">
                Emlak <span className="text-amber-400">Area</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Affiliate Network for Real Estate Professionals
            </p>
            <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
              Connecting Realtors with Top Real Estate Developers Worldwide. 
              Specializing in Investment Properties with Blockchain DB Security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join Our Network
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 group-hover:bg-white/20">
                  <stat.icon className="h-8 w-8 text-amber-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Property Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Property Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in premium investment opportunities across diverse property categories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {propertyTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4 group-hover:bg-blue-200 transition-colors">
                  <type.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Best Investment Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked properties with verified returns and competitive partner fees
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.return} Return
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">{property.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{property.name}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Return:</span>
                      <span className="font-semibold text-green-600">{property.return}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Capital Growth:</span>
                      <span className="font-semibold text-blue-600">{property.capital}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Partner Fee:</span>
                      <span className="font-semibold text-amber-600">{property.fee}</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Advantages */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits for Realtors */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits for Realtors</h2>
              <div className="space-y-4">
                {[
                  'Expanded Access and Earnings',
                  'Convenience and Support',
                  'Professional Tools and Networking',
                  'Enhanced Status and Recognition',
                  'Highest Possible Fees (5-25%)'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Advantages */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Advantages</h2>
              <div className="space-y-4">
                {[
                  { title: 'Exclusive Offers', desc: 'Unique, market-exclusive properties' },
                  { title: 'Transparent Commissions', desc: 'Know earnings upfront' },
                  { title: 'Competitive Payouts', desc: 'Higher than traditional agencies' },
                  { title: 'Convenience and Support', desc: 'Effortless assistance for clients' },
                  { title: 'Easy Payments', desc: 'Simplified transactions' },
                  { title: 'Quick Process', desc: 'Accelerated procedures for efficiency' }
                ].map((advantage, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                    <Star className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{advantage.title}</h3>
                      <p className="text-gray-600 text-sm">{advantage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Tools for Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary tools designed specifically for real estate professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-600 rounded-lg p-3 w-fit mb-6">
                  <tool.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tool.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Locations */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Wherever you are, give your clients the best deals in the world
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-teal-400 mr-3" />
                  <h3 className="text-xl font-bold">{location.region}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {location.cities.map((city, cityIndex) => (
                    <span key={cityIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join over 100+ realtors who are already earning higher commissions with exclusive investment properties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
              Start Your Journey
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-8 w-8 text-amber-400 mr-3" />
              <span className="text-2xl font-bold">Emlak Area</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>Powered by Blockchain DB Security</p>
              <p className="text-sm mt-1">© 2025 Emlak Area. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;