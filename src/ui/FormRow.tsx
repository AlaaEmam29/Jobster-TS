import React from "react";
import styled, { css } from "styled-components";
import ErrorFrom from "./ErrorForm";
import Label from "./Label";

const StyledFormRow = styled.div<{ extra?: boolean }>`
  display: grid;
  grid-template-columns: 15rem 1.5fr 1fr;
  gap: 4rem;
  padding: 0.2rem 0px;

  ${(props) =>
    props.extra &&
    css`
      display: grid;
      grid-template-columns: 10rem 1fr;
      grid-template-rows: 1fr 1fr;
      span {
        grid-column: 1 / -1;
        grid-row: 2 / -1;
      }
      gap: 1rem;
    `}
  ${({ className }) =>
    className === "formJobLocation" &&
    css`
      position: relative;
      input {
        padding: 1.5rem 1.6rem;
      }
      button {
        position: absolute;
        left: 51%;
        top: 50%;
        transform: translateY(-50%);
        padding: 1.2rem 1.4rem;
      }

      @media screen and (max-width: 1124px) {
        button {
          left: 52%;
        }
      }
      @media screen and (max-width: 995px) {
        button {
          left: 48%;
        }
      }
      @media screen and (max-width: 850px) {
        button {
          left: 52%;
        }
      }
      @media screen and (max-width: 550px) {
        grid-template-columns: 10rem 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1rem;

        span {
          grid-column: 1 / -1;
        }
        input {
          grid-column: 2 / -1;
        }
        button {
          left: 68%;
          top: 20%;
          padding: 0.6rem 1rem !important;
        }
      }
    `}
    @media screen  and (max-width: 1124px) {
    grid-template-columns: 15rem 2.5fr 1fr;
  }
  @media screen and (max-width: 995px) {
    grid-template-columns: 11rem 3fr 1fr;
  }
  @media screen and (max-width: 850px) {
    grid-template-columns: 10rem 3fr 1fr;
  }
`;
type Props = {
  label?: string;
  error?: string;
  children: React.ReactNode | any;
  extra?: boolean;
  className?: string;
};

export default function FormRow({
  label,
  error,
  className,
  children,
  extra,
}: Props) {
  return (
    <StyledFormRow extra={extra} className={className}>
      {label && <Label htmlFor={children?.props?.id}>{label}</Label>}
      {children}
      {error && <ErrorFrom>{error}</ErrorFrom>}
    </StyledFormRow>
  );
}
