import { Card, CardContent } from "@/components/ui/card";
import aikidoImage from "@/assets/aikido-practice.jpg";
import jodoImage from "@/assets/jodo-practice.jpg";
import iaidoImage from "@/assets/iaido-practice.jpg";
import judoImage from "@/assets/judo-practice.jpg";
import tuimeljudoImage from "@/assets/tuimeljudo-practice.jpg";

interface Sport {
  name: string;
  description: string;
  image: string;
}

const sports: Sport[] = [
  {
    name: "Saamhorigheid",
    description: "Onze school is een plek waar je je veilig en zeker kunt voelen. Leren gaat nu eenmaal met vallen en opstaan, en hier mag dat.",
    image: aikidoImage,
  },
  {
    name: "Aikido",
    description: "Liever iets praktisch voor het dagelijks leven? Dan is aikido een uitstekende keuze om jezelf op straat te leren verdedigen.",
    image: aikidoImage,
  },
  {
    name: "Jo-do",
    description: "Wil je je verdiepen in Next Level jo-do, onze zelfontwikkelde stafstijl waarin kracht, precisie en concentratie samenkomen?",
    image: jodoImage,
  },
  {
    name: "Iaido",
    description: "Of trekt het iaido, het elegante zwaardvechten, je meer aan?",
    image: iaidoImage,
  },
  {
    name: "Judo",
    description: "En voor wie houdt van techniek en respectvolle kracht is er judo.",
    image: judoImage,
  },
  {
    name: "Tuimeljudo",
    description: "Een speelse kennismaking voor de kleintjes (2,5 - 5 jaar) is er in de vorm van tuimeljudo.",
    image: tuimeljudoImage,
  },
];

const Services = () => {
  return (
    <section id="aanbod" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Ons Aanbod
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ontdek de verschillende martial arts die wij aanbieden
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((sport, index) => (
            <Card 
              key={sport.name} 
              className="group overflow-hidden border-border hover:border-primary transition-smooth gradient-card shadow-medium hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover transition-slow group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-foreground">
                  {sport.name}
                </h3>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {sport.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
