import styled from "styled-components";
import Heading from "./Heading";
import Logo from "./Logo";
const StyledFormSign = styled.form`
  width: 40rem;
  border-top: 5px solid var(--primary-500);
  border-radius: 0.8rem;
  padding: 3.2rem 3rem;
  background-color: var(--white);
  box-shadow: var(--shadow-2);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin: 0 auto;
  transition: var(--transition);
  button {
    margin-top: 0.6rem;
  }
  img {
    width: 15rem;
    display: block;
    object-fit: cover;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  h2,
  p {
    text-align: center;
  }
  &:hover {
    box-shadow: var(--shadow-3);
  }
`;
type Props = {
  children: React.ReactNode | React.ReactNode[];
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
};
function FormSign({ children, onSubmit }: Props) {
  return <StyledFormSign onSubmit={onSubmit}>{children}</StyledFormSign>;
}
function FormSignLogo() {
  return <Logo />;
}
function FormSignTitle({ children }: Props) {
  return <Heading as="h2">{children}</Heading>;
}
function FormSignInputs({ children }: Props) {
  return <>{children}</>;
}
function FormSignButtons({ children }: Props) {
  return children;
}
function FormSignMember({ children }: Props) {
  return <p>{children}</p>;
}
FormSign.Logo = FormSignLogo;
FormSign.Title = FormSignTitle;
FormSign.Inputs = FormSignInputs;
FormSign.Buttons = FormSignButtons;
FormSign.Member = FormSignMember;
export default FormSign;
