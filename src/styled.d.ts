// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
   export interface DefaultTheme {
      colors: {
         white: string;
         light: string;
         dark: string;
         veryDark: string;
         inputError: string;
         inputGrad: string;
      };
   }
}
