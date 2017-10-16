import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import fire from './fire';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.addProject = this.addProject.bind(this);

    this.state = {
      projects: [],
    };
  }

  componentWillMount() {
    /* Create reference to projects in Firebase Database */
    let projectsRef = fire
      .database()
      .ref('projects')
      .orderByKey()
      .limitToLast(100);

    projectsRef.on('child_added', snapshot => {
      /* Update React state when project is added at Firebase Database */
      /* Update React state from Firebase Database on page load*/
      let project = {
        title: snapshot.val().title,
        url: snapshot.val().url,
        technologies: snapshot.val().technologies,
        date: snapshot.val().date,
        image: snapshot.val().image,
        id: snapshot.key,
      };

      this.setState({ projects: [project].concat(this.state.projects) });
    });
  }

  addProject(project) {
    //update state
    const projects = { ...this.state.projects };
    // add in new project
    const timestamp = Date.now();
    projects[`project-${timestamp}`] = project;

    // Set state in React
    this.setState({ projects });
  }

  render() {
    return (
      <div className="App">
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
