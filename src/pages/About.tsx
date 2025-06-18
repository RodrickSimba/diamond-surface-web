
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Leaf, Clock, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We maintain the highest standards in every cleaning project, ensuring consistent, exceptional results."
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Our trained and insured staff are dedicated professionals who take pride in their work."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "We use environmentally safe products that are effective yet gentle on your family and pets."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Punctual, dependable service that fits your schedule and exceeds your expectations."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Years of experience and countless satisfied customers demonstrate our commitment to excellence."
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We build lasting relationships based on trust and quality."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "5", label: "Years Experience" },
    { number: "1000+", label: "Spaces Cleaned" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Diamond Surface
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Where Cleanliness Shines Bright
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Diamond Surface, we specialize in delivering high-quality, reliable cleaning services 
                for both residential and commercial clients. Our mission is simple: provide spotless, 
                safe, and hygienic environments that exceed client expectations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a skilled and trustworthy team, modern cleaning equipment, and a strong attention 
                to detail, we aim to become the preferred cleaning partner across homes, offices, and 
                specialized spaces.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-800">Founded on principles of quality and reliability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-800">Serving residential and commercial clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-800">Committed to environmental responsibility</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <img 
                src="/lovable-uploads/6e441783-bbcb-465a-9504-c34cd16de39a.png" 
                alt="Professional cleaning team working in kitchen"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="/lovable-uploads/d00d51b8-61a2-4137-a680-d69eb9c8427c.png" 
                alt="Professional cleaner with cleaning supplies"
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-blue-100">
              These numbers reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <value.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Proudly serving homes and businesses across the greater Johannesburg area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Johannesburg", "Centurion", "Midrand", "Sandton", 
              "Pretoria", "Randburg", "Roodepoort", "Boksburg",
              "Fourways", "Rosebank", "Melville", "Bryanston"
            ].map((area, index) => (
              <div key={index} className="text-center">
                <Badge variant="outline" className="w-full p-3 text-sm">
                  {area}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with Diamond Surface for all your cleaning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📍 Location</h3>
              <p className="text-gray-600">Based in Johannesburg</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📧 Email</h3>
              <p className="text-gray-600">murendenibuhle6@gmail.com</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📞 Phone</h3>
              <p className="text-gray-600">0792386289</p>
              <p className="text-gray-600">+27 61 969 8601</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📄 Documentation</h3>
              <p className="text-gray-600">CSD Summary & Tax Compliance available on request</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team's experience, professionalism, and dedication to customer 
              satisfaction sets us apart in the cleaning industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Professional Excellence
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Fully trained and insured cleaning professionals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Background-checked and trustworthy team members</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Ongoing training in latest cleaning techniques</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Customer-first approach in every interaction</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-blue-100 mb-6">
                "At Diamond Surface, we don't just clean - we create environments where 
                people can thrive. Every space we touch reflects our commitment to quality 
                and our passion for excellence."
              </p>
              <div className="text-right">
                <p className="font-semibold">- The Diamond Surface Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
