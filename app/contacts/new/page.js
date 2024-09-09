
'use client';
import Form from "../../components/Form";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const NewContactPage = () => {
  const router = useRouter();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  const handleAddContact = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    router.push("/"); 
  };

  return (
    <div>
      <h1>Add New Contact</h1>
      <Form onSubmit={handleAddContact} />
    </div>
  );
};

export default NewContactPage;
