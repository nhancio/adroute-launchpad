import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import AdvertisingStructureSection from "@/components/AdvertisingStructureSection";
import WhyNowSection from "@/components/WhyNowSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhatWeOfferSection />
        <AdvertisingStructureSection />
        <WhyNowSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
