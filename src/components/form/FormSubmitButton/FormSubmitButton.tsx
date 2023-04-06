import styled from "styled-components";
import { SubmitButton } from "./styles/formSubmitButton.styles";

export interface FormSubmitButtonProps {
  text: string;
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  [x: string]: any;
}

export default function FormSubmitButton({
  text,
  disabled,
  onClick,
  ...props
}: FormSubmitButtonProps) {
  return (
    <SubmitButton
      type="submit"
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <p>{text}</p>
    </SubmitButton>
  );
}
