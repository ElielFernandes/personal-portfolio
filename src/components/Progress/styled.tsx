import styled from "styled-components";

type Props = {
    level : number
}

export const ProgressStyle = styled.div<Props>`


    width: 90%;
    margin: 5px;

    .progressBar{

        height: 18px;
        border: black solid 1px;
        display: flex;
        padding: 1px;
        border-radius: 8px;
        margin-top: 2px;

        .progressLevel{
            background-color: chartreuse;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: ${(props) => props.level === 100 ? '6px 6px 6px 6px' : '6px 0px 0px 6px' };
            width: ${(props) => props.level + "%"};
            animation-name: fade-out;
            animation-duration: 2.5s;
            animation-timing-function: linear;
            font-size: .7rem;
        }
    }

    .progressTitle{

        display: flex;
        align-items: center;
        justify-content: left;
        font-size: .8rem;
        
    }

    @keyframes fade-out {
        from {
            width: 10%;
        }
    }
`;