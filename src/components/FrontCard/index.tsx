import img from "../../assets/img/bg-card-front.png";
import cardLogo from "../../assets/img/card-logo.svg";
import { CardImg, CardInfo, ContainerImg, FrontCardContainer, Info, Name } from "./style";

type FrontCardProps = {
   value?: {
      cardNumber?: string;
      name?: string;
      date?: {
         month?: string;
         year?: string;
      };
   };
};

export default function FrontCard({ value }: FrontCardProps) {
   return (
      <FrontCardContainer>
         <ContainerImg>
            <CardImg src={img} alt="Credit Card Front" />
            <CardInfo>
               <img src={cardLogo} alt="Credit Card Logo" />
               <Info>
                  <Number>{value?.cardNumber || "0000 0000 0000 0000"}</Number>
                  <div>
                     <Name>{value?.name || "Jane Appleseed"}</Name>
                     <p>
                        {value?.date && (value.date.month || value.date.year)
                           ? `${value.date.month}/${value.date.year}`
                           : "00/00"}
                     </p>
                  </div>
               </Info>
            </CardInfo>
         </ContainerImg>
      </FrontCardContainer>
   );
}
