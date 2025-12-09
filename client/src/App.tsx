import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ height: "100vh" }}></div>
      <Footer />
    </div>
  );
}

export default App;
