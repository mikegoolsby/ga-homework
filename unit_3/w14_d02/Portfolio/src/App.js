import React from "react";
import Project from "./classcomp/projects";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Mike Goolsby's Portfolio</h1>

        <Project
          name="myproject"
          git="http://www.github.com"
          live="http://myapp.netlify.app"
          img="http://www.imgur.com/myProject.png"
        />
      </>
    );
  }
}

export default App;
