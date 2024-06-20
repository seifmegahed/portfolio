import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Portrait from "./sections/Portrait";

function App() {
  return (
    <div className=" flex justify-center w-screen h-full text-white font-inter font-thin bg-gradient-to-br from-slate-700 to-white">
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-screen-lg w-full h-full p-4 gap-10">
        <Hero />
        <Portrait />
        <Projects />
      </div>
    </div>
  );
}

export default App;
