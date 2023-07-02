import { HomeStyle } from "./styled";
import { Header } from "../../components/Header";
import { Animation } from "../../components/Animation";
import photo from "../../images/eliel.png";
import { Card } from "../../components/Card";
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export const Home = () => {
    return (
        <Animation quantityItems={60}>
            <Header/>
            <HomeStyle>
                <Card>
                    <div className="home-info-text">
                        <div className="home-info-hello">Olá!</div>
                        <div className="home-info-name">Meu nome é Eliel</div>
                        <div className="home-info-web">Desenvolvedor Back End</div>
                        <div className="home-info-link">
                            <a className="home-info-link-github" href="https://github.com/ElielFernandes" target="_blank">
                                <BsGithub className="home-info-icon-github" />
                            </a> 
                            <a className="home-info-link-linkdin" href="https://www.linkedin.com/in/eliel-jacomit-fernandes-0bba10175/" target="_blank">
                                <BsLinkedin className="home-info-icon-linkdin"/>
                            </a> 
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="home-image">
                        <img className="home-image-img" src={photo}/>
                    </div>     
                </Card>
            </HomeStyle>
        </Animation>
    );
}