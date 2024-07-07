import Navbar from "./components/NavBar/MyNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Servizi from "./components/Servizi/MyComponent";
import VisteCatalogo from "./components/VisteCatalogo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/VisteCatalogo" element={<VisteCatalogo />} />
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;
