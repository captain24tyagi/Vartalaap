import Header from "../src/components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Particle from "./components/Particle";
import Podcast from "./components/Podcast";
import Team from "./components/Team";

// bg-gradient-to-t from-[#000000] to-red-500

// bg-gradient-to-r from-[#272626] to-[#251d1d]

function App() {
  return (
    <div className="h-full bg-[#111111] relative">
      <Particle className="absolute w-full h-full top-0 left-0 z-0" />{" "}
      <div className="z-10 relative">
        <Header />
        <Main />
        <Podcast />
        <About />
        <Team />
        <Contact />
      </div>
    </div>
  );
}

export default App;
