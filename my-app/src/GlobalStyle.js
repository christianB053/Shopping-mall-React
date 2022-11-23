import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

:root {
    --main-color: #6327FE;
    --txt-color: #333333;
    --border-color: #C4C4C4;
    --sub-border-color: #E0E0E0;
    --bg-color: #F2F2F2;
    --emphasis-txt-color: #EB5757;
    --sub-txt-color: #828282;
    --button-border: #BDBDBD;
}
  
div, span, article, section, header, main, footer, p, ul, li, label, a, nav, h1, h2, h3, form, input, button, img, textarea, table, thead, tbody, tr, th, td {
    box-sizing: border-box;
}
  
body, html {
    width: 100%;
    height: 100%;
}
  
body, button {
    font-family: "Spoqa Han Sans Neo", "sans-serif";
}

body {
    font-weight: 400;
    color: var(--txt-color);
}

img {
    width: 100%;
    height: auto;
    vertical-align: top;
}

a {
    display: block;
    text-decoration: none;
    color: #000;
}

table, thead, tbody, tr {
    display: block;
}

.ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

button {
    border: none;
    cursor: pointer;
    padding: 0;
}
`;
