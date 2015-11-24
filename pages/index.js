import React, { Component } from "react";
import { Grid, Row, Col, Jumbotron, Button } from "react-bootstrap";
import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";
import "bootstrap/less/bootstrap.less";
import "./index.less";

export default class extends Component {

  goToGitHub() {
    if (canUseDOM) {
      window.location = "https://github.com/jkilada/react-reflux-bootstrap-static";
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col mdOffset={2} md={8}>
            <Jumbotron>
              <h1>Welcome!</h1>
              <p>Use this to kickstart a new front end using React for rendering, React-Bootstrap for an initial set of useful components,
                Bootstrap for styling, and Reflux for structure and data flow.</p>
              <p><Button bsStyle="primary" onClick={this.goToGitHub}>Learn more</Button></p>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    );
  }
}
