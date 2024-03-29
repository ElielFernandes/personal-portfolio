import { NotFoundStyle } from "./styled";
import { Header } from "../../components/Header";
import { Animation } from "../../components/Animation";

export const NotFound = () => {
    return (
        <Animation>
            <NotFoundStyle>
                <Header/>
                Not found
            </NotFoundStyle>
        </Animation>
    );
}