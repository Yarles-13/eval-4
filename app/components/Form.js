'use client';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Form = ({ onSubmit, contactToEdit }) => {
  const [form, setForm] = useState({
    id: Math.floor(Math.random() * 100000000),
    name: '',
    email: '',
    imageURL: '',
    number: '',
  });

  useEffect(() => {
    if (contactToEdit) {
      setForm(contactToEdit);
    }
  }, [contactToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Enter name"
          value={form.name}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
          value={form.email}
          required
        />
      </div>
      <div>
        <label>Image URL</label>
        <input
          name="imageURL"
          onChange={handleChange}
          type="text"
          placeholder="Enter image URL"
          value={form.imageURL}
          required
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          name="number"
          onChange={handleChange}
          type="text"
          placeholder="Enter phone number"
          value={form.number}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contactToEdit: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    imageURL: PropTypes.string,
    number: PropTypes.string,
  }),
};

export default Form;
