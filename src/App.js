import GlobalStyle from "./assets/styles/GlobalStyle";

import Footer from "./components/Footer";
import Header from "./components/Header";

import TokenContext from "./contexts/TokenContext";
import UsernameContext from "./contexts/UsernameContext";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
    const [token, setToken] = useState(
        localStorage.getItem("token") || undefined
    );

    const [username, setUsername] = useState(
        localStorage.getItem("username") || undefined
    );

    return (
        <BrowserRouter>
            <GlobalStyle />

            <TokenContext.Provider value={[token, setToken]}>
            <UsernameContext.Provider value={[username, setUsername]}>
                <Header />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cadastro" element={<SignUpPage />} />
                    <Route path="/login" element={<SignInPage />} />
                </Routes>
            </UsernameContext.Provider>
            </TokenContext.Provider>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
