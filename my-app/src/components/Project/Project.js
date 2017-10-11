import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import fire from '../../fire';

import './project.css';

class Project extends Component {
  //TODO: update a tag to link component after routing set up
  //TODO: update image URL path
  //TODO: should alt tag have more info for SEO?

  render() {
    const { project } = this.props;

    return (
      <li className="project-block">
        <a className="project" to={project.url}>
          <h3 className="project__title">{project.title}</h3>
          <p className="project__type">Website</p>
          <p className="project__technologies">{project.technologies}</p>
          <p className="project__date">{project.date}</p>
          <img
            src={project.image}
            alt={project.title}
            className="project__image"
          />
        </a>
      </li>
    );
  }
}

export default Project;
