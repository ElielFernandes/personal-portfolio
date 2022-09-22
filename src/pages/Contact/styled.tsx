import styled from "styled-components";

export const ContactStyle = styled.div`

    max-width: 1200px;
    margin: 0px auto;
    padding: 1rem;
    display: flex;
    height: calc(100% - 60px);

    .area{
        flex:1;
        margin: 3px;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    @media (max-width: 600px) { 

        
        flex-direction: column;
        
    }
`;