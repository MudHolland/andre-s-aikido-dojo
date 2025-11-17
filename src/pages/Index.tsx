import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Schedule from "@/components/Schedule";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Schedule />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
