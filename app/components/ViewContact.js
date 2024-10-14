'use client'

const ViewContact = ({ contact }) => {


  return (
    <>
      <div className="ContactView-container">
        <h1 className="name">{contact.name}</h1>
        <img className="image" src={contact.imageURL} alt='contact' />
        <p className="email-line ">{contact.email} </p>
      </div>
    </>
  );
};

export default ViewContact;
