import {ReactNode} from 'react';
import { CardStyle } from "./styled";

type Props = {
    children: ReactNode;
    box? : boolean;
    direction ?: string;
    title ?: string;
    className ?: string;
}

export const Card = ({children , box, direction, title, className}: Props) => {
    return (
        <CardStyle className={className} box = { box } direction = {direction}>
            {title && 
                <div className='title'>{title}</div>
            }
            
            <div className='children'>{children}</div>
        </CardStyle>
    );
} 

Card.defaultProps = {
    direction : "row"
}