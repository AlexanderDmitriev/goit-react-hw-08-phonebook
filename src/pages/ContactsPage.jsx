const ContactsPage = () => {
  return (
    <>
      <button type="button">addNewContact button-open modal</button>
      <p>Filter</p>
      <label>
        Filter input
        <input type="text" name="filter" />
      </label>
      <p>You have no contacts yet</p>
      <p>Contact list</p>
      <ul>
        <li>
          <p>Name-Number</p>
          <button type="button">Patch button</button>
          <button type="button">Delete button</button>
        </li>
        <li>
          <p>Name-Number</p>
          <button type="button">Patch button</button>
          <button type="button">Delete button</button>
        </li>
        <li>
          <p>Name-Number</p>
          <button type="button">Patch button</button>
          <button type="button">Delete button</button>
        </li>
      </ul>
    </>
  );
};

export default ContactsPage;
