import styled from "styled-components";

export default function FormGroup({ children }: { children: React.ReactNode }) {
  return <FormGroupContainer>{children}</FormGroupContainer>;
}

const FormGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
  gap: 8px;
`;
