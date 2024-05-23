import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        font-size: 20px;
    }
`;

export default GlobalStyle;
