import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import CatLoader from "./components/CatLoader";

//Lazy loading
const DesignSystem = lazy(()=> import('./pages/DesignSystem'));

const App = () => {
  return (
    <div className="app">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-system" element={<Suspense fallback={<CatLoader />}><DesignSystem /></Suspense>} />
        {/* <Route path="/page-not-found" element={<PageNotFound />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
