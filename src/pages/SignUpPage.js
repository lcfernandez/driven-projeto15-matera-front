import { BASE_URL } from "../constants/url";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SignUpPage() {
    const [disabled, setDisabled] = useState(false);
    const [name, setName] = useState(undefined);
    const [cpf, setCpf] = useState(undefined);
    const [email, setEmail] = useState(undefined);
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
                name,
                cpf,
                email,
                password,
                repeat_password: repeatPassword
            };

            axios
                .post(`${BASE_URL}/sign-up`, body)
                .then(
                    () => {
                        alert("Cadastro feito com sucesso!");
                        navigate("/login");
                    }
                )
                .catch(
                    err => {
                        alert(err.response.data.message);
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
                    onChange={e => setName(e.target.value)}
                    placeholder="Nome completo"
                    required
                    type="text"
                />

                <input
                    disabled={disabled && true}
                    maxLength="14"
                    minLength="14"
                    onChange={e => setCpf(e.target.value)}
                    placeholder="CPF"
                    required
                    type="text"
                />
                
                <input
                    disabled={disabled && true}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="E-mail"
                    required
                    type="email"
                />
                
                <input
                    disabled={disabled && true}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Senha"
                    required
                    type="password"
                />
                
                <input
                    disabled={disabled && true}
                    onChange={e => setRepeatPassword(e.target.value)}
                    placeholder="Confirmar senha"
                    required
                    type="password"
                />

                <button>Cadastrar</button>
            </Form>

            Já tem uma conta? Entre agora!
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