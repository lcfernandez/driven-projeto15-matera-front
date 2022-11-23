import styled from "styled-components";

export default function SignUpPage() {
    function signUp(e) {
        e.preventDefault();
    }

    return(
        <SignUpPageContainer>
            <div>
                Cadastro
            </div>

            <Form onSubmit={signUp}>
                <input
                    placeholder="Nome"
                    required
                    type="text"
                />
                
                <input
                    placeholder="E-mail"
                    required
                    type="email"
                />
                
                <input
                    placeholder="Senha"
                    required
                    type="password"
                />
                
                <input
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