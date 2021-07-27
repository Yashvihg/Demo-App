import React from "react";
import { Nav } from "react-bootstrap";
import { Switch, Route } from "react-router";
import FormComponent from "../form/form.component";
import homePage from "../homePage/homePage.component";
// import { withRouter } from "react-router";
// import '../pages/style/Dashboard.css'

const Sidebar = (props) => {
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/home">HOME PAGE</Nav.Link>
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
              <Route exact path="/contact" render={ } />
        <Route exact path="/" component={homePage} />
              <Route exact path="/about" component={ } />
      </Switch>
    </>
  );
};
export default Sidebar;
