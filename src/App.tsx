import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Homepage from "./components/pages/Homepage";
import SinglePost from "./components/pages/SinglePost";
import SingleProduct from "./components/pages/SingleProduct";
import client from "./lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <ApolloProvider client={client}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/product/:slug" element={<SingleProduct />} />
                <Route path="/blog/" element={<Blog />} />
                <Route path="/blog/:slug" element={<SinglePost />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
            <Footer />
        </ApolloProvider>
    );
}

export default App;
