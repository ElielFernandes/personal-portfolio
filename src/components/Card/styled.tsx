import styled from "styled-components";

type Props = {
    box ?: boolean;
    direction ? : string 
}


export const CardStyle = styled.div<Props>`

    flex: 1;
    /*background-color: rgb(255, 255, 255);*/
    box-shadow: ${(props) => props.box ? '0px 0px 5px black' : '0px 0px 0px black' };
    padding: 1rem;
    display: flex;
    flex-direction: column;

    .title{
        border-bottom: rgb(121, 120, 120) solid 1px;
        display: flex;
        justify-content: center;
    }

    .children{
        display: flex;
        flex-direction: ${(props) => props.direction};
        align-items: center;
        justify-content: center;
        flex: 1;
        width: 100%;
    }

`;

CardStyle.defaultProps = {
    direction: "row"
}