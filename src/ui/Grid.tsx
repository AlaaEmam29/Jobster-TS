import styled, { css } from "styled-components";

interface GridProps {
  col?: number | string;
  row?: number | string;
  gap?: number;
}

const Grid = styled.div<GridProps>`
  display: grid;

  ${(props) =>
    props.col &&
    css`
      grid-template-columns: repeat(${props.col}, minmax(0, 1fr));
    `}

  ${(props) =>
    props.row &&
    css`
      grid-template-rows: repeat(${props.row}, minmax(0, 1fr));
    `}
    place-items: center;

  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap}rem;
    `}
    @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;

    }
`;

export default Grid;
