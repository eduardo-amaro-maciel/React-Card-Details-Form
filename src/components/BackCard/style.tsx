import styled from "styled-components";
import img from "../../assets/img/bg-card-back.png";

export const BackCardContainer = styled.div`
   width: 447px;
   height: 245px;
   transform: translateX(20%);

   @media (max-width: 1150px) {
      position: absolute;
      top: 0px;
      z-index: -1;
   }
`;

export const Back = styled.div`
   background-image: url(${img});
   background-repeat: no-repeat;
   background-size: contain;
   width: 100%;
   height: 100%;
   position: relative;
   color: white;

   p {
      position: absolute;
      top: 45%;
      right: 15%;
      letter-spacing: 2px;
   }
`;
