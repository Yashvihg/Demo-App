import React from "react";
import {Nav} from "react-bootstrap";
// import { withRouter } from "react-router";
// import '../pages/style/Dashboard.css'

const Sidebar = (props) => {
   

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">HOME PAGE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">FORM</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">ABOUT US</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">CONTACT US</Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };
  // const Sidebar = withRouter(Side);
  export default Sidebar