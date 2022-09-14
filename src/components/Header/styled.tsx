import styled from "styled-components";

export const HeaderStyle = styled.div`
    
    max-width: 1200px;
    margin: 0px auto;
    padding: 1rem;
    background-color: #464646;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    box-shadow: 1px 1px 5px black;
    

    .logo{
        font-size: 1rem;
        font-weight: bold;
        color: white;
    }

    #menu{
        display: flex;
        list-style: none;
        gap: .5rem;
    }
    

    .link{
        display: flex;
        padding: .5rem;
        cursor: pointer;
        color: white;
        border-radius: 10px;
        text-decoration: none;
    }
    
    .link:hover{
        background-color: rgba(0, 0, 0, .08);
    }
    
    #btn-mobile {
        display: none;
    }

    @media (max-width: 600px) { 

        #menu {
           display: block;
           position: absolute;
           width: 100%;
           top: 60px;
           right: 0px;
           background-color: rgb(100, 100, 100, 0.8);
           height: 0px;
           transition: .6s;
           z-index: 1000;
           visibility: hidden;
           overflow-y: hidden;
           
        }
    
        #nav.active #menu {
            height: calc(100vh - 60px);
            visibility: visible;
            
        }
    
    
        #menu .link {
            padding: 1rem;
            margin: 0 1rem;
            border-bottom: 2px solid rgba(0, 0, 0, .05);
            border-radius: 1px;
        }
    
        #btn-mobile{
            display: flex;
            padding: .5rem 1rem;
            font-size: 1rem;
            border: none;
            background: none;
            cursor: pointer;
            gap: .5rem;
            color: white;
        }
    
        #hamburger{
            width: 20px;
            border-top: 2px solid;
        }
    
        #hamburger::after, #hamburger::before{
            display: block;
            content: "";
            width: 20px;
            height: 2px;
            background: currentColor;
            margin-top: 5px;
            transition: .3s;
            position: relative;
        }
    
        #nav.active #hamburger {
            border-top-color: transparent;
        }
    
        #nav.active #hamburger::before{
            transform: rotate(135deg);
        }
    
        #nav.active #hamburger::after{
            transform: rotate(-135deg);
            top: -7px;
        }
    }
`;