import { AboutSection } from "@/components/AboutSection/AboutSection";
import { Experience } from "@/components/ExperienceSection/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar/NavBar";
import { ProjectsSection } from "@/components/ProjectsSection/ProjectsSection";
import "@/index.css";
import "@fontsource/open-sans";

function App() {
  return (
    //<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <>
      <NavBar />
      <main>
        <Header />
        <Experience />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </>

    //</div>
  );
}

export default App;
