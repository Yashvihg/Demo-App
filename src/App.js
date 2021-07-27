import React from "react";
import FormComponent from "./components/form/form.component";
import Sidebar from "./components/sidebar/sidebar.component";
import ContactUs from "./components/contact/contact.component";
import  "./App.css";
function App() {
  return (
    <div>
      <Sidebar />
      <FormComponent />
      <ContactUs /> 
    </div>
  );
}

export default App;
