import styled from "styled-components";

export const CompletedForm = styled.div`
   text-align: center;
   width: 100%;

   img {
      margin-bottom: 30px;
   }

   h2 {
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 400;
      margin-bottom: 15px;
   }

   p {
      color: ${(props) => props.theme.colors.dark};
      margin-bottom: 30px;
   }
`;
