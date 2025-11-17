import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-aikido.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)"
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-dojo-sand">
          Andre's Aikido School
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-dojo-sand/90 text-balance">
          Ontdek vechtsportkunst in een respectvolle en ontspannen sfeer
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-dojo-sand/80 text-balance">
          Bij mijn dojo draait het om groei, niet om verplichting. 
          Je traint omdat je <span className="text-primary font-semibold">wíl</span>, niet omdat het <span className="text-primary font-semibold">móet</span>, 
          zonder wedstrijd- of examenverplichting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth"
            onClick={() => scrollToSection("diensten")}
          >
            Ontdek Onze Disciplines
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-dojo-sand text-dojo-sand hover:bg-dojo-sand/10 transition-smooth"
            onClick={() => scrollToSection("rooster")}
          >
            Bekijk Lesrooster
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
