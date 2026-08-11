import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import CertificateSection from "@/components/CertificateSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />
      <Hero />
      <PopularCourses />
      <WhyChooseUs />
      <HowItWorks />
      <CertificateSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
