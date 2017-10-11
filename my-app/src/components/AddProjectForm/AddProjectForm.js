import React, { Component } from 'react';
import './add-project-form.css';
import fire from '../../fire';
// import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';

class AddProjectForm extends Component {
  state = {
    username: '',
    projectImage: '',
    isUploading: false,
    progress: 0,
    projectImageURL: '',
  };

  createProject(e) {
    e.preventDefault();

    const project = {
      title: this.title.value,
      url: this.url.value,
      technologies: this.technologies.value,
      date: this.date.value,
      image: this.state.projectImageURL,
    };

    this.props.addProject(project);
    fire
      .database()
      .ref('projects')
      .push(project);
    this.projectForm.reset();
  }

  // Image Uploader
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = filename => {
    this.setState({
      projectImage: filename,
      progress: 100,
      isUploading: false,
    });

    fire
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ projectImageURL: url }));
  };

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
        <FileUploader
          accept="image/*"
          name="projectImage"
          storageRef={fire.storage().ref('images')}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
        />
        <button type="submit"> + Add Project</button>
      </form>
    );
  }
}

export default AddProjectForm;
