import { ContactStyle } from "./styled";
import { Header } from "../../components/Header";
import { Canvas } from "../../components/Canvas";
import { Card } from "../../components/Card";

export const Contact = () => {
    return (
        <Canvas>
            <Header/>
            <ContactStyle>
                <div className="area">
                    <Card box={true}><div >Informações</div></Card>
                </div>
                <div className="area">
                    <Card box={true}><div >Contato</div></Card>
                </div>
            </ContactStyle>
        </Canvas>
    );
}