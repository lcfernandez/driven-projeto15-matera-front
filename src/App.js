import GlobalStyle from "./assets/styles/GlobalStyle";

import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProductsPage from "./pages/ProductsPage";
import BedsPage from "./pages/BedsPage";
import ChairsPage from "./pages/ChairsPage";
import SofasPage from "./pages/SofasPage";
import TablesPage from "./pages/TablesPage";

import { AppContext } from "./components/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
    const [products, setProducts] = useState(undefined);

    return (
        <AppContext.Provider
            value={{ products, setProducts }}
        >
            <BrowserRouter>
                <GlobalStyle />

                <Header />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cadastro" element={<SignUpPage />} />
                    <Route path="/login" element={<SignInPage />} />
                    <Route path="/produtos" element={<ProductsPage />} />
                    <Route path="/produtos/cadeiras" element={<ChairsPage />} />
                    <Route path="/produtos/camas" element={<BedsPage />} />
                    <Route path="/produtos/sofas" element={<SofasPage />} />
                    <Route path="/produtos/mesas" element={<TablesPage />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
