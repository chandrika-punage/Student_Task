
function StudentDetails({ student, handleChange }) {
  return (
    <section className="form-card">
      <h2>Student Details</h2>
      <p className="section-description">
        Enter the student's academic details.
      </p>

      <div className="form-grid">
        <div className="form-group">
          <label>Course</label>
          <input
            name="course"
            value={student.course}
            onChange={handleChange}
            placeholder="Enter course"
          />
        </div>

        <div className="form-group">
          <label>Department</label>
          <input
            name="department"
            value={student.department}
            onChange={handleChange}
            placeholder="Enter department"
          />
        </div>

        <div className="form-group">
          <label>Academic Year</label>
          <select
            name="academicYear"
            value={student.academicYear}
            onChange={handleChange}
          >
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>

        <div className="form-group">
          <label>Admission Date</label>
          <input
            type="date"
            name="admissionDate"
            value={student.admissionDate}
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
  );
}

export default StudentDetails;
