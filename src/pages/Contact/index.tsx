import { ContactStyle } from "./styled";
import { Header } from "../../components/Header";
import { Canvas } from "../../components/Canvas";

export const Contact = () => {
    return (
        <Canvas>
            <ContactStyle>
                
                <Header/>
                <div>Contact</div>
                
            </ContactStyle>
        </Canvas>
    );
}