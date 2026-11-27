
function StudentInfo({ student, handleChange }) {
  return (
    <section className="form-card">
      <h2>Student Information</h2>
      <p className="section-description">
        Enter the student's personal information.
      </p>

      <div className="form-grid">
        <div className="form-group">
          <label>Full Name</label>
          <input
            name="fullName"
            value={student.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
          />
        </div>

        <div className="form-group">
          <label>Student ID</label>
          <input
            name="studentId"
            value={student.studentId}
            onChange={handleChange}
            placeholder="Enter student ID"
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={student.dob}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={student.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default StudentInfo;
