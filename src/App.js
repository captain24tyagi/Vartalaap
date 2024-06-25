import Header from "../src/components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Podcast from "./components/Podcast";
import Team from "./components/Team";

// bg-gradient-to-t from-[#000000] to-red-500

// bg-gradient-to-r from-[#272626] to-[#251d1d]

function App() {
  return (
    <div className="h-full bg-gradient-to-r from-[#000000] to-[#dd1a1a]">
      <Header />
      <Main />
      <Podcast />
      <About />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
