import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  name: "light",
  bgColor: "#FFFFFF",
  fontColor: "rgb(38, 38, 38)",
  borderColor: "#ececec",
  accent: "#FF6B00"
};

export const darkTheme = {
  name: "dark",
  fontColor: "white",
  bgColor: "#2c2c2c",
  accent: "#FF6B00",
  borderColor: "#7b7b7b"
};

export const devices = {
  iPhone12: {
    name: "Apple iPhone 12",
    width: "360px",
    height: "911px"
  }
};

export const GlobalStyles = createGlobalStyle`
	${reset}
	input {
		all:unset;
	}
	* {
		box-sizing:border-box;
	}
	html {
		width: 100%;
		height: 100%;
		background-color: #eeeeee;
	}
	body {
		width: 100%;
		height: 100%;
		min-height: ${(props) =>
      parseInt(props.theme.height.replace("px", "")) + 100}px;
		font-size:14px;
		min-height: ${(props) =>
      parseInt(props.theme.height.replace("px", "")) + 100}px;
		font-family:'Open Sans', sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	main {
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
		border-radius: 3px;
		box-sizing: border-box;
		background-color: ${(props) => props.theme.bgColor};
		color: ${(props) => props.theme.fontColor};
		transition: color 0.3s, background-color 0.3s, transform 0.3s;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	
`;
