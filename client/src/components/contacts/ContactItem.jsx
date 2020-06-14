import React, { useContext } from 'react';

import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { _id, name, email, phone, type } = contact;

  const handleDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  const handleEdit = () => {
    setCurrent(contact);
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={`badge ${
            type === 'personal' ? 'badge-primary' : 'badge-success'
          }`}
        >
          {type}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fa fa-envelope-open" /> {email}
          </li>
        )}

        {phone && (
          <li>
            <i className="fa fa-phone" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={handleEdit}>
          <i className="fa fa-pencil" /> Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          <i className="fa fa-trash" /> Delete
        </button>
      </p>
    </div>
  );
};

export default ContactItem;
