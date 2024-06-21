import Header from "../src/components/Header";
import About from "./components/About";
import Main from "./components/Main";
import Podcast from "./components/Podcast";

// bg-gradient-to-t from-[#000000] to-red-500

// bg-gradient-to-r from-[#272626] to-[#251d1d]

function App() {
  return (
    <div className="h-full bg-gradient-to-r from-[#000000] to-[#dd1a1a]">
      <Header/>
      <Main/>
      <Podcast/>
      <About/>
    </div>
  );
}

export default App;
