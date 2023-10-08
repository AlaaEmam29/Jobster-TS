import styled, { css } from "styled-components";
const StyledStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  @media screen and (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
type Props = {
  children: React.ReactNode | React.ReactNode[];
  $status?: "pending" | "interview" | "declined";

};
const status = {
  pending: css`
    background: rgb(252, 239, 199);
    span {
      color: rgb(233, 185, 73);
    }
    .icon {
      background: rgb(233, 185, 73);
      svg {
        fill: rgb(252, 239, 199);
      }
    }
    border-bottom: 7px solid rgb(163, 130, 51);
  `,
  interview: css`
    background: rgb(199, 240, 252);
    span {
      color: rgb(73, 173, 233);
    }
    .icon {
      background-color: rgb(73, 173, 233);
      svg {
        fill: rgb(199, 240, 252);
      }
    }
    border-bottom: 7px solid rgb(0, 100, 200);
  `,

  declined: css`
    background: rgb(252, 199, 199);
    span {
      color: rgb(233, 73, 73);
    }
    .icon {
      background: rgb(233, 73, 73);
      svg {
        fill: rgb(252, 199, 199);
      }
    }

    border-bottom: 7px solid rgb(200, 0, 0);
  `,
} as const;

const StyledStat = styled.article<{ 
  $status?: "pending" | "interview" | "declined";

}>`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 3rem 3.6rem;
  border-radius: 0.8rem;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  box-shadow: var(--shadow);
  ${(props) => props.$status && status[props.$status]}
  span {
    font-size: 5rem;
    font-weight: bold;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    line-height: 1;
  }
  svg {
    font-size: 5rem;
  }
  .icon {
    width: 8rem;
    height: 7rem;
    align-self: center;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: flex-end;
  }
  h3 {
    grid-column: 1 / -1;
    align-self: flex-end;
  }
`;
function Stat({ children, $status }: Props) {
  return <StyledStat $status={$status}>{children}</StyledStat>;
}

function Icon({ children }: Props) {
  return <div className="icon">{children}</div>;
}
Stats.Stat = Stat;
Stats.Icon = Icon;
export default function Stats({ children }: Props) {
  return <StyledStats>{children}</StyledStats>;
}
