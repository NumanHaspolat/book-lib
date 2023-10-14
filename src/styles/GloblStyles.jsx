//create global styles
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: monospace;
    }::placeholder {
  color: #2d383b;
  opacity: 1; /*
}

::-ms-input-placeholder { /* Edge 12 -18 */
  color: #2d383b
}
    body{
        font-size:1.5rem;
        background: ${({ theme }) => theme.colors.mainColor}
    }
`;
