/* import { useEffect, useState } from "react"; */
/* import { nanoid } from 'nanoid'; */
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Layout } from "./Layout/Layout";

export const App = () => {

return (
    <Layout>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Layout>
  );
  }