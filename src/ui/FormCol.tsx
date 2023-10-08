import React from "react";
import styled from "styled-components";
import ErrorFrom from "./ErrorForm";
import Label from "./Label";

const StyledFormCol = styled.div`
  width: 100%;
  display: flex;
  gap: 0.6rem;
  padding: 0.2rem 0px;
  flex-direction: column;
`;
type Props = {
  label?: string;
  error?: string;
  children: React.ReactNode | any;
};

export default function FormCol({ label, error, children }: Props) {
  return (
    <StyledFormCol>
      {label && <Label htmlFor={children?.props?.id}>{label}</Label>}
      {children}
      {error && <ErrorFrom>{error}</ErrorFrom>}
    </StyledFormCol>
  );
}
