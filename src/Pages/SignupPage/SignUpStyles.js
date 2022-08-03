import styled from "styled-components";

export const SignUpStyled = styled.div`
    box-sizing: border-box;
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'DM Sans', sans-serif;
    


    h1 {
        font-size: 45px; 
        margin-bottom: -10px;
        align-items: center;
        color: #FF4500;
    }
   h3 {
    font-weight: lighter; 
    align-items: center;
    font-size: 22px; 
   }
   p {
        box-sizing: border-box;
        font-size: 12px;
        width: 30%; 
        color: #B8B8B8;
        margin-bottom: -19px; 
        margin-left: 15px; 
        padding-left: 10px; 
        position: relative; 
        background-color: white; 
        padding-top: 13px; 
    };

    input {
        box-sizing: border-box;
        width: 300px; 
        height: 50px;
        border-radius: 5px;
        border: 1px solid #B8B8B8; 
        margin-top: 10px; 
        padding-left: 10px; 
        ::placeholder {
            font-size: 13px; 
            color:#B8B8B8;
            }
            :focus { 
    outline: none !important;
    border-color: #E8222E;
    }
    }

    button {
        margin-top: 20px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
        cursor: pointer;
        width: 300px;  
        height: 40px;
        border: 1px solid #E8222E; 
        border-radius: 5px; 
        background-color: #E8222E; 
        color: white; 
        font-family: 'DM Sans', sans-serif;
        font-size: 15px; 
        &:active {
            background-color: red; 
        }
      }
      
`

export const SignUpContainer = styled.div`
   display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10%; 

    img {
     width: 6.5rem;
    height: 3.625rem;
    object-fit: contain;
    }

    h3 {
        font-size: 1rem; 
        padding-top: 10px; 
        font-weight:500;
    }

`