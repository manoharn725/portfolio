import { Routes, Route } from "react-router-dom";
import DesignSystem from "./pages/DesignSystem";
import About from "./pages/About";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import "./index.scss";

import PageNotFound from "./pages/PageNotFound";
const App = () => {
  return (
    <div className="app">
      <Topbar />
      <Routes>
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/about/" element={<About />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
