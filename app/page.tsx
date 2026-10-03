import Appointment from "./components/appointment";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import HowItWorks from "./components/how-it-works";
import Testimonials from "./components/testimonials";
import Stats from "./components/stats";
import SectionDivider from "./components/sectiondivider";

export default function Home() {
  return (
    <main id="top" className="m-0 p-0">
      <Navbar />
      <Hero />
      <Stats />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Appointment />
      <SectionDivider />
      <HowItWorks  />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Testimonials />
      <Footer />
    </main>
  );
}
