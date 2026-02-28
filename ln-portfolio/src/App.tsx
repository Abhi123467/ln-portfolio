import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Workflow from "./components/Workflow";
import Videos from "./components/Videos";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Workflow />
      <Videos />
      <Contact />
    </main>
  );
}