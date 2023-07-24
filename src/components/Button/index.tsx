import { Btn } from "./style";

interface ButtonProps {
   children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
   return <Btn>{children}</Btn>;
}
