import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Andre's Aikido School" className="h-12 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("aanbod")}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Aanbod
            </button>
            <button 
              onClick={() => scrollToSection("rooster")}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Rooster
            </button>
            <button 
              onClick={() => scrollToSection("blog")}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Nieuws
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
            >
              Contact
            </Button>
          </div>

          <Button 
            variant="outline" 
            size="sm"
            className="md:hidden border-border"
          >
            Menu
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
