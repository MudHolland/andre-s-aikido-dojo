import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import aikidoImage from "@/assets/aikido-practice.jpg";
import judoImage from "@/assets/judo-practice.jpg";
import jodoImage from "@/assets/jodo-practice.jpg";

interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Nieuwe judolessen voor beginners",
    excerpt: "We zijn verheugd om aan te kondigen dat we nieuwe judolessen voor beginners starten...",
    content: "We zijn verheugd om aan te kondigen dat we nieuwe judolessen voor beginners starten. Deze lessen zijn speciaal ontworpen voor mensen die voor het eerst kennismaken met judo. In een veilige en ondersteunende omgeving leren deelnemers de basisprincipes van deze respectvolle vechtsport.",
    date: "15 maart 2024",
    image: judoImage,
  },
  {
    title: "Aikido seminar met gastdocent",
    excerpt: "Volgende maand verwelkomen we een speciale gastdocent voor een intensief aikido seminar...",
    content: "Volgende maand verwelkomen we een speciale gastdocent voor een intensief aikido seminar. Deze ervaren meester zal verschillende technieken en filosofieën delen. Het seminar is geschikt voor alle niveaus en biedt een unieke kans om van een expert te leren.",
    date: "10 maart 2024",
    image: aikidoImage,
  },
  {
    title: "Succesvol Jo-do examen",
    excerpt: "Gefeliciteerd aan alle studenten die hun Jo-do examen met succes hebben afgerond...",
    content: "Gefeliciteerd aan alle studenten die hun Jo-do examen met succes hebben afgerond. Hun toewijding en harde werk hebben zich uitbetaald. We zijn trots op hun prestaties en kijken uit naar hun verdere ontwikkeling in Next Level Jo-do.",
    date: "5 maart 2024",
    image: jodoImage,
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.title}
                className="border-border hover:border-primary transition-smooth overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-slow hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setSelectedPost(post)}
                  >
                    Lees meer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedPost?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <img
              src={selectedPost?.image}
              alt={selectedPost?.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-sm text-muted-foreground">{selectedPost?.date}</p>
            <p className="text-foreground leading-relaxed">{selectedPost?.content}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Blog;
