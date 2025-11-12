import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Visit our store or reach out to us for any inquiries
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Information */}
          <Card className="p-6 sm:p-8 space-y-5 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Contact Information</h3>
            
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Our Location</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Kothamangalam, KVB Bank Opposite<br />
                    P. Velur (TK), Namakkal (D.T)<br />
                    Tamil Nadu, 637 213
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Phone</h4>
                  <a
                    href="tel:+919189889549"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    +91 91898 89549
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Business Hours</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Open daily for consultations<br />
                    Contact us for appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 space-y-3">
              <Button
                variant="whatsapp"
                size="lg"
                asChild
                className="w-full min-h-[48px]"
              >
                <a
                  href="https://wa.me/919189889549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full min-h-[48px]"
              >
                <a href="tel:+919189889549" className="text-sm sm:text-base">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </Card>

          {/* Delivery & Collection Info */}
          <Card className="p-6 sm:p-8 space-y-5 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Delivery & Collection</h3>
            
            <div className="space-y-5 sm:space-y-6">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 sm:p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Delivery Available</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  We offer delivery services for all our sarees. Contact us to discuss 
                  delivery options and arrangements for your location.
                </p>
              </div>

              <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-4 sm:p-6 rounded-lg border-l-4 border-secondary">
                <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Visit Our Store</h4>
                <p className="text-muted-foreground text-sm sm:text-base">
                  You're welcome to visit our store and view our complete collection in person. 
                  Our staff will guide you through the selection process and help you choose 
                  the perfect saree.
                </p>
              </div>

              <div className="bg-muted/50 p-4 sm:p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Why Visit Us?</h4>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>View complete saree collections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Feel the fabric quality firsthand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Personal consultation with our experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Discuss custom design requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Map Placeholder */}
        <div className="max-w-5xl mx-auto mt-6 sm:mt-8">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted/50 flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center p-4 sm:p-8">
                <MapPin className="h-8 w-8 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-3 sm:mb-4" />
                <p className="text-muted-foreground text-sm sm:text-base px-4">
                  Map integration ready<br />
                  <span className="text-xs sm:text-sm">Google Maps embed can be added here</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
