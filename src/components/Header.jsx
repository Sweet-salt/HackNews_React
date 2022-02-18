import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../App";

const HeaderBox = styled.div`
  margin-left: 3.33%;
  margin-right: 3.33%;
  padding-top: 11px;
  padding-bottom: 6px;
  width: 93.33%;
  height: 52px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 2.12px solid ${(props) => props.theme.borderColor};
  transition: border-color 0.4s;
`;

const LogoBox = styled.div`
  flex-grow: 1;
`;

const Logo = styled.img``;

const ToolBox = styled.div`
  margin-right: -3px;
`;

const Tool = styled.img`
  width: 30px;
  height: 30px;
`;

function Header() {
  const isDark = JSON.parse(localStorage.getItem("isDarkMode"));
  const { setDark } = useContext(UserContext);

  const handleTheme = () => {
    setDark((prev) => !prev);
    localStorage.setItem("isDarkMode", !isDark);
  };

  return (
    <HeaderBox>
      <LogoBox>
        <Link to="/">
          <Logo alt="logo" src={`/assets/logo.svg`} />
        </Link>
      </LogoBox>
      <ToolBox>
        <Tool alt="search" src={`/assets/${isDark ? "dark_" : ""}search.svg`} />
        <Tool
          alt="darkmode"
          onClick={handleTheme}
          src={`/assets/${isDark ? "dark_" : ""}mode.svg`}
        />
      </ToolBox>
    </HeaderBox>
  );
}

export default Header;
