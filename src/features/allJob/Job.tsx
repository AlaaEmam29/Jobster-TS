import React from "react";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
const StyledJob = styled.div`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: auto 1fr;
  box-shadow: var(--shadow-2);
  gap: 1rem;
  padding: 2rem;
  padding-bottom: 0;
  &:hover {
    box-shadow: var(--shadow-3);
  }
`;
const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary-500);
  color: var(--white);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  grid-column: 1 / 2;
  align-self: center;
`;
const StyledTitle = styled(Heading)`
  margin: 0;
  line-height: 1.6;
`;

const StyledCompany = styled.p`
  text-transform: capitalize;
  color: var(--grey-400);
  letter-spacing: var(--letterSpacing);
  margin: 0;
  margin-bottom: 1rem;
`;
const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 2.4rem;
  grid-column: 1 / -1;
  border-bottom: 1px solid var(--grey-100);
`;
const StyledInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2.4rem;
  grid-row-gap: 1.6rem;
  margin-top: 1.6rem;
`;
const StyledFooter = styled.footer`
  grid-row: 3 / 4;
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;
type Props = {
  children: React.ReactNode | React.ReactNode[];
};
function Icon({ children }: Props) {
  return <StyledIcon>{children}</StyledIcon>;
}
function Title({ children }: Props) {
  return <StyledTitle as="h5">{children}</StyledTitle>;
}
function Header({ children }: Props) {
  return <StyledHeader>{children}</StyledHeader>;
}

function Company({ children }: Props) {
  return <StyledCompany>{children}</StyledCompany>;
}
function Location({ children }: Props) {
  return <div>{children}</div>;
}
function Info({ children }: Props) {
  return <StyledInfo>{children}</StyledInfo>;
}
function Footer({ children }: Props) {
  return <StyledFooter>{children}</StyledFooter>;
}
function EditBtn(props: any) {
  return (
    <Button color="success" {...props}>
      Edit
    </Button>
  );
}
function DeleteBtn(props: any) {
  return (
    <Button color="danger" {...props}>
      Delete
    </Button>
  );
}

Job.Icon = Icon;
Job.Title = Title;
Job.Company = Company;
Job.Location = Location;
Job.Header = Header;
Job.Info = Info;
Job.EditBtn = EditBtn;
Job.DeleteBtn = DeleteBtn;
Job.Footer = Footer;
export default function Job({ children }: Props) {
  return <StyledJob>{children}</StyledJob>;
}
