import Footer from "./components/layout/footer/footer";
import Form from "./components/layout/form/form";

const App = () => {
  return (
    <div className="grid__container">
      <main className="main__grid--container">
        These are my React FEM Starter Files
        <Form />
        <Footer />
      </main>
    </div>
  );
};

export default App;
