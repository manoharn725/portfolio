import DesignSystem from "./pages/DesignSystem";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer"; 
import './index.scss';
const App = ()=> {
    return(
        <div className="app">
            <Topbar />
            <DesignSystem />
            <Footer />
        </div>
    )
}
export default App;