import { useState } from "react";
const EducationSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="container absolute bottom-10 left-10 bg-white w-[43%] max-h-max rounded-lg flex justify-center flex-col px-10 py-10 gap-2 m-auto ">
      <div className="form-header relative">
        <h2>Form Section</h2>
        <button onClick={toggleForm}>{isFormOpen ? "🔼" : "🔽"}</button>
        {isFormOpen && (
          <div className="form-content h-40 absolute">
            {/* Your form components go here */}
            <label>
              Education:
              <input type="text" />
            </label>
            <label>
              Experience:
              <input type="text" />
            </label>
            {/* Add more form fields as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationSection;
