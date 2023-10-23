import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Homepage from "./components/pages/Homepage";
import SingleProduct from "./components/pages/SingleProduct";

import { ApolloProvider } from "@apollo/client";
import client from "./lib/apollo";

function App() {
    return (
        <ApolloProvider client={client}>
            <Navbar />
            {/* <SingleProduct /> */}
            <Homepage />
            <Footer />
        </ApolloProvider>
    );
}

export default App;
