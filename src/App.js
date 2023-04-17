import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TopTeams from "./components/TopTeams";
import TopPlayers from "./components/TopPlayers";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopTeams />
      <TopPlayers />
      <Footer />
    </div>
  );
}

export default App;
