import { BackCardContainer, Back } from "./style";

type BackCardProps = {
   value: {
      cvc?: string;
   };
};

export default function BackCard({ value }: BackCardProps) {
   return (
      <BackCardContainer>
         <Back>
            <p>{value?.cvc || "000"}</p>
         </Back>
      </BackCardContainer>
   );
}
