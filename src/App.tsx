import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";
import Form from "./components/Form";
import { useState } from "react";
import SubmittedForm from "./components/SubmittedForm";
import { ContainerCards, Main, FormContainer } from "./styles/App";

export default function App() {
   const [inputs, setInputs] = useState({
      name: "",
      cardNumber: "",
      date: {
         month: "",
         year: "",
      },
      cvc: "",
   });
   const [submitted, setSubmitted] = useState(false);

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <Main>
            <ContainerCards>
               <FrontCard value={inputs} />
               <BackCard value={inputs} />
            </ContainerCards>
            <FormContainer>
               {submitted ? (
                  <SubmittedForm />
               ) : (
                  <Form onChange={setInputs} onComplete={setSubmitted} />
               )}
            </FormContainer>
         </Main>
      </ThemeProvider>
   );
}
