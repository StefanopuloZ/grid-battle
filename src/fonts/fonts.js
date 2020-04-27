import { createGlobalStyle } from "styled-components";

import LoraRegularEot from "./Lora-Regular.eot";
import LoraRegularSvg from "./Lora-Regular.svg";
import LoraRegularWoff from "./Lora-Regular.woff";
import LoraRegularWoff2 from "./Lora-Regular.woff2";

import LoraBoldEot from "./Lora-Bold.eot";
import LoraBoldSvg from "./Lora-Bold.svg";
import LoraBoldWoff from "./Lora-Bold.woff";
import LoraBoldWoff2 from "./Lora-Bold.woff2";

export default createGlobalStyle`
  @font-face {
      font-family: "Lora-bold";
      src: url(${LoraBoldEot});
      src: url("${LoraBoldEot}?#iefix") format("embedded-opentype"),
          url(${LoraBoldWoff2}) format("woff2"),
          url(${LoraBoldWoff}) format("woff"),
          url("${LoraBoldSvg}#Lora-Bold") format("svg");
      font-weight: bold;
      font-style: normal;
  }
    
  @font-face {
      font-family: 'Lora';
      src: url(${LoraRegularEot});
      src: url('${LoraRegularEot}?#iefix') format('embedded-opentype'),
          url(${LoraRegularWoff2}) format('woff2'),
          url(${LoraRegularWoff}) format('woff'),
          url('${LoraRegularSvg}#Lora-Regular') format('svg');
      font-weight: normal;
      font-style: normal;
  }
`;
