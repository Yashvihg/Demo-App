import React from "react";
import { Nav } from "react-bootstrap";
import { Switch, Route } from "react-router";
import ContactUs from "../contact/contact.component";
import FormComponent from "../form/form.component";
import homePage from "../homePage/homePage.component";
import About from "../about/about.component";

const Sidebar = (props) => {
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/"
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/">HOME PAGE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/form">FORM</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">ABOUT US</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">CONTACT US</Nav.Link>
        </Nav.Item>
      </Nav>
        <Switch>
          <Route exact path="/form" component={FormComponent} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/" component={homePage} />
          <Route exact path="/about" component={About} />

        </Switch>

    </>
  );
};
export default Sidebar;
