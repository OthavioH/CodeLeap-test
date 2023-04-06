import styled from "styled-components";

interface FormTextInputProps {
  placeholder: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  [x: string]: any;
}

export default function FormTextInput({
  children,
  placeholder,
  id,
  onChange,
  ...props
}: FormTextInputProps) {
  return (
    <SignUpInput
      type="text"
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  );
}

const SignUpInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px #777777 solid;
  margin-bottom: 16px;

  &::placeholder {
    color: #cccccc;
  }
`;
