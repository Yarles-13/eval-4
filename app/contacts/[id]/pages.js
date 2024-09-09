
'use client'; 
import { useState } from 'react';
import List from '../../components/List'; 
import Link from 'next/link';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);

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
