import { NotFoundStyle } from "./styled";
import { Header } from "../../components/Header";
import { Canvas } from "../../components/Canvas";

export const NotFound = () => {
    return (
        <Canvas>
            <NotFoundStyle>
                <Header/>
                Not found
            </NotFoundStyle>
        </Canvas>
    );
}