import Navbar from "./components/NavBar/MyNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Servizi from "./components/Servizi/MyComponent";
import DoveSiamo from "./components/DoveSiamo/Location";
import { useGlobalContext } from "./components/context";

function App() {
  const prova = useGlobalContext();
  return (
    <Router className="App">
      <Navbar />
      <Header />
      <Servizi />
      <DoveSiamo />
      {/*       <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={<Servizi />} />
        <Route path="/dovesiamo" element={<DoveSiamo />} />
      </Routes> */}
    </Router>
  );
}

export default App;