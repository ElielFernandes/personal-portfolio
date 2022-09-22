import { HomeStyle } from "./styled";
import { Header } from "../../components/Header";
import { Canvas } from "../../components/Canvas";
import foto from "../../images/eliel.png";
import { Card } from "../../components/Card";

export const Home = () => {
    return (
        <Canvas>
            <Header/>
            <HomeStyle>
                <Card>
                    <div className="home-info-text">
                        <div className="home-info-hello">Olá!</div>
                        <div className="home-info-name">Meu nome é Eliel</div>
                        <div className="home-info-web">Desenvolvedor Back End</div>
                    </div>
                </Card>
                <Card>
                    <div className="home-image">
                        <img className="home-image-img" src={foto}/>
                    </div>     
                </Card>
            </HomeStyle>
        </Canvas>
    );
}