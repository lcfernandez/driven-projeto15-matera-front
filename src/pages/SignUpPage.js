import { BASE_URL } from "../constants/url";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SignUpPage() {
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState(undefined);
    const [name, setName] = useState("");
    const [password, setPassword] = useState(undefined);
    const [repeatPassword, setRepeatPassword] = useState(undefined);

    const navigate = useNavigate();

    function signUp(e) {
        e.preventDefault();

        if (password !== repeatPassword) {
            alert("As senhas não são iguais. Tente novamente.");
        } else {
            setDisabled(true);

            const body = {
                name: name.trimEnd(),
                email,
                password,
                repeat_password: repeatPassword
            };

            axios
                .post(`${BASE_URL}/sign-up`, body)
                .then(
                    () => {
                        alert("Usuário cadastrado com sucesso!");
                        navigate("/login");
                    }
                )
                .catch(
                    err => {
                        alert(err.response.data.message);
                        err.response.data.errors && console.error(err.response.data.errors);
                        setDisabled(false);
                    }
                );
        }
    }

    return(
        <SignUpPageContainer>
            <div>
                Cadastro
            </div>

            <Form onSubmit={signUp}>
                <input
                    disabled={disabled && true}
                    minLength="1"
                    onChange={e => setName(e.target.value.trimStart())}
                    placeholder="Nome"
                    required
                    type="text"
                    value={name}
                />
                
                <input
                    disabled={disabled && true}
                    onChange={e => setEmail(e.target.value.toLowerCase())}
                    placeholder="E-mail"
                    required
                    type="email"
                />
                
                <input
                    disabled={disabled && true}
                    minLength="4"
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Senha"
                    required
                    type="password"
                />
                
                <input
                    disabled={disabled && true}
                    minLength="4"
                    onChange={e => setRepeatPassword(e.target.value)}
                    placeholder="Confirmar senha"
                    required
                    type="password"
                />

                <button>Cadastrar</button>
            </Form>

            <Link to="/login">
                Já tem uma conta? Entre agora!
            </Link>
        </SignUpPageContainer>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const SignUpPageContainer = styled.div`
    text-align: center;

    > div {
        text-align: left;
    }
`;
