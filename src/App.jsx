import { Routes, Route } from "react-router-dom";
import DesignSystem from "./pages/DesignSystem";
import About from "./pages/About";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import "./index.scss";
const App = () => {
  return (
    <div className="app">
      <Topbar />
      <Routes>
        <Route path="/" element={<DesignSystem />} />
        <Route path="/about/" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
