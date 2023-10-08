import styled from "styled-components";

const Select = styled.select`
  background: var(--backgroundColor);
  border: 1px solid var(--grey-200);
  border-radius: var(--borderRadius);
  padding: 1.2rem 1.6rem;
  width: 100%;
  color: var(--textColor);
  transition: var(--transition);
  text-transform: capitalize;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--primary-500);
  }
  &:disabled {
    background: var(--grey-100);
    cursor: not-allowed;
  }
  font-size: 1.4rem;
`;

export default Select;
