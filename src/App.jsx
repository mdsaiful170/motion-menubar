import Header from "./componet/main/Header";
import Hero from "./componet/main/Hero";
import "remixicon/fonts/remixicon.css";
import Products from "./componet/main/Products";
import Review from "./componet/main/Review";
import Contact from "./componet/main/Contact";
import Footer from "./componet/main/Footer";

const App = () => {
  return (
    <>
      <main className="bg-[url(/home-bg.png)] min-h-screen ">
        <Header />
        <br/><br/>
        <br/><br/>
        <Hero />
        <Products />
        <Review />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
