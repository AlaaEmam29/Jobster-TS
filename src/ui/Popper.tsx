import React from "react";
import styled, { css } from "styled-components";
const StyledModel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: var(--primary-500);
  padding: 0.6rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--white);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: var(--shadow-2);
  letter-spacing: 0.25rem;
  svg {
    width: 2rem;
    height: 2rem;
    fill: var(--white);
  }
  &:hover {
    background-color: var(--primary-600);
  }
`;
const StyledPopper = styled.div`
  position: relative;
  button {
    all: unset;
    &:hover {
      background-color: transparent;
    }
  }
`;
const StyledBox = styled.div<{ showlogout: boolean | undefined }>`
  position: absolute;
  width: 100%;
  padding: 0.6rem 0.8rem;
  border-radius: 0.5rem;
  text-align: center;
  left: 0;
  background: var(--primary-100);
  box-shadow: var(--shadow-2);
  top: 5rem;
  color: var(--primary-500);
  display: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--primary-200);
  }
  ${(props) =>
    props.showlogout &&
    css`
      display: block;
    `}
`;
type Props = {
  children: React.ReactNode;
  showLogout?: boolean | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

function UserName({ children }: Props) {
  return <span>{children}</span>;
}
function UserIcon({ children }: Props) {
  return children;
}
function Box({ children, showLogout, onClick }: Props) {
  return (
    <StyledBox showlogout={showLogout} onClick={onClick}>
      {children}
    </StyledBox>
  );
}
function Model({ children, onClick }: Props) {
  return <StyledModel onClick={onClick}>{children}</StyledModel>;
}
Popper.UserName = UserName;
Popper.UserIcon = UserIcon;
Popper.Box = Box;
Popper.Model = Model;
export default function Popper({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return <StyledPopper>{children}</StyledPopper>;
}
