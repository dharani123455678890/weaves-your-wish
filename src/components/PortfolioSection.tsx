import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import sareeCollection from "@/assets/sarees-collection.jpg";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Craftsmanship
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Witness the journey from thread to masterpiece
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4" />
        </div>

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {/* Featured Collection Image */}
          <Card className="overflow-hidden shadow-xl">
            <img
              src={sareeCollection}
              alt="Collection of handwoven silk sarees"
              className="w-full h-auto object-cover"
            />
          </Card>

          {/* Portfolio Showcase Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4 hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold text-primary">Weaving Phase</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Watch the intricate process of hand loom weaving, where skilled artisans bring designs to life, 
                thread by thread, on traditional looms.
              </p>
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <p className="text-muted-foreground text-center px-4 text-xs sm:text-sm">
                  Video content: Weaving process<br />
                  <span className="text-xs">(Structure ready for video integration)</span>
                </p>
              </div>
            </Card>

            <Card className="p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4 hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold text-primary">Folding Phase</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                The delicate art of folding and handling completed sarees, ensuring the fabric maintains 
                its pristine quality and beautiful drape.
              </p>
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <p className="text-muted-foreground text-center px-4 text-xs sm:text-sm">
                  Video content: Folding & handling<br />
                  <span className="text-xs">(Structure ready for video integration)</span>
                </p>
              </div>
            </Card>
          </div>

          {/* Final Showcase Tabs */}
          <Card className="p-5 sm:p-6 md:p-8">
            <Tabs defaultValue="final1" className="w-full">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Final Masterpieces</h3>
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 h-auto gap-1">
                  <TabsTrigger value="final1" className="text-xs sm:text-sm py-2">Saree 1</TabsTrigger>
                  <TabsTrigger value="final2" className="text-xs sm:text-sm py-2">Saree 2</TabsTrigger>
                  <TabsTrigger value="final3" className="text-xs sm:text-sm py-2">Saree 3</TabsTrigger>
                  <TabsTrigger value="final4" className="text-xs sm:text-sm py-2">Saree 4</TabsTrigger>
                  <TabsTrigger value="final5" className="text-xs sm:text-sm py-2">Saree 5</TabsTrigger>
                </TabsList>
              </div>

              {[1, 2, 3, 4, 5].map((num) => (
                <TabsContent key={num} value={`final${num}`} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                      <p className="text-muted-foreground text-center text-xs sm:text-sm px-2">
                        High-quality image {num}A<br />
                        <span className="text-xs">(Gallery ready)</span>
                      </p>
                    </div>
                    <div className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                      <p className="text-muted-foreground text-center text-xs sm:text-sm px-2">
                        High-quality image {num}B<br />
                        <span className="text-xs">(Gallery ready)</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground italic text-center">
                    Click images to view in full size
                  </p>
                </TabsContent>
              ))}
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
