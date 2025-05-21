
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Professional Formatting",
    description: "System reinstallation, data backup, and optimization for peak performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M6 8h4" />
        <path d="M14 8h4" />
        <path d="M6 12h4" />
        <path d="M14 12h4" />
        <path d="M6 16h4" />
        <path d="M14 16h4" />
      </svg>
    ),
  },
  {
    title: "Virus Removal",
    description: "Comprehensive malware detection and removal to secure your devices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M10.5 3.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0Z" />
        <path d="M2 13s1-1 2.25-1 2.25 1 3.75 1 2.25-1 3.75-1 2.25 1 2.25 1" />
        <path d="M18 12v6" />
        <path d="M21 15l-3 3-3-3" />
      </svg>
    ),
  },
  {
    title: "Software Installation",
    description: "Expert installation of operating systems, productivity tools, and specialized software.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Hardware Diagnosis",
    description: "Comprehensive hardware testing and repair for all your devices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    text: "Dern-Support fixed my laptop faster than expected. Professional service at a fair price.",
    author: "Sarah K.",
    role: "Small Business Owner",
  },
  {
    text: "The team at Dern-Support diagnosed and fixed a complex hardware issue that other shops couldn't figure out.",
    author: "Michael T.",
    role: "Graphic Designer",
  },
  {
    text: "Their virus removal service is top-notch. My computer runs like new again!",
    author: "Rebecca L.",
    role: "Student",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-support-500 text-white py-16 md:py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Professional IT Support <br className="hidden md:block" />
            For All Your Tech Needs
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            Fast, reliable tech repair and support services for businesses and individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-support-700 hover:bg-white/90">
              <Link to="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <Link to="/support">Request Support</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive IT support services with quick turnaround times and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="mb-4 text-support-500">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full">
                  <Link to={`/services#${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn more
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting your tech issues resolved is simple with our streamlined process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-support-100 text-support-700 flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Submit a Request</h3>
              <p className="text-muted-foreground">
                Fill out our simple support request form with details about your issue.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-support-100 text-support-700 flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Get a Diagnosis</h3>
              <p className="text-muted-foreground">
                Our experts will examine your device and provide a cost estimate.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-support-100 text-support-700 flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Problem Solved</h3>
              <p className="text-muted-foreground">
                We'll fix your issue and return your device in optimal condition.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/support">Request Support Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6">
                <div className="mb-4 text-support-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 opacity-50">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.03V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <p className="mb-4 text-foreground">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-support-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Solve Your Tech Problems?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Join hundreds of satisfied customers who trust Dern-Support with their technical needs.
          </p>
          <Button asChild size="lg" className="bg-white text-support-700 hover:bg-white/90">
            <Link to="/register">Create an Account</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
