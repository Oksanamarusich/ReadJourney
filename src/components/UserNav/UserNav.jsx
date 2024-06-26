import { StyledList, StyledNav, StyledNavLink } from "./UserNav.styled";


export const UserNav = ({isOpen}) => {
  return (
    <StyledNav>
    <StyledList>
      <li>
        <StyledNavLink to="/recommended">Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/library">My library</StyledNavLink>
      </li>
      </StyledList>
      </StyledNav>
  );
};
