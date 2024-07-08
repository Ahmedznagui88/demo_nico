import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Header from "./components/Header/Header";
import Servizi from "./components/Servizi/MyComponent";
import Sidebar from "./components/Sidebar/Sidebar";
import VisteCatalogo from "./components/VisteCatalogo";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Header />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/VisteCatalogo" element={<VisteCatalogo />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;