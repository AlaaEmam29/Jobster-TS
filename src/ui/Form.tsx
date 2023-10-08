import styled, { css } from "styled-components";

const Form = styled.form<{ gap?: number; layout?: string }>`
  ${(props) =>
    props.layout === "flex" &&
    css`
      display: flex;
      flex-direction: column;
      gap: ${props.gap}rem;
    `}
  ${(props) =>
    props.layout === "grid" &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;

      gap: ${props.gap}rem;
      grid-column-gap: 5rem;
      @media screen and (max-width: 850px) {
        grid-template-columns: 1fr;
        gap: 1.6rem;
      }
    `}
`;
Form.defaultProps = {
  gap: 1.6,
  layout: "flex",
};

export default Form;
