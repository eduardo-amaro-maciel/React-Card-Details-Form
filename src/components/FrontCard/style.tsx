import styled from "styled-components";

export const FrontCardContainer = styled.div`
   margin-bottom: 40px;

   @media (max-width: 1150px) {
      position: absolute;
      bottom: 0;
      margin-bottom: 0;
   }
`;

export const Name = styled.p`
   text-transform: uppercase;
   letter-spacing: 2px;
`;

export const ContainerImg = styled.div`
   position: relative;
   width: 447px;
   height: 245px;
`;

export const CardImg = styled.img`
   position: absolute;
`;

export const CardInfo = styled.div`
   position: absolute;
   height: 100%;
   z-index: 2;
   padding: 30px;
   width: 100%;
   display: grid;
`;

export const Info = styled.div`
   color: white;
   display: flex;
   flex-direction: column;
   font-size: 14px;
   justify-content: space-between;

   div {
      display: flex;
      width: 100%;
      justify-content: space-between;
   }
`;

export const Number = styled.p`
   font-size: 28px;
   letter-spacing: 4px;
   height: 100%;
   display: flex;
   align-items: center;
   margin-bottom: 5px;
`;
