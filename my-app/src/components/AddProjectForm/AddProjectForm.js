import React, { Component } from 'react';
import './add-project-form.css';
import fire from '../../fire';

class AddProjectForm extends Component {
  createProject(e) {
    e.preventDefault();

    const project = {
      title: this.title.value,
      url: this.url.value,
      technologies: this.technologies.value,
      date: this.date.value,
      image: this.image.value,
    };

    this.props.addProject(project);
    fire
      .database()
      .ref('projects')
      .push(project);
    this.projectForm.reset();
  }

  //TODO: addProject Form only shows up if I'm logged in

  render() {
    return (
      <form
        ref={input => (this.projectForm = input)}
        className="project"
        onSubmit={e => this.createProject(e)}
      >
        <input
          type="text"
          name="projectTitle"
          placeholder="Project Title"
          ref={input => (this.title = input)}
        />
        <input
          type="text"
          name="projectUrl"
          placeholder="Project Url"
          ref={input => (this.url = input)}
        />
        <input
          type="text"
          name="projectTechnologies"
          placeholder="Project Technologies"
          ref={input => (this.technologies = input)}
        />
        <input
          type="text"
          name="projectDate"
          placeholder="Project Date"
          ref={input => (this.date = input)}
        />
        <input
          type="file"
          name="projectImage"
          accept="image/*"
          placeholder="Project Image"
          ref={input => (this.image = input)}
        />
        <button type="submit"> + Add Project</button>
      </form>
    );
  }
}

export default AddProjectForm;
