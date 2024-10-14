'use client'
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import ViewContact from "./ViewContact";
import { useState } from "react";
import PropTypes from "prop-types";


const ContactFormandList = ({ contacts, setContacts }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <>
      <ContactList
        contacts={contacts}
        setContacts={setContacts}
        setSelectedContact={handleSelectContact}
      />
      <ContactForm addContact={addContact} />
      {selectedContact && <ViewContact contact={selectedContact} />}
    </>
  );
};

ContactFormandList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      imageURL: PropTypes.string,
      contactNumber: PropTypes.string,
    })
  ).isRequired,
  setContacts: PropTypes.func.isRequired,
};

export default ContactFormandList;
