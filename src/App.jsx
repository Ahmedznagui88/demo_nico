import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Vista from "./components/Vista";
import Servizi from "./components/MyComponent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ErrorScreen from "./screen/ErrorScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Header />} />
        <Route path="/servizi" element={<Servizi />} />
        <Route path="/Vista" element={<Vista />} />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;