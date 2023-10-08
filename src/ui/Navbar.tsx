import styled from "styled-components";
import Button from "./Button";
import { FaAlignLeft, FaCaretDown, FaUserCircle } from "react-icons/fa";
import Heading from "./Heading";
import Popper from "./Popper";
import { useState } from "react";
import { selectUser } from "../features/user/userSlice";
import { useAppSelector } from "../hooks/hooks";
import { useSliderToggle } from "../context/SliderToggleContext";
import { getUser } from "../utils/localStorageUser";
import { useLogout } from "../features/user/useLagout";

const StyledNavbar = styled.nav`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .toggle {
    svg {
      width: 3.2rem;
      height: 3.2rem;
      color: var(--primary-500);
      cursor: pointer;
    }
  }
  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    color: var(--primary-500);
  }
`;

export default function Navbar() {
  const [showLogout, setShowLogout] = useState(false);
  const { toggle: toggleSidebar } = useSliderToggle();
  const { logout } = useLogout();
  const handleLogout = (): void => {
    logout();
  };
  const cachedUser = getUser();
  const { user } = useAppSelector(selectUser);
  const userName = cachedUser.name || user.name;

  return (
    <StyledNavbar>
      <div className="toggle" onClick={toggleSidebar}>
        <FaAlignLeft />
      </div>
      <Heading as="h3">Jobster</Heading>
      <Popper>
        <Popper.Model onClick={() => setShowLogout((prev) => !prev)}>
          <Popper.UserIcon>
            <FaUserCircle />
          </Popper.UserIcon>
          <Popper.UserName>{userName}</Popper.UserName>
          <Popper.UserIcon>
            <FaCaretDown />
          </Popper.UserIcon>
        </Popper.Model>
        <Popper.Box showLogout={showLogout} onClick={handleLogout}>
          <Button>Logout</Button>
        </Popper.Box>
      </Popper>
    </StyledNavbar>
  );
}
