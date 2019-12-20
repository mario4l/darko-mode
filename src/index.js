import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const darkTheme = {
  colorSwitch: "#282c35",
  headerColor: "#ffffff",
  headerTwoColor: "#ffa7c4",
  paragraphColor: "#ffffff"
};

const lightTheme = {
  colorSwitch: "#ffffff",
  headerTwoColor: "#d23669"
};

const StyledPage = styled.div``;
const StyledContent = styled.div`
  clear: both;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colorSwitch} !important;
  }
  h1 {
    color: ${props => props.theme.headerColor}
  }
  h2 {
    color: ${props => props.theme.headerTwoColor}
  }
  p {
    color: ${props => props.theme.paragraphColor}
  }
`;

class App extends React.Component {
  state = {
    darkMode: false
  };
  toggleTheme = () => {
    this.state.darkMode
      ? this.setState({ darkMode: false })
      : this.setState({ darkMode: true });
  };
  render() {
    return (
      <ThemeProvider theme={this.state.darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <StyledPage className="ui container">
          <i
            style={{ marginTop: 20, float: "right" }}
            onClick={this.toggleTheme}
            className={
              this.state.darkMode ? "big toggle off icon" : "big toggle on icon"
            }
          />
          <StyledContent>
            <h1>All the toggle</h1>
            <h2 style={{ marginTop: 20 }}>sit amet purus gravida quis</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
              amet cursus sit amet dictum sit amet justo donec. Sed blandit
              libero volutpat sed cras. Pharetra pharetra massa massa ultricies
              mi quis hendrerit dolor. Proin sagittis nisl rhoncus mattis
              rhoncus urna neque viverra justo. Urna nec tincidunt praesent
              semper feugiat. Tincidunt lobortis feugiat vivamus at augue eget
              arcu dictum varius. Diam in arcu cursus euismod quis viverra nibh.
              Velit sed ullamcorper morbi tincidunt ornare massa eget. At tellus
              at urna condimentum mattis. Arcu dictum varius duis at
              consectetur. Placerat duis ultricies lacus sed turpis tincidunt id
              aliquet. Imperdiet nulla malesuada pellentesque elit eget gravida
              cum. Quis viverra nibh cras pulvinar mattis nunc.
            </p>
          </StyledContent>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
