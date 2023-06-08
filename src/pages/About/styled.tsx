import styled from "styled-components";

export const AboutStyle = styled.div`
    
    max-width: 1200px;
    margin: 0px auto;
    height: calc(100% - 60px);
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

    .about-description-formation-item{
     
        margin: 15px 8px;
        border-left:  rgb(82, 81, 81) solid 2px;
        padding-left: 5px;
    }
    
    .about-description-formation-college{
        font-size: 1rem;
        margin: 1px;
    }
    
    .about-description-formation-course{
        font-size: .8rem;
        margin: 1px;
    }
    
    .about-description-formation-status{
        font-size: .8rem;
        margin: 1px;
    }

    .about-description-professional{
        width: 100%;
    }
    
    .about-description-professional-item{
        margin: 15px 8px;
        border-left:  rgb(82, 81, 81) solid 2px;
        padding-left: 5px;
    }
    
    .about-description-professional-company{
        font-size: 1rem;
        margin: 1px;
    }
    
    .about-description-professional-office{
        font-size: .8rem;
        margin: 1px;
    }

    @media (max-width: 600px) { 

        grid-template-columns: 1fr;
        grid-template-areas:
        'item3'
        'item1'
        'item2';
    }
`;