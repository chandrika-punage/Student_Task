
function AddressDetails({ student, handleChange }) {
  return (
    <section className="form-card">
      <h2>Address Details</h2>
      <p className="section-description">
        Enter the student's address.
      </p>

      <div className="form-grid">
        <div className="form-group">
          <label>Street Address</label>
          <input
            name="street"
            value={student.street}
            onChange={handleChange}
            placeholder="Enter street"
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            name="city"
            value={student.city}
            onChange={handleChange}
            placeholder="Enter city"
          />
        </div>

        <div className="form-group">
          <label>State</label>
          <input
            name="state"
            value={student.state}
            onChange={handleChange}
            placeholder="Enter state"
          />
        </div>

        <div className="form-group">
          <label>Pincode</label>
          <input
            name="pincode"
            value={student.pincode}
            onChange={handleChange}
            placeholder="Enter pincode"
          />
        </div>
      </div>
    </section>
  );
}

export default AddressDetails;
