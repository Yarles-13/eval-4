'use client'
import PropTypes from "prop-types";
import Link from "next/link";

const ContactList = ({ contacts = [], setContacts }) => {
  const tableHeading = ["Name", "Email", "Phone Number", "Image", "Actions"];

  const handleDelete = (name) => {
    const filteredContacts = contacts.filter(
      (contact) => contact.name !== name
    );
    setContacts(filteredContacts);
  };

  return (
    <>
      {contacts.length === 0 ? (
        <p>No Contacts on your List</p>
      ) : (
        <>
          <div className="table-wrapper">
            <table className="table-container">
              <thead>
                <tr className="table-head">
                  {tableHeading.map((header, index) => (
                    <th key={index} className="table-heading">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="contacts-body">
                {contacts.map((contact) => (
                  <tr className="contact-row" key={contact.id}>
                    <td className="contact-name">{contact.name}</td>
                    <td className="contact-email">{contact.email}</td>
                    <td className="contact-number">{contact.contactNumber}</td>
                    <td className="contact-image">
                      <img className="image" src={contact.imageURL} alt="profile" />
                    </td>
                    <td className="contact-actions">
                      <button className="delete-button" onClick={() => handleDelete(contact.name)}>
                        Delete
                      </button>
                      <Link href={`/contact/${contact.id}`} passHref>
                        <button className="view-button">
                          View Contact
                        </button>
                      </Link>
                      <Link href={`/contact/edit/${contact.name}`} passHref>
                        <button className="edit-button">
                          Edit
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

ContactList.propTypes = {
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

export default ContactList;
