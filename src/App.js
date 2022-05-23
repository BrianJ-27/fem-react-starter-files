import Footer from "./components/layout/footer/footer";
import Button from "./components/reusable/button/button";

const App = () => {
  return (
    <div className="grid__container">
      <main className="main__grid--container">
        These are my React Starter Files
      </main>
      <Button>Send Now!</Button>
      <Footer />
    </div>
  );
};

export default App;
