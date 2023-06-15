import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Layout } from "./Layout/Layout";

export const App = (props) => {
    return (
      <Layout>
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: 40, color: '#041934', backgroundColor: '#c3f5bf',}}>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
        </div>
      </Layout>
    )
  }