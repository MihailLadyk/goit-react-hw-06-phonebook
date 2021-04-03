import React from "react";
import PropTypes from "prop-types";
import styles from "./Contacts.module.css";
import { connect } from "react-redux";
import * as contactActions from "../../redux/contacts/contactsAction";

function Contacts(props) {
  return (
    <div>
      <ul className={styles.list}>
        {props.contacts.map((contact) => (
          <li key={contact.id} className={styles.list_el}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button
              onClick={() => props.deleteContact(contact.id)}
              className={styles.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
Contacts.propTypes = {
  contact: PropTypes.array,
  deleteContact: PropTypes.func,
};

const mapDispatchToProps = {
  deleteContact: contactActions.removeAction,
};

export default connect(null, mapDispatchToProps)(Contacts);
