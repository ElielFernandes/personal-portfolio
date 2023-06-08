import { AboutStyle } from "./styled";
import { Header } from "../../components/Header";
import { Canvas } from "../../components/Canvas";
import { Card } from "../../components/Card";
import { Progress } from "../../components/Progress";

export const About = () => {
    return (
        <Canvas>
            <Header/>
            <AboutStyle>
                
                <Card className="item1" box={true} title={"Formation"}>
                    <div className="about-description-formation">

                        <div  className="about-description-formation-item">
                            <div className="about-description-formation-college">UniBrasil Centro Universitário</div>
                            <div className="about-description-formation-course" >Tecnologia em Análise e Desenvolvimento de Sistemas, 3º Período.</div>
                            <div className="about-description-formation-status" >Cursando</div>
                        </div>

                        <div  className="about-description-formation-item">
                            <div className="about-description-formation-college">Pontifícia Universidade Católica do Paraná.</div>
                            <div className="about-description-formation-course" >Licenciatura em Matemática, 7º período.</div>
                            <div className="about-description-formation-status" >Trancado.</div>
                        </div>

                    </div>
                </Card>

                <Card className="item2" box={true} title={"Professional"}>
                    <div className="about-description-professional">

                        <div className="about-description-professional-item">
                            <div className="about-description-professional-company">E-completo Ecommerce – março/2023</div>
                            <div className="about-description-professional-office">Desenvolvedor Back End Pleno</div>
                        </div>

                        <div className="about-description-professional-item">
                            <div className="about-description-professional-company">E-completo Ecommerce – outubro/2021</div>
                            <div className="about-description-professional-office">Desenvolvedor Back End Júnior</div>
                        </div>

                        <div className="about-description-professional-item">
                            <div className="about-description-professional-company">Braineei Máquinas e Equipamentos LTDA – janeiro/2019 a setembro/2021</div>
                            <div className="about-description-professional-office">Desenhista</div>
                        </div>

                    </div>
                </Card>
               
                <Card className="item3" box={true} direction={"column"} title={"Skills"}>
                    <Progress title={"HTML"} level={70}/>
                    <Progress title={"CSS"} level={50}/>
                    <Progress title={"PHP"} level={80}/>
                    <Progress title={"Javascript"} level={60}/>
                    <Progress title={"Laravel"} level={70}/>
                    <Progress title={"Codeigniter"} level={70}/>
                    <Progress title={"MySQL"} level={60}/>
                    <Progress title={"PostgreSQL"} level={60}/>
                </Card>
             
            </AboutStyle>
        </Canvas>
    );
}