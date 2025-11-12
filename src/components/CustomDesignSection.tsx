import { Card } from "@/components/ui/card";
import { MessageCircle, Lightbulb, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomDesignSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Describe Your Design",
      description: "Share your vision with us via WhatsApp. Send us design ideas, patterns, or inspirations you have in mind.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "We Note & Advise",
      description: "Our team records your design preferences and provides expert suggestions on thread quality, patterns, and fabric choices.",
    },
    {
      number: "03",
      icon: Scissors,
      title: "Weaving & Delivery",
      description: "Your saree is meticulously woven as per your design. We explain the pricing and arrange convenient delivery.",
    },
  ];

  return (
    <section id="custom-design" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Custom Design Process
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            From your imagination to reality - in three simple steps
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="p-6 sm:p-8 text-center space-y-3 sm:space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 text-6xl sm:text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                    {step.number}
                  </div>
                  
                  <div className="relative">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <Card className="p-6 sm:p-8 md:p-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20">
            <div className="text-center space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Ready to Create Your Dream Saree?
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Start your custom design journey today. Our team is ready to bring your vision to life 
                with traditional craftsmanship and modern expertise.
              </p>
              <Button
                variant="gold"
                size="lg"
                asChild
                className="text-base sm:text-lg min-h-[48px] w-full sm:w-auto"
              >
                <a
                  href="https://wa.me/919189889549"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Custom Order
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CustomDesignSection;
