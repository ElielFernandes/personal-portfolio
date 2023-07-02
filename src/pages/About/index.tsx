import { AboutStyle } from "./styled";
import { Header } from "../../components/Header";
import { Animation } from "../../components/Animation";
import { Professional } from "../../components/Professional";
import { Formation } from "../../components/Formation";
import { Card } from "../../components/Card";
import { Progress } from "../../components/Progress";

export const About = () => {
    return (
        <Animation quantityItems={60}>
            <Header/>
            <AboutStyle>

                <Card className="item1" box={true} title={"Formation"}>
                    <div className="about-description-formation">
                        <Formation
                            college= "UniBrasil Centro Universitário."
                            course = "Tecnologia em Análise e Desenvolvimento de Sistemas, 3º Período."
                            status = "Cursando."
                        />
                        <Formation
                            college= "Pontifícia Universidade Católica do Paraná."
                            course = "Licenciatura em Matemática, 7º período."
                            status = "Trancado."
                        />
                    </div>
                </Card>

                <Card className="item2" box={true} title={"Professional"}>
                    <div className="about-description-professional">
                        <Professional
                            initialDate="Março/2023"
                            finalDate="Atual"
                            company="E-completo Ecommerce"
                            office="Desenvolvedor Back End Pleno"
                        />
                        <Professional
                            initialDate="Outubro/2021"
                            finalDate="Março/2023"
                            company="E-completo Ecommerce"
                            office="Desenvolvedor Back End Júnior"
                        />
                        <Professional
                            initialDate="Janeiro/2019"
                            finalDate="Setembro/2021"
                            company="Braineei Máquinas e Equipamentos LTDA"
                            office="Desenhista"
                        />
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
        </Animation>
    );
}