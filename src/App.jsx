
import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import StudentInfo from "./pages/StudentInfo";
import StudentDetails from "./pages/StudentDetails";
import AddressDetails from "./pages/AddressDetails";
import ContactDetails from "./pages/ContactDetails";
import AllDetails from "./pages/AllDetails";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Student Info");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [student, setStudent] = useState({
    fullName: "",
    studentId: "",
    dob: "",
    gender: "",
    course: "",
    department: "",
    academicYear: "",
    admissionDate: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    email: "",
    phone: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Student Info":
        return (
          <StudentInfo
            student={student}
            handleChange={handleChange}
          />
        );

      case "Student Details":
        return (
          <StudentDetails
            student={student}
            handleChange={handleChange}
          />
        );

      case "Address Details":
        return (
          <AddressDetails
            student={student}
            handleChange={handleChange}
          />
        );

      case "Contact Details":
        return (
          <ContactDetails
            student={student}
            handleChange={handleChange}
          />
        );

      case "All Details":
        return (
          <AllDetails
            student={student}
            handleChange={handleChange}
          />
        );

      default:
        return <StudentInfo student={student} handleChange={handleChange} />;
    }
  };

  return (
    <div className="app-container">
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="main-content">
        {renderContent()}

        {activeTab !== "All Details" && (
          <div className="save-container">
            <button
              className="save-button"
              onClick={() =>
                alert("This is a frontend demo. Backend saving is not connected yet.")
              }
            >
              Save Details
            </button>
          </div>
        )}
      </main>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}

export default App;
