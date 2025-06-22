import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and phone number are required.",
        variant: "destructive"
      });
      return;
    }

    console.log("Form submitted:", formData);
    
    toast({
      title: "Quote request submitted!",
      description: "We'll contact you within 24 hours with your free quote.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "079 238 6289",
      description: "Call us for immediate assistance",
      action: "tel:0792386289"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      info: "+27 61 969 8601",
      description: "Message us on WhatsApp",
      action: "https://wa.me/27619698601"
    },
    {
      icon: Mail,
      title: "Email",
      info: "murendenibuhle6@gmail.com",
      description: "Send us an email anytime",
      action: "mailto:murendenibuhle6@gmail.com"
    },
    {
      icon: MapPin,
      title: "Service Area",
      info: "Johannesburg",
      description: "We serve the entire region",
      action: null
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency calls only" }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Ready to experience the Diamond Surfaces difference? Contact us today for a 
            personalized quote tailored to your cleaning needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Request Your Free Quote</CardTitle>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours with a customized quote.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-300">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+27 XX XXX XXXX"
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-gray-300">Service Interested In</Label>
                    <Select value={formData.service} onValueChange={handleSelectChange}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="residential-standard">Standard House Cleaning</SelectItem>
                        <SelectItem value="residential-deep">Deep Cleaning</SelectItem>
                        <SelectItem value="residential-move">Move-In/Move-Out Cleaning</SelectItem>
                        <SelectItem value="residential-construction">Post-Construction Cleaning</SelectItem>
                        <SelectItem value="commercial-office">Office Cleaning</SelectItem>
                        <SelectItem value="commercial-retail">Retail Space Cleaning</SelectItem>
                        <SelectItem value="specialized-carpet">Carpet & Upholstery Cleaning</SelectItem>
                        <SelectItem value="specialized-window">Window Cleaning</SelectItem>
                        <SelectItem value="other">Other (specify in message)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your cleaning needs, property size, frequency, etc."
                      rows={4}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-emerald-700 hover:bg-emerald-600">
                    Get My Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="hover:shadow-md bg-gray-800 border-gray-700 transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-emerald-800 rounded-full">
                          <contact.icon className="h-6 w-6 text-emerald-400" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-white mb-2">{contact.title}</h3>
                      {contact.action ? (
                        <a 
                          href={contact.action} 
                          className="text-emerald-400 hover:text-emerald-300 font-medium block mb-1"
                        >
                          {contact.info}
                        </a>
                      ) : (
                        <p className="text-white font-medium mb-1">{contact.info}</p>
                      )}
                      <p className="text-gray-300 text-sm">{contact.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Clock className="h-5 w-5 text-emerald-400" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-300">{schedule.day}</span>
                        <span className="text-white font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-red-900 border-red-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-200 mb-2">Emergency Cleaning Services</h3>
                  <p className="text-red-300 text-sm mb-3">
                    Need urgent cleaning assistance? We offer emergency services for critical situations.
                  </p>
                  <a href="tel:+27619698601">
                    <Button variant="outline" className="border-red-500 text-red-300 hover:bg-red-800">
                      Call Emergency Line
                    </Button>
                  </a>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Service Area</h2>
            <p className="text-xl text-gray-300">
              We proudly serve the greater Johannesburg metropolitan area and surrounding regions.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {[
              "Johannesburg CBD", "Sandton", "Midrand", "Centurion",
              "Pretoria", "Randburg", "Roodepoort", "Boksburg", 
              "Fourways", "Rosebank", "Melville", "Bryanston"
            ].map((area, index) => (
              <div key={index} className="bg-emerald-800 border border-emerald-700 rounded-lg p-3 text-center">
                <span className="text-emerald-200 font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Don't see your area listed? Contact us anyway - we may still be able to help!
            </p>
            <Link to="/contact">
              <Button className="bg-emerald-700 hover:bg-emerald-600">
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
