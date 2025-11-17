const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Andre's Aikido School
            </h3>
            <p className="text-muted-foreground">
              Vechtsportkunst in een respectvolle en ontspannen sfeer
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#diensten" className="text-muted-foreground hover:text-primary transition-smooth">
                  Disciplines
                </a>
              </li>
              <li>
                <a href="#rooster" className="text-muted-foreground hover:text-primary transition-smooth">
                  Lesrooster
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-smooth">
                  Nieuws
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: info@andresaikido.nl</p>
              <p>Tel: +31 (0)6 12345678</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 Andre's Aikido School. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
