import styled from 'styled-components'

export const SplashContainer = styled.div `
    background-color:#E8222E;
    width: 100vw;
    height: 101vh;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 1s;
    animation: fadeOut 2s;
    @keyframes fadeIn {
    0% { opacity: 0; }
    20% { opacity: 1; }
    40% { opacity: 2; }
    60% { opacity: 3; }
    70% { opacity: 2; }
    90% { opacity: 1; }
    100% { opacity: 0; }
}
@keyframes fadeOut {
0% {opacity: 2;}
/* 50% {opacity: 1;} */
100% {opacity: 0;}
}
`

export const Logo = styled.img `
    width: 126px;
    height: 65px;

    `