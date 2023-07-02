import styled from "styled-components";

export const AboutStyle = styled.div`
    
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 64px);
    padding: 1rem;

    display: grid;

    .item1 { grid-area: item1; }
    .item2 { grid-area: item2; }
    .item3 { grid-area: item3; }

    grid-template-columns: 1fr 1fr;

    grid-template-areas:
      'item1 item3'
      'item2 item3';
  
    gap: 1rem;

    .about-description-formation{
        width: 100%;
    }

    .about-description-professional{
        width: 100%;
    }

    @media (max-width: 600px) { 

        grid-template-columns: 1fr;
        grid-template-areas:
        'item3'
        'item1'
        'item2';

        .about-description-formation{
            margin-top: 15px;
        }

        .about-description-professional{
            margin-top: 15px;
        }
    }
`;