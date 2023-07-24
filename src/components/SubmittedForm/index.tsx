import { CompletedForm } from "./style";
import Button from "../Button";
import complete from "../../assets/img/icon-complete.svg";

export default function SubmittedForm() {
   return (
      <CompletedForm>
         <img src={complete} alt="Completed" />
         <h2>Thank you!</h2>
         <p>We've added your card details</p>
         <Button>Continue</Button>
      </CompletedForm>
   );
}
