import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonLink = styled(Link)`
  font-size: inherit;
  font-weight: 500;
  color: var(--primary-600);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: var(--primary-500);
  }

  &:disabled {
    background: var(--grey-100);
    cursor: not-allowed;
  }
  &:active {
    color: var(--primary-500);
  }
`;
export default ButtonLink;
