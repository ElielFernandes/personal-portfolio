import { FormationStyle } from "./styled";
import { FiBook } from "react-icons/fi";

type Props = {
    college: string;
    course: string;
    status: string;
}
export const Formation = ({ college, course, status}: Props) => {
    return (
        <FormationStyle>
            <div className="formation-title">
                <div className="formation-icon"><FiBook/></div>
                <div className="formation-college">{college}</div>
            </div>
            <div className="formation-description">
                <div className="formation-course">{course}</div>
                <div className="formation-status">{status}</div>
            </div>
        </FormationStyle>
    );
}