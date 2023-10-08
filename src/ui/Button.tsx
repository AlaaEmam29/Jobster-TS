import styled, { css } from "styled-components";
type ButtonProps = {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "tertiary" | "danger" | "success" | "clear";
  active?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.7rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
} as const;

const colors = {
  primary: css`
    background: var(--primary-500);
    &:hover {
      background: var(--primary-600);
    }
  `,
  secondary: css`
    background: var(--primary-200);
    color: var(--primary-500) !important;
    &:hover {
      background: var(--primary-300);
    }
  `,
  tertiary: css`
    background-color: var(--grey-500);
    color: var(--white);
    &:hover {
      background-color: var(--grey-800);
    }
  `,
  danger: css`
    background: var(--danger-500);
    color: var(--danger-100);
    &:hover {
      background: var(--danger-600);
    }
  `,
  success: css`
    background: var(--success-500);
    color: var(--success-light);
    &:hover {
      background: var(--success-600);
    }
  `,
  clear: css`
    background: transparent;
    color: var(--primary-500);
    &:hover {
      background: var(--primary-200);
    }
  `,
} as const;

const Button = styled.button<ButtonProps>`
  ${(props) => props.size && sizes[props.size]}
  ${(props) => props.color && colors[props.color]}


   
    border: transparent;
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  cursor: pointer;
  letter-spacing: var(--letterSpacing);
  text-transform: capitalize;
  transition: var(--transition);
  ${({ active }) =>
    active &&
    css`
      background: var(--primary-600);
      color: var(--white);
    `}

  &:focus {
    outline: none;
  }
  &:disabled {
    background: var(--primary-300);
    cursor: not-allowed;
  }
`;
Button.defaultProps = {
  size: "medium",
  color: "primary",
};
export default Button;
