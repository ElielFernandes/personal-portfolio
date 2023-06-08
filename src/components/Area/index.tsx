import { AreaStyle } from "./styled";
import {ReactNode} from 'react';

type Props = {
    children: ReactNode;
}

export const Area = ({children}: Props) => {
    return (
        <AreaStyle>{children}</AreaStyle>
    );
}