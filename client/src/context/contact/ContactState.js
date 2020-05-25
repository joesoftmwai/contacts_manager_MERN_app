import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        type: 'personal',
        name: 'Anthony Githendu',
        email: 'agithendu@gmail.com',
        phone: '254-7278-734-128',
      },
      {
        id: 2,
        type: 'personal',
        name: 'Teddy Otieno',
        email: 'totieno@gmail.com',
        phone: '254-7070-007-700',
      },
      {
        id: 3,
        type: 'professional',
        name: 'Alex Ortega',
        email: 'aortega@gmail.com',
        phone: '254-7928-873-812',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
