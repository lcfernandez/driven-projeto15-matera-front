import { AboutContainer, AboutImg, ConfortContainer, ConfortImg, SustainabilityTitle, SustainabilityContainer, SustainabilityImg } from "../assets/styles/AboutUsStyles";
import confort from "../assets/images/confort.png";
import about from "../assets/images/about.png";
import sustainability from "../assets/images/sustainability.png";

const AboutUsPage = () => {
    return (
        <AboutContainer>
            <AboutImg
                src={about}
                alt="imagem de uma sala de estar"
            />
            <p>
                Há 20 anos no mercado, MATERA é uma marca consolidada no mercado de mobiliário exclusivo que atua por todo o território nacional.
            </p>
            <ConfortContainer>
                <p>
                    Aqui você encontra estilo, conforto e móveis que transformam o seu espaço no seu lar.
                </p>
                <ConfortImg
                    src={confort}
                    alt="imagem de uma pessoa deitada no sofá"
                />
            </ConfortContainer>
            <SustainabilityTitle>Sustentabilidade</SustainabilityTitle>
            <SustainabilityContainer>
                <SustainabilityImg
                    src={sustainability}
                    alt="imagem de móveis com placas sobre sustantabilidade"
                />
                <ul>
                    <li>
                        Somos 100% carbono negativo
                        <p>Vamos além do neutro e compensamos o dobro do carbono que emitimos na nossa cadeia de produção. </p>
                    </li>
                    <li>
                        Usamos apenas madeira de demolição
                        <p>Madeira de demolição é uma forma responsável de se utilizar madeiras nobres de forma racional sem agressões ao meio-ambiente.</p>
                    </li>
                    <li>
                        Consumo consciente
                        <p>Nós acreditamos em evitar desperdícios para quem compra conosco e para o meio ambiente. Portanto, conte conosco para entregar móveis de qualidade. </p>
                    </li>
                </ul>
            </SustainabilityContainer>

        </AboutContainer>
    );
};

export default AboutUsPage;