import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import skindex from "../images/skindex.png"
import ux from "../images/uxui.png"
import fit from "../images/fitUp.png"


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (


          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >

            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                  />
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}

                  </p>
                </div>
              </div>
            </span>
          </div>

        );
      });
    }

    return (
      <div id="portfolio">
        <h1 style={{ textAlign: "center" }}>
          Projects
        </h1>
        <section>
          <div className="flex-container">
            <div className="bxs container">
              <p style={{ fontSize: "25px" }}>
                |UX/UI|
            </p>
              <img className="image"
                src={ux} alt="Logo" style={{
                  display: " block",
                  width: "100%",
                  height: "300px"
                }}>
              </img>
              <div class="middle">
                <div class="text" style={{fontSize:"8px"}}>This design is meant for users that are interested in taking beach vacation but do not know where to go. With a study i have found that users mainly go to vacations based on family or friends recommendation. If a booking site adds a feature like this it will increase the time spent on site as well as the amount of items booked with the site.</div>
              </div>

              <a className="a" href={"https://www.figma.com/proto/xHETWAMtWNLrN3LdxcI6yI/Untitled?node-id=65%3A107&scaling=scale-down&page-id=6%3A4951"} >
                Prototype
              </a>
              <div>
              <a className="a" href={"https://www.figma.com/file/xHETWAMtWNLrN3LdxcI6yI/Untitled?node-id=6%3A4951"} >
                Figma
              </a>
              </div>

            </div>

            <div className="bxs container">
              <p style={{ fontSize: "25px" }}>
                SkinDex
            </p>
              <img
                className="image"
                src={skindex} alt="Logo" style={{
                  display: " block",
                  width: "100%",
                  height: "300px"
                }}>
              </img>
              <div class="middle">
                <div class="text" style={{fontSize:"10px"}}>Will allow users to take quiz that shows them a skincare routine base on their answers. This is my most extensive project, i used a lot of technologies and created the API.</div>
              </div>
              <a className="a" href={"https://skindex.herokuapp.com"} >
                Application
              </a>
              <div>
              <a className="a" href={"https://github.com/Mariafcc/skindex"} >
                Github
              </a>
              </div>
            </div>
            <div className="bx container">
              <p style={{ fontSize: "25px" }}>
                FitUp
            </p>
              <img
                className="image"
                src={fit} alt="Logo" style={{
                  display: " block",
                  width: "100%",
                  height: "300px"
                }}>
              </img>
              <div class="middle">
                <div class="text" style={{fontSize:"10px"}} >FitUp can be used to design your next workout.User is given a choice of indoor or outdoor workout and given options to add workouts and save them.</div>
              </div>
              <a className="a" href={"http:project-two-2020.herokuapp.com"} >
                Application
              </a>
              <div>
              <a className="a" href={"https://github.com/Mariafcc/FitUp-1"} >
                Github
              </a>
              </div>
            </div>
          </div>



        </section>
      </div>
    );
  }
}

export default Projects;
