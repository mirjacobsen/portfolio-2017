import React, { Component } from 'react';
import { Link } from 'react-router';

import './project-block.css';

class ProjectBlock extends Component {
  render() {
    return (
      <Link className="project-block" to="#">
        <h3 className="project-block__title">Title</h3>
        <p className="project-block__type">Website</p>
        <p className="project-block__technologies">React, ES6, Stylus</p>
        <p className="project-block__date">Completed October 2017</p>
        <img src="#" alt="" className="project-block__image" />
      </Link>
    );
  }
}

export default ProjectBlock;
