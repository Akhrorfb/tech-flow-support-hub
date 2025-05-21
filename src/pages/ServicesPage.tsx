
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    id: "formatting",
    title: "Professional Formatting",
    description: "Complete system reinstallation, data backup, and optimization.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M6 8h4" />
        <path d="M14 8h4" />
        <path d="M6 12h4" />
        <path d="M14 12h4" />
        <path d="M6 16h4" />
        <path d="M14 16h4" />
      </svg>
    ),
    details: [
      "Complete system reinstallation",
      "Data backup and recovery",
      "Performance optimization",
      "Software updates",
      "Driver installation",
    ],
    pricing: {
      standard: "$50",
      premium: "$80",
    },
  },
  {
    id: "virus-removal",
    title: "Virus Removal",
    description: "Comprehensive malware detection and removal to secure your devices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="M10.5 3.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0Z" />
        <path d="M2 13s1-1 2.25-1 2.25 1 3.75 1 2.25-1 3.75-1 2.25 1 2.25 1" />
        <path d="M18 12v6" />
        <path d="M21 15l-3 3-3-3" />
      </svg>
    ),
    details: [
      "Full system scan and malware detection",
      "Virus removal and cleanup",
      "Security software installation",
      "System vulnerability patching",
      "Post-cleanup performance check",
    ],
    pricing: {
      standard: "$40",
      premium: "$100",
    },
  },
  {
    id: "software-install",
    title: "Software Installation",
    description: "Expert installation of operating systems, productivity tools, and specialized software.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
    details: [
      "Operating system installation",
      "Application setup and configuration",
      "Software updates and patches",
      "Driver installation",
      "Data migration between systems",
    ],
    pricing: {
      standard: "$30",
      premium: "$60",
    },
  },
  {
    id: "hardware-diagnosis",
    title: "Hardware Diagnosis",
    description: "Comprehensive hardware testing and repair for all your devices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
    details: [
      "Component-level diagnostics",
      "Hardware performance testing",
      "Component replacement",
      "System optimization",
      "Heat management solutions",
    ],
    pricing: {
      standard: "$60",
      premium: "$150",
    },
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We provide comprehensive IT support with quick turnaround times and competitive pricing
        </p>
      </div>

      <div className="space-y-16">
        {services.map((service) => (
          <div 
            key={service.id} 
            id={service.id}
            className="scroll-mt-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="text-support-500 mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>What's Included</CardTitle>
                    <CardDescription>Our comprehensive {service.title.toLowerCase()} service includes:</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-5 w-5 text-support-500 shrink-0"
                          >
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                      <div className="border rounded-lg p-4 text-center">
                        <p className="text-sm font-medium mb-1">Standard Service</p>
                        <p className="text-3xl font-bold text-support-600">{service.pricing.standard}</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center bg-muted">
                        <p className="text-sm font-medium mb-1">Premium Service</p>
                        <p className="text-3xl font-bold text-support-600">{service.pricing.premium}</p>
                      </div>
                    </div>
                    <Button asChild className="w-full sm:w-auto">
                      <Link to="/support">Request This Service</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          We offer customized IT support packages for businesses and special requirements. Contact us to discuss your specific needs.
        </p>
        <Button asChild size="lg">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
