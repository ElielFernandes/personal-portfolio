import { ProfessionalStyle } from "./styled";
import { BiBriefcase } from 'react-icons/bi';

type Props = {
    initialDate: string;
    finalDate: string;
    company: string;
    office: string;
}
export const Professional = ({initialDate, finalDate, company, office}: Props) => {
    return (
        <ProfessionalStyle>
            <div className="professional-title">
                <div className="professional-icon"><BiBriefcase/></div>
                <div className="professional-period">{initialDate} - {finalDate}</div>
            </div>
            <div className="professional-description">
                <div className="professional-company">{company}</div>
                <div className="professional-office">{office}</div>
            </div>
        </ProfessionalStyle>
    );
}