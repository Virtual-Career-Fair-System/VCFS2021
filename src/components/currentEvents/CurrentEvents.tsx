import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../header/Header";
import {Container} from "react-bootstrap";
import Footer from "../footer/Footer";

const CurrentEvents = () => {
  return(
    <React.Fragment>
      <CssBaseline/>
      <Header title="Career Fair UCSC"/>
      <Container fluid={true}>
        Current Events
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!"/>
    </React.Fragment>
  );
}

export default CurrentEvents;