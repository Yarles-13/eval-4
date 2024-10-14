
import { useState } from "react";
import ContactFormandList from "./ContactFormandList";

const Index = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Index-wrapper">
      <h1>All Contacts</h1>
      <input
        className="filter-input"
        type="text"
        placeholder="Search Contacts"
        value={searchTerm}
        onChange={handleFilter}
      />
      <ContactFormandList
        contacts={filteredContacts}
        setContacts={setContacts}
      />
    </div>
  );
};

export default Index;
