import FormStyle from "../assets/styles/FormStyle";
import SignPageStyle from "../assets/styles/SignPageStyle";

import { Link } from "react-router-dom";

export default function SignInPage() {
    function signIn(e) {
        e.preventDefault();
    }

    return (
        <SignPageStyle>
            <div>
                Login
            </div>

            <FormStyle onSubmit={signIn}>
                <input
                    placeholder="E-mail"
                    required
                    type="email"
                />
                
                <input
                    minLength="4"
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
