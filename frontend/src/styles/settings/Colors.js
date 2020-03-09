import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
  :root {
    --color-primary-900: #4F1760;
    --color-primary-800: #6D2177;
    --color-primary-700: #6D2177;
    --color-primary-600: #81269D;

    --color-secondary-blue-600: #01BCC8;
    --color-secondary-green-600: #A3D33C;
    --color-secondary-orange-600: #FEAA00;

    --color-third-900: #4B4B4B;
    --color-third-800: #555555;
    --color-third-700: #828282;
    --color-third-600: #ABABAB;
    --color-third-500: #999999;
    --color-third-400: #E5E5E5;
    --color-third-300: #F7F7F7;
    
  }
`;

export default Colors;
