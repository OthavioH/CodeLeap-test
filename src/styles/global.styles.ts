import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #DDDDDD;
        font-family:'Roboto';
    }
`;
