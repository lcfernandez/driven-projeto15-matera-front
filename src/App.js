import GlobalStyle from "./assets/styles/GlobalStyle";

import Footer from "./components/Footer";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />

            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
