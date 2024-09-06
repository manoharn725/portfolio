import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DesignSystem from "./pages/DesignSystem";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";


import PageNotFound from "./pages/PageNotFound";
const App = () => {
  return (
    <div className="app">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
