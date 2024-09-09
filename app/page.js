

'use client';
import List from "./components/List";
import Link from "next/link";
import { useState, useEffect } from "react";

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  return (
    <div>
      <h1>Contacts List</h1>
      <Link href="/contacts/new">
        <button>Add Contact</button>
      </Link>
      <List contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default ContactsPage;


