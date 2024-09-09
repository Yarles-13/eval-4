
'use client';
import Link from "next/link";
import PropTypes from 'prop-types';

const List = ({ contacts, setContacts }) => {
  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Image</th>
          <th>Check out Profile</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>
              <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
            </td>
            <td>{contact.email}</td>
            <td>{contact.number}</td>
            <td>
              <img src={contact.imageURL} alt={contact.name} width={50} />
            </td>
            <td>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      imageURL: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  setContacts: PropTypes.func.isRequired,
};

export default List;


// export default List;
