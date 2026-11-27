
import StudentInfo from "./StudentInfo";
import StudentDetails from "./StudentDetails";
import AddressDetails from "./AddressDetails";
import ContactDetails from "./ContactDetails";

function AllDetails({ student, handleChange }) {
  return (
    <div className="all-details">
      <StudentInfo student={student} handleChange={handleChange} />
      <StudentDetails student={student} handleChange={handleChange} />
      <AddressDetails student={student} handleChange={handleChange} />
      <ContactDetails student={student} handleChange={handleChange} />
    </div>
  );
}

export default AllDetails;
