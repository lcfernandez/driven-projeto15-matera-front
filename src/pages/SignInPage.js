import FormStyle from "../assets/styles/FormStyle";
import SignPageStyle from "../assets/styles/SignPageStyle";

import { BASE_URL } from "../constants/url.js";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignInPage({ setUsername }) {
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    const navigate = useNavigate();

    function signIn(e) {
        e.preventDefault();

        setDisabled(true);

        const body = {
            email,
            password
        };

        axios
            .post(`${BASE_URL}/sign-in`, body)
            .then(
                res => {
                    setUsername(res.data.name);
                    localStorage.setItem("username", res.data.name);

                    navigate("/");
                }
            )
            .catch(
                err => {
                    alert(err.response.data.message);
                    setDisabled(false);
                }
            );
    }

    return (
        <SignPageStyle>
            <div>
                Login
            </div>

            <FormStyle onSubmit={signIn}>
                <input
                    disabled={disabled && true}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    required
                    type="email"
                />
                
                <input
                    disabled={disabled && true}
                    minLength="4"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    required
                    type="password"
                />

                <button>Entrar</button>
            </FormStyle>

            <Link to="/cadastro">
                Não tem uma conta? Cadastre-se agora!
            </Link>
        </SignPageStyle>
    );
}
