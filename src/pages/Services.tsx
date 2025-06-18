
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Building2, Sparkles, CheckCircle } from "lucide-react";

const Services = () => {
  const residentialServices = [
    {
      name: "Standard House Cleaning",
      description: "Regular dusting, vacuuming, sweeping, mopping, and general tidying to keep your home fresh and clean.",
      features: ["All rooms cleaned", "Kitchen & bathroom sanitized", "Floors mopped & vacuumed", "Surfaces dusted"]
    },
    {
      name: "Deep Cleaning",
      description: "Intensive top-to-bottom cleaning service perfect for seasonal needs or one-time deep clean requirements.",
      features: ["Inside appliances", "Baseboards & windowsills", "Light fixtures", "Cabinet interiors"]
    },
    {
      name: "Move-In/Move-Out Cleaning",
      description: "Comprehensive cleaning service for preparing homes during relocation, ensuring a fresh start.",
      features: ["Complete property clean", "All rooms & storage", "Kitchen deep clean", "Bathroom sanitization"]
    },
    {
      name: "Post-Construction Cleaning",
      description: "Specialized cleaning to remove dust, paint splatter, and debris from renovations or new builds.",
      features: ["Construction dust removal", "Paint splatter cleanup", "Debris removal", "Final polish"]
    }
  ];

  const commercialServices = [
    {
      name: "Office Cleaning",
      description: "Professional scheduled cleaning services for office environments, available daily or weekly.",
      features: ["Desk & workspace cleaning", "Common area maintenance", "Restroom sanitization", "Trash removal"]
    },
    {
      name: "Retail Space Cleaning",
      description: "Specialized cleaning for retail environments to maintain a welcoming shopping atmosphere.",
      features: ["Floor care", "Display cleaning", "Customer area maintenance", "Storage area organization"]
    }
  ];

  const specializedServices = [
    {
      name: "Carpet & Upholstery Cleaning",
      description: "Expert fabric cleaning with stain removal, deodorizing, and maintenance for carpets and furniture.",
      features: ["Deep steam cleaning", "Stain removal", "Odor elimination", "Fabric protection"]
    },
    {
      name: "Window Cleaning",
      description: "Professional interior and exterior window cleaning for crystal clear views.",
      features: ["Streak-free cleaning", "Frame cleaning", "Sill maintenance", "Screen cleaning"]
    }
  ];

  const ServiceCategory = ({ title, icon: Icon, services, bgColor }: any) => (
    <div className="mb-16">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className={`p-3 rounded-full ${bgColor}`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service: any, index: number) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">What's Included:</h4>
                {service.features.map((feature: string, featureIndex: number) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/contact">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book This Service
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Professional Cleaning Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive cleaning solutions for every need. From residential deep cleans 
            to commercial maintenance, we deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Residential Services */}
          <ServiceCategory
            title="Residential Cleaning"
            icon={Home}
            services={residentialServices}
            bgColor="bg-blue-600"
          />

          {/* Commercial Services */}
          <ServiceCategory
            title="Commercial Cleaning"
            icon={Building2}
            services={commercialServices}
            bgColor="bg-green-600"
          />

          {/* Specialized Services */}
          <ServiceCategory
            title="Specialized Cleaning"
            icon={Sparkles}
            services={specializedServices}
            bgColor="bg-purple-600"
          />

        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600">We proudly serve the following areas across South Africa:</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Johannesburg", "Centurion", "Midrand", "Sandton", 
              "Pretoria", "Randburg", "Roodepoort", "Boksburg"
            ].map((area, index) => (
              <Badge key={index} variant="outline" className="p-3 text-lg">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote tailored to your specific cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Get Your Free Quote
              </Button>
            </Link>
            <a href="tel:+27111234567">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                Call Now: +27 11 123 4567
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
