import React, { Component } from "react";
import Typical from "react-typical";

class Header extends Component {

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      var title = this.props.sharedData.title.toUpperCase();
    }
    return (
      <header id="home" style={{ height: "400px", display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="grommet-icons:code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <Typical className="title-styles" steps={[title]} wrapper="p" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
