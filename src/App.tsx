import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Homepage from "./components/pages/Homepage";
import SingleProduct from "./components/pages/SingleProduct";

function App() {
    return (
        <>
            <Navbar />
            <SingleProduct />
            {/* <Homepage /> */}
            <Footer />
        </>
    );
}

export default App;
