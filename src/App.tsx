import React, { useState } from "react";
import { Donate, HeroSlider, Info } from "./pages";
import { Navbar } from "./components";

function App() {
  const [language, setLanguage] = useState<string>("GR");
  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />
      <HeroSlider language={language} />
      <Info language={language} />
      <Donate language={language} />
    </div>
  );
}

export default App;
