
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

type SupportType = "formatting" | "virus-removal" | "software-install" | "hardware-diagnosis";
type DeliveryOption = "office" | "courier";

export default function SupportPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [supportType, setSupportType] = useState<SupportType | null>(null);
  const [deliveryOption, setDeliveryOption] = useState<DeliveryOption | null>(null);
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!supportType || !deliveryOption || !description.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Support Request Submitted",
        description: "We'll get back to you shortly with next steps.",
      });
      setIsSubmitting(false);
      // Reset form
      setSupportType(null);
      setDeliveryOption(null);
      setDescription("");
    }, 1000);
  };

  // Estimated pricing based on support type
  const getPriceEstimate = () => {
    switch (supportType) {
      case "formatting":
        return "$50 - $80";
      case "virus-removal":
        return "$40 - $100";
      case "software-install":
        return "$30 - $60";
      case "hardware-diagnosis":
        return "$60 - $150";
      default:
        return "Select a service type for pricing";
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Request Support</h1>
          <p className="text-muted-foreground">
            Let us know what you need help with and we'll get back to you quickly.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>New Support Request</CardTitle>
            <CardDescription>
              Fill out this form to submit a new support ticket.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Support Type</Label>
                <RadioGroup
                  value={supportType || ""}
                  onValueChange={(value) => setSupportType(value as SupportType)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="formatting" id="formatting" />
                      <Label htmlFor="formatting" className="font-medium">Formatting</Label>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      System reinstall, data backup, optimization
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="virus-removal" id="virus-removal" />
                      <Label htmlFor="virus-removal" className="font-medium">Virus Removal</Label>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      Malware detection and cleanup
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="software-install" id="software-install" />
                      <Label htmlFor="software-install" className="font-medium">Software Install</Label>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      OS and application installation
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hardware-diagnosis" id="hardware-diagnosis" />
                      <Label htmlFor="hardware-diagnosis" className="font-medium">Hardware Diagnosis</Label>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      Component testing and repair
                    </p>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label>Device Delivery Option</Label>
                <RadioGroup
                  value={deliveryOption || ""}
                  onValueChange={(value) => setDeliveryOption(value as DeliveryOption)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="office" id="office" />
                      <Label htmlFor="office" className="font-medium">Bring to Office</Label>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      Drop off your device at our location
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="courier" id="courier" />
                      <Label htmlFor="courier" className="font-medium">Request Courier</Label>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      We'll arrange pickup (additional fee applies)
                    </p>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Issue Description</Label>
                <Textarea
                  id="description"
                  placeholder="Please describe your issue in detail..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                />
              </div>

              {supportType && (
                <div className="bg-muted p-4 rounded-md">
                  <p className="text-sm font-medium">Estimated Cost</p>
                  <p className="text-lg font-bold text-support-600">{getPriceEstimate()}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Final price may vary based on specific requirements
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
