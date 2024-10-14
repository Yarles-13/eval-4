
'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const EditContact = ({ contacts, setContacts }) => {
  const { id } = useParams(); 
  const contact = contacts.find((contact) => contact.name === id); 
  const router = useRouter();


  const [formData, setFormData] = useState({
    name: contact?.name || '',
    email: contact?.email || '',
    contactNumber: contact?.contactNumber || '',
    imageURL: contact?.imageURL || '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedContacts = contacts.map((contact) =>
      contact.name === id ? { ...contact, ...formData } : contact
    );
    setContacts(updatedContacts);
    router.push('/');
  };

  if (!contact) {
    return <p>Contact not found</p>;
  }

  return (
    <div>
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Phone Number</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="imageURL">Image URL</label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditContact;
