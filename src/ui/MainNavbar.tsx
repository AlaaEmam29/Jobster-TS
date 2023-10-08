import React from "react";
import { BsDatabaseFillAdd, BsFillBarChartLineFill } from "react-icons/bs";
import { AiFillProfile } from "react-icons/ai";
import { MdQueryStats } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
`;
const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  font-size: 1.8rem;
  text-transform: capitalize;
`;
const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    color: var(--grey-500);
    font-size: 1.8rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    background-color: transparent;
    transition: 0.2s ease-in-out all;
  }

  & svg {
    fill: var(--grey-500);
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background: var(--grey-50);
    color: var(--primary-500);
    padding-left: 3rem;
    & svg {
      fill: var(--primary-500);
    }
  }
`;
const navLinks = [
  { to: "dashboard", icon: <BsFillBarChartLineFill />, label: "Dashboard" },
  { to: "all-Jobs", icon: <MdQueryStats />, label: "All Jobs" },
  { to: "add-Job", icon: <BsDatabaseFillAdd />, label: "Add Job" },
  { to: "profile", icon: <AiFillProfile />, label: "Profile" },
];
type Props = {
  toggle?: () => void;
};
export default function MainNavbar({ toggle }: Props) {
  const handleToggleLinks = (
    evt: React.MouseEvent<HTMLUListElement, MouseEvent>,
  ) => {
    const link = (evt.target as Element).closest("li");
    if (!link) return;
    toggle?.();
  };


  return (
    <StyledNav>
      <StyledList onClick={handleToggleLinks}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <StyledLink to={link.to}>
              {link.icon}
              <span>{link.label}</span>
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </StyledNav>
  );
}
