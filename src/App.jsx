import Navbar from "./components/NavBar/MyNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Servizi from "./components/Servizi/MyComponent";


function App() {

  return (
    <Router className="App">
      <Navbar />
      <Header />
      <Servizi />
            <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={<Servizi />} />
      </Routes>
    </Router>
  );
}

export default App;