import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    :root {
        --text-clr: #636363; 
    }
    html {
        max-width: 1440px;
        width: 100%;
    }
`;

export default globalStyles;
