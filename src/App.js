import { createContext, useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Layout from "./components/Layout";
import { routes } from "./routes";
import { darkTheme, GlobalStyles, lightTheme, devices } from "./styles";

const Container = styled.main`
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  position: relative;
`;

export const UserContext = createContext({
  setDark: () => {}
});

function App() {
  const darkMode = localStorage.getItem("isDarkMode");
  const [isDark, setDark] = useState(darkMode);
  const [device, setDevice] = useState(devices.iPhone12);
  const value = useMemo(() => ({ setDark, setDevice }), [setDark, setDevice]);

  return (
    <ThemeProvider
      theme={
        isDark ? { ...darkTheme, ...device } : { ...lightTheme, ...device }
      }
    >
      <Container>
        <GlobalStyles />
        <UserContext.Provider value={value}>
          <Router>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Layout>{route.element}</Layout>}
                />
              ))}
            </Routes>
          </Router>
        </UserContext.Provider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
