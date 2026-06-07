import Navbar from "../components/Navbar";
import BlogSection from "../pages/BlogSection";
import Hero from "../pages/Hero";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE3D5] to-[#BF4408]">
      <Navbar />
      <Hero />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
