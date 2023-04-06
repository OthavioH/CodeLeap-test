import styled from "styled-components";

interface FormTitleProps {
  title: string;
}

export default function FormTitle({ title }: FormTitleProps) {
  return <Title>{title}</Title>;
}

const Title = styled.p`
  font-weight: bold;
  font-size: 22px;
  color: #000;
  margin-bottom: 24px;
`;
