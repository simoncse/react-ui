import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        background-color: #222;
        color:#eee;
        overflow-x:hidden;
        min-height:100vh;
    }
    

`