
function ContactDetails({ student, handleChange }) {
  return (
    <section className="form-card">
      <h2>Contact Details</h2>
      <p className="section-description">
        Enter the student's contact information.
      </p>

      <div className="form-grid">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={student.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>

        <div className="form-group">
          <label>Emergency Contact</label>
          <input
            type="tel"
            name="emergencyContact"
            value={student.emergencyContact}
            onChange={handleChange}
            placeholder="Enter emergency contact"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
