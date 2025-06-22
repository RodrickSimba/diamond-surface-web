
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, CheckCircle, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Get a <span className="text-blue-600">Sparkling</span>
                  <br />
                  <span className="text-blue-600">Clean</span> Home Today!
                </h1>
                <p className="text-xl text-gray-600 mt-6 max-w-xl">
                  Experience premium residential cleaning services across South Africa. 
                  Our trained professionals use eco-friendly products to make your home shine.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                    Get Free Quote →
                  </Button>
                </Link>
                <a href="tel:+27619698601">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-lg"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now: +27 61 969 8601
                  </Button>
                </a>
              </div>

              {/* Customer Reviews */}
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 rounded-full bg-teal-400 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-green-400 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-emerald-400 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-cyan-400 border-2 border-white"></div>
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 font-medium">500+ Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Right Content - Professional Cleaner Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/09291f65-8bff-426a-81e9-145502069fd6.png"
                  alt="Professional cleaning service - smiling cleaner with equipment"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Satisfaction Guarantee Badge */}
                <div className="absolute bottom-6 left-6">
                  <Card className="bg-white p-4 shadow-lg border-0 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">100% Satisfaction</p>
                        <p className="text-gray-600 text-sm">Guaranteed Results</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential deep cleans to commercial maintenance, we deliver exceptional results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Residential Cleaning</h3>
              <p className="text-gray-600 mb-4">Professional home cleaning services for a spotless living space</p>
              <Link to="/services">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Commercial Cleaning</h3>
              <p className="text-gray-600 mb-4">Office and business cleaning solutions to maintain professional environments</p>
              <Link to="/services">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Specialized Cleaning</h3>
              <p className="text-gray-600 mb-4">Expert carpet, upholstery, and deep cleaning services</p>
              <Link to="/services">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today and discover why Diamond Surface 
            is South Africa's trusted cleaning partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Get Free Quote Now
              </Button>
            </Link>
            <a href="tel:+27619698601">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Call: +27 61 969 8601
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
