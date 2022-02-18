import styled from "styled-components";
import Header from "./Header";
import NavBar from "./NavBar";

const Content = styled.div`
  /* background-color: pink; */
`;

function Layout({ setDark, children }) {
  return (
    <>
      <Header setDark={setDark} />
      <Content>{children}</Content>
      <NavBar />
    </>
  );
}

export default Layout;
