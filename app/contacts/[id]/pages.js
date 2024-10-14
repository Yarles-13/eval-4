'use client';

import { useParams } from "next/navigation";


const ViewContact = ({ contacts }) => {
  const { id } = useParams(); 

  const contact = contacts.find(contact => contact.name === id);

  if (!contact) {
    return <p>Contact not found</p>;
  }

  return (
    <div>
      <h1>Contact Info</h1>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.contactNumber}</p>
      <img src={contact.imageURL} alt={`${contact.name}'s profile`} />
    </div>
  );
};

export default ViewContact;
