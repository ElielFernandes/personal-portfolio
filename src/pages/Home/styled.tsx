import styled from "styled-components";

export const HomeStyle = styled.div`

    max-width: 1200px;
    margin: 0px auto;
    padding: 1rem;
    display: flex;
    height: calc(100% - 60px);

    .home{
        display: flex;
        height: 100%;
    }

    .home-info{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
    }

    .home-image{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .home-image-img{
        max-width: 70%;
        max-height: 70%;
        border-radius: 50% 50% 50% 50%;
        box-shadow: 0px 0px 5px rgb(61, 61, 61);
    }

    .home-info-hello{
        margin-bottom: .3rem;
        font-size: 1.8rem;
        color: rgb(0,0,0);
    }

    .home-info-name{
        color: rgb(0,0,0);
        font-size: 2.2rem;
        margin-bottom: 1rem;
    }

    .home-info-web{
        font-size: 1.3rem;
        color: rgb(0,0,0);
        margin-bottom: 0.7rem;
    }

    .home-info-link{

        display: flex;
        align-items: center;
        justify-content: flex-start;

        .home-info-link-github{

            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0.3rem;
            text-decoration: none;
            color: black;

            .home-info-icon-github{
                font-size: 2.2rem;
    
            }
        }
    
        .home-info-link-linkdin{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0.3rem;
            text-decoration: none;
            color: black;

            .home-info-icon-linkdin{
                font-size: 2.2rem;
            }
        }
    }

    @media (max-width: 600px) { 
        flex-direction: column;

        .home-info-link{
            justify-content: center;
        }

    }
`;