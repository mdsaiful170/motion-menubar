import Header from "./componet/main/Header";
import Hero from "./componet/main/Hero";
import { Button } from "./componet/shear/button";

const App = () => {
  return (
    <>
      <main className="bg-[url(/home-bg.png)] min-h-screen ">
        <Header />
        <br/><br/>
        <br/><br/>
        <Hero />
      
      </main>
    </>
  );
};

export default App;
