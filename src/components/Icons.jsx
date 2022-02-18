import { Link } from "react-router-dom";
import styled from "styled-components";
import withRouter from "../withRouter";

const IconBox = styled(Link)`
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px 10px;
  overflow: hidden;
`;

const IconImg = styled.img`
  width: 21px;
  height: 21px;
  display: block;
  margin: 5px;
  color: ${(props) => props.theme.accent};
`;

const IconText = styled.span`
  font-size: 8px;
  display: block;
`;

// TODO : 코드 개선 필요 111
export const NavIcon = withRouter(({ role, router: { location } }) => {
  const path = location.pathname.replace("/", "");

  return role === "home" ? (
    <IconBox to={`/`}>
      <IconImg
        src={`/assets/nav/${path === "" ? `focus_${role}` : role}.svg`}
        alt={role}
      />
      <IconText>{role.toUpperCase()}</IconText>
    </IconBox>
  ) : (
    <IconBox to={`/${role}`}>
      <IconImg
        src={`/assets/nav/${path === role ? `focus_${role}` : role}.svg`}
        alt={role}
      />
      <IconText>{role.toUpperCase()}</IconText>
    </IconBox>
  );
});

// TODO : 코드 개선 필요 222
export const NavDarkIcon = withRouter(({ role, router: { location } }) => {
  const path = location.pathname.replace("/", "");

  return role === "home" ? (
    <IconBox to={`/`}>
      <IconImg
        src={`/assets/nav/${
          path === "" ? `focus_${role}` : `white_${role}`
        }.svg`}
        alt={role}
      />
      <IconText>{role.toUpperCase()}</IconText>
    </IconBox>
  ) : (
    <IconBox to={`/${role}`}>
      <IconImg
        src={`/assets/nav/${
          path === role ? `focus_${role}` : `white_${role}`
        }.svg`}
        alt={role}
      />
      <IconText>{role.toUpperCase()}</IconText>
    </IconBox>
  );
});
