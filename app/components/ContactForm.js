import { useState } from "react";
import PropTypes from "prop-types";

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [id, setId] = useState(Math.floor(Math.random() * 10000)); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "imageURL":
        setImageURL(value);
        break;
      case "contactNumber":
        setContactNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setId(Math.floor(Math.random() * 10000)); 

    const newContact = {
      id,
      name,
      email,
      imageURL,
      contactNumber,
    };

    addContact(newContact);
    setName("");
    setEmail("");
    setImageURL("");
    setContactNumber("");
  };

  return (
    <>
      <h1>Add New Contact</h1>
      <main>
        <form onSubmit={handleSubmit}>
          <div id="name">
            <label>Name</label>
            <input
              id="name"
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Enter name"
              value={name}
            />
          </div>
          <div id="email">
            <label>Email</label>
            <input
              id="email"
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Enter email"
              value={email}
            />
          </div>
          <div id="imageURL">
            <label>Image URL</label>
            <input
              id="imageURL"
              name="imageURL"
              onChange={handleChange}
              type="url"
              placeholder="Enter image URL"
              value={imageURL}
            />
          </div>
          <div id="contactNumber">
            <label>Phone Number</label>
            <input
              id="contactNumber"
              name="contactNumber"
              onChange={handleChange}
              type="number"
              placeholder="Enter phone number"
              value={contactNumber}
            />
          </div>

          <button type="submit">Add Contact</button>
        </form>
      </main>
    </>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;

