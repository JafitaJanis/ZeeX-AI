import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import Team from "./components/Team";
import Journey from "./components/Journey";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="antialiased">
      <Hero />
      <MissionVision />
      <Team />
      <Journey />
      <Footer />
    </div>
  );
}
