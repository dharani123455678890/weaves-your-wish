import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import heroWeaving from "@/assets/hero-weaving.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroWeaving}
          alt="Traditional hand loom weaving in progress"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70 md:from-background/95 md:via-background/80 md:to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 z-10 relative">
        <div className="max-w-3xl">
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Hand Loom Weaving Saree
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold italic">
              ஆர்டரின் பெயரில் நைத்துறப்படும்
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light">
              We weave sarees exactly as per your wish design.
            </p>

            <p className="text-base sm:text-lg text-foreground/80 max-w-2xl">
              Specializing in custom hand loom sarees with traditional craftsmanship. 
              Every thread tells a story, every pattern reflects your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button
                variant="whatsapp"
                size="lg"
                asChild
                className="w-full sm:w-auto min-h-[48px]"
              >
                <a
                  href="https://wa.me/919189889549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact via WhatsApp
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto min-h-[48px]"
              >
                <a href="tel:+919189889549" className="text-base sm:text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="pt-4 sm:pt-6 text-sm sm:text-base text-muted-foreground">
              <p>📍 Kothamangalam, KVB Bank Opposite</p>
              <p className="text-xs sm:text-sm">P. Velur (TK), Namakkal (D.T), 637 213</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
