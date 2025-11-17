import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bericht verzonden!",
      description: "We nemen zo spoedig mogelijk contact met je op.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground">
            Heb je vragen of wil je een proefles volgen? Neem contact met ons op!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Naam"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="E-mailadres"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background"
            />
          </div>
          <div>
            <Textarea
              placeholder="Bericht"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="bg-background min-h-[150px]"
            />
          </div>
          <Button type="submit" className="w-full">
            Verstuur bericht
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
