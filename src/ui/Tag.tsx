import styled, { css } from "styled-components";
const status = {
  pending: css`
    background: rgb(252, 239, 199);
    color: rgb(233, 185, 73);
  `,
  interview: css`
    background: rgb(199, 240, 252);
    color: rgb(73, 173, 233);
  `,

  declined: css`
    background: rgb(252, 199, 199);
    color: rgb(233, 73, 73);
  `,
} as const;
const Tag = styled.span<{ status?:  "pending" | "interview" | "declined"

}>`
  ${(props) => props.status && status[props.status]}

  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
`;

export default Tag;
