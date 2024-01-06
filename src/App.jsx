import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Aossie from "./components/Aossie";
import Download from "./components/Download";
import mockup from "./assets/mockup.png";
import "./App.css";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <div className="justify-center mt-10 ml-32 mr-32">
      <h3 className="text-2xl text-black font-semibold text-center">
        With the rising popularity of social voice platforms such as Clubhouse
        and Twitter Spaces, it is high time for an Open Source alternative. A
        platform like this would not only enhance credibility within the
        open-source community but also attract more users and foster growth. An
        engagement platform that is Open Source has the potential to drive
        significant traction and help establish a strong presence.
      </h3>
    </div>

    <FeatureCard
      imageSrc={mockup}
      title="Real-time Audio Communication by joining rooms and talking to people."
      bullet="1."
    />

    <FeatureCard
      imageSrc={mockup}
      title="Ability to create rooms and moderate speakers and events."
      bullet="2."
    />

    <FeatureCard
      imageSrc={mockup}
      title="Pair chatting to enable users to find random partners to talk to in the app."
      bullet="3."
    />

    <FeatureCard
      imageSrc={mockup}
      title="Real-time messaging(Coming Soon)"
      bullet="4."
    />

    {/* Other components or content of your app */}

    <TechStack />
    <Aossie />
    <Download />
    <Footer />
  </>
);

export default App;
