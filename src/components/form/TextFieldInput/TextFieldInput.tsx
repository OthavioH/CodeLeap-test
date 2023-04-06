import styled from "styled-components";

interface TextFieldInputProps {
  text: string;
  placeholder: string;

  [key: string]: any;
}

export default function TextFieldInput({
  text,
  placeholder,
  ...props
}: TextFieldInputProps) {
  return <Input value={text} placeholder={placeholder} {...props} />;
}

const Input = styled.textarea`
  width: 100%;
  height: fit-content;
  min-height: 74px;
  padding: 6px 10px;
  resize: none;

  font-size: 14px;

  border: 1px solid #777777;
  border-radius: 8px;
`;
