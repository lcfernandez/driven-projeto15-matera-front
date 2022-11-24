import GlobalStyle from "./assets/styles/GlobalStyle";

import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
    const [username, setUsername] = useState(
        localStorage.getItem("username") || undefined
    );

    return (
        <BrowserRouter>
            <GlobalStyle />

            <Header username={username} />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/login" element={<SignInPage setUsername={setUsername} />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
