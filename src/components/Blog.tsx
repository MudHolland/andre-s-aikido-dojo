import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Welkom bij Andre's Aikido School",
    excerpt: "Ontdek wat onze dojo uniek maakt en waarom vechtsport meer is dan alleen techniek.",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "De Filosofie van Aikido",
    excerpt: "Leer over de principes van harmonie en vloeiende bewegingen in de kunst van aikido.",
    date: "2024-01-10",
  },
  {
    id: 3,
    title: "Tuimeljudo voor Kinderen",
    excerpt: "Een speelse introductie in de wereld van martial arts voor onze jongste leden.",
    date: "2024-01-05",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nieuws & Verhalen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Blijf op de hoogte van het laatste nieuws en inspirerende verhalen uit onze dojo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="gradient-card border-border hover:border-primary transition-smooth shadow-soft hover:shadow-medium group cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {post.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <Button 
                  variant="link" 
                  className="text-primary p-0 h-auto hover:text-primary/80"
                >
                  Lees meer →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
