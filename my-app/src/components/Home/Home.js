import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AddProjectForm from '../AddProjectForm/AddProjectForm';
import Project from '../Project/Project';
import './home.css';

class Home extends Component {
  render() {
    const { projects } = this.props;
    // Object.keys(projects).map(key => (
    //               <Project key={key} index={key} project={projects[key]} />
    //           ))

    return (
      <div className="home">
        <h1>Home</h1>

        <AddProjectForm addProject={this.addProject} />
        <ul className="projects">{}</ul>
      </div>
    );
  }
}

export default Home;