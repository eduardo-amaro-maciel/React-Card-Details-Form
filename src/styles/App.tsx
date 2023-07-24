import styled from "styled-components";

export const Main = styled.main`
   display: flex;
   width: 1100px;
   justify-content: space-between;
   align-items: center;
   margin: 20px;

   @media (max-width: 1150px) {
      flex-direction: column;
      max-width: 400px;
      margin: 20px;
   }

   @media (max-width: 450px) {
      max-width: 340px;
   }
`;

export const FormContainer = styled.section`
   width: 400px;
   @media (max-width: 700px) {
      max-width: 100%;
   }
`;

export const ContainerCards = styled.section`
   @media (max-width: 1150px) {
      position: relative;
      width: 540px;
      height: 383px;
      margin-bottom: 60px;
   }

   @media (max-width: 700px) {
      scale: 0.75;
      margin-bottom: -20px;
      margin-top: -40px;
   }

   @media (max-width: 450px) {
      scale: 0.63;
      margin-top: -70px;
      margin-bottom: -30px;
   }
`;
