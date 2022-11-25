import GlobalStyle from "./assets/styles/GlobalStyle";

import Footer from "./components/Footer";
import Header from "./components/Header";

import TokenContext from "./contexts/TokenContext";
import UsernameContext from "./contexts/UsernameContext";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import AccountPage from "./pages/AccountPage";
import CardsPage from "./pages/CardsPage";
import PurchasesPage from "./pages/PurchasesPage";
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
    const [token, setToken] = useState(
        localStorage.getItem("token") || undefined
    );

    const [username, setUsername] = useState("Laisse");

    /* const [username, setUsername] = useState(
        localStorage.getItem("username") || undefined
    ); */

    return (
        <AppContext.Provider
            value={{ products, setProducts }}
        >
            <BrowserRouter>
                <GlobalStyle />

                <TokenContext.Provider value={[token, setToken]}>
                <UsernameContext.Provider value={[username, setUsername]}>
                    <Header />

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/cadastro" element={<SignUpPage />} />
                        <Route path="/login" element={<SignInPage />} />
                        <Route path="/conta" element={<AccountPage />} />
                        <Route path="/conta/pedidos" element={<PurchasesPage />} />
                        <Route path="/conta/cartoes" element={<CardsPage />} />
                        <Route path="/produtos" element={<ProductsPage />} />
                        <Route path="/produtos/cadeiras" element={<ChairsPage />} />
                        <Route path="/produtos/camas" element={<BedsPage />} />
                        <Route path="/produtos/sofas" element={<SofasPage />} />
                        <Route path="/produtos/mesas" element={<TablesPage />} />
                    </Routes>
                </UsernameContext.Provider>
                </TokenContext.Provider>

                <Footer />
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
