import styled from "styled-components";

export const LoginStyled = styled.div`
    margin-top: 50px; 
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
    input {
        box-sizing: border-box;
        width: 300px; 
        height: 50px;
        font-family: 'DM Sans', sans-serif;
        border-radius: 5px;
        border: 1px solid #B8B8B8; 
    }
    p {
        box-sizing: border-box;
        font-size: 14px;
        font-family: 'DM Sans', sans-serif;
        margin-bottom: 2px;
        color: #B8B8B8;
    };
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
