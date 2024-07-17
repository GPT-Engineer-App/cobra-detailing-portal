import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Car, Spray, Brush, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <img src="/placeholder.svg" alt="Car detailing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Professional Auto Detailing Services</h1>
          <p className="text-xl mb-6">We make your car shine like new!</p>
          <Button size="lg">Book Now</Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Car className="w-12 h-12 mb-4" />, title: "Exterior Detailing", description: "Thorough cleaning and protection for your car's exterior" },
              { icon: <Spray className="w-12 h-12 mb-4" />, title: "Interior Detailing", description: "Deep cleaning and sanitization of your car's interior" },
              { icon: <Brush className="w-12 h-12 mb-4" />, title: "Full Detailing", description: "Comprehensive detailing for both exterior and interior" },
              { icon: <Shield className="w-12 h-12 mb-4" />, title: "Ceramic Coating", description: "Long-lasting protection for your car's paint" },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/placeholder.svg" alt="About Cobra Auto Detailing" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="mb-4">
              Cobra Auto Detailing is your trusted partner in car care. With years of experience and a passion for perfection, we deliver top-notch detailing services that bring out the best in your vehicle.
            </p>
            <p>
              Our mission is to provide unparalleled quality and customer satisfaction, ensuring that every car we touch leaves our shop looking and feeling brand new.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-4">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone" />
                <Textarea placeholder="Message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <p>123 Auto Street, Car City, ST 12345</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@cobraautodetailing.com</p>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1644332380105!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;