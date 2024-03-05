import React from "react";
import Form from "./Form";
import EducationSection from "./EducationSection";

const App = () => {
  const bgcolor = {
    backgroundColor: "#1a1625",
    // color: "#ba9ffb",
  };

  return (
    <div style={bgcolor} className="h-screen text-2xl relative">
      <Form />
      <EducationSection />
    </div>
  );
};

export default App;
