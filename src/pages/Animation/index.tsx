import { NotFoundStyle } from "./styled";
import { Header } from "../../components/Header";
import { Animation } from "../../components/Animation";

export const AnimationTest = () => {
    return (
        <Animation size={6} quantityItems={100} minimumSpeed={0.3} maximumSpeed={1} >
            <NotFoundStyle>
                <Header/>
            </NotFoundStyle>
        </Animation>
    );
}