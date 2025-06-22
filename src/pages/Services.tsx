import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Building2, Sparkles, CheckCircle } from "lucide-react";

const Services = () => {
  const residentialServices = [
    {
      name: "Standard House Cleaning",
      description: "Dusting, sweeping, mopping, vacuuming, bathroom & kitchen cleaning, and general tidying.",
      features: ["All rooms cleaned", "Kitchen & bathroom sanitized", "Floors mopped & vacuumed", "Surfaces dusted"]
    },
    {
      name: "Deep Cleaning",
      description: "Full home sanitation including inside appliances, under furniture, baseboards, tiles/grout, etc.",
      features: ["Inside appliances", "Under furniture cleaning", "Baseboards & tiles/grout", "Complete sanitization"]
    },
    {
      name: "Move-In/Move-Out Cleaning",
      description: "Full house clean-up before or after relocation, including cupboards, walls, and floors.",
      features: ["Complete property clean", "Cupboards & storage", "Wall cleaning", "Floor deep clean"]
    },
    {
      name: "Post-Construction Cleaning",
      description: "Safe removal of dust, paint, debris, and fine construction residue from newly built or renovated homes.",
      features: ["Construction dust removal", "Paint & debris cleanup", "Fine residue cleaning", "Final polish"]
    }
  ];

  const commercialServices = [
    {
      name: "Office Cleaning (Daily, Weekly, or Monthly)",
      description: "Desks, floors, kitchens, bathrooms, reception areas—after-hours or daytime service available.",
      features: ["Desk & workspace cleaning", "Floor maintenance", "Kitchen & bathroom cleaning", "Reception area care"]
    },
    {
      name: "Post-Renovation Commercial Cleaning",
      description: "Deep dust removal, glass/window cleaning, and waste removal after commercial renovations.",
      features: ["Deep dust removal", "Glass & window cleaning", "Waste removal", "Complete restoration"]
    }
  ];

  const specializedServices = [
    {
      name: "Carpet Cleaning",
      description: "Steam or dry extraction for offices, lounges, and high-traffic areas.",
      features: ["Steam cleaning", "Dry extraction", "Stain removal", "High-traffic area focus"]
    },
    {
      name: "Upholstery Cleaning",
      description: "Sofas, chairs, ottomans, and other furniture using non-damaging professional methods.",
      features: ["Fabric protection", "Non-damaging methods", "Furniture restoration", "Professional equipment"]
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
        <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service: any, index: number) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-white">{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-200">What's Included:</h4>
                {service.features.map((feature: string, featureIndex: number) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/contact">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
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
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Professional Cleaning Services
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
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
            title="🏠 Residential Cleaning"
            icon={Home}
            services={residentialServices}
            bgColor="bg-emerald-600"
          />

          {/* Commercial Services */}
          <ServiceCategory
            title="🏢 Commercial Cleaning"
            icon={Building2}
            services={commercialServices}
            bgColor="bg-emerald-700"
          />

          {/* Specialized Services */}
          <ServiceCategory
            title="🧼 Specialized Cleaning Services"
            icon={Sparkles}
            services={specializedServices}
            bgColor="bg-emerald-800"
          />

        </div>
      </section>

      {/* Why Choose Diamond Surface */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Diamond Surface</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg">
              <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
              <span className="text-gray-200">Fully compliant and registered supplier</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg">
              <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
              <span className="text-gray-200">Professional, uniformed cleaning staff</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg">
              <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
              <span className="text-gray-200">Flexible schedules & emergency call-outs</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg">
              <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
              <span className="text-gray-200">Eco-friendly products on request</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg">
              <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
              <span className="text-gray-200">Affordable packages tailored to client needs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Service Areas</h2>
            <p className="text-xl text-gray-300">We proudly serve the following areas across South Africa:</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Johannesburg", "Centurion", "Midrand", "Sandton", 
              "Pretoria", "Randburg", "Roodepoort", "Boksburg"
            ].map((area, index) => (
              <Badge key={index} variant="outline" className="p-3 text-lg border-emerald-500 text-emerald-400">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Work Experience */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Previous Work & Experience</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have delivered services to private homes, student apartments, and small office blocks in Gauteng. 
              Our references are available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote tailored to your specific cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-emerald-800 hover:bg-gray-100 text-lg px-8 py-3">
                Get Your Free Quote
              </Button>
            </Link>
            <a href="tel:+27619698601">
              <Button size="lg" className="bg-white text-emerald-800 hover:bg-gray-100 text-lg px-8 py-3">
                Call Now: +27 61 969 8601
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
