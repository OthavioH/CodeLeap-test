import styled from "styled-components";

interface FormInputLabelProps {
  text: string;
}

export default function FormInputLabel({ text }: FormInputLabelProps) {
  return <InputLabel>{text}</InputLabel>;
}

const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;
