import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";
import { NavDarkIcon, NavIcon } from "./Icons";

const NavBox = styled.nav`
  width: 93.33%;
  height: 10%;
  margin-right: 3.33%;
  margin-left: 3.33%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  /* border-top: 2.12px solid ${(props) => props.theme.borderColor}; */
  transition: border-color 0.4s;
  box-sizing: border-box;
`;

function NavBar() {
  const isDark = JSON.parse(localStorage.getItem("isDarkMode"));
  return isDark ? (
    <NavBox>
      {routes.map((route) => (
        <NavDarkIcon key={route.path} role={route.role} />
      ))}
    </NavBox>
  ) : (
    <NavBox>
      {routes.map((route) => (
        <NavIcon key={route.path} role={route.role} />
      ))}
    </NavBox>
  );
}

export default NavBar;
