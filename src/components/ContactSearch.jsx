import React, { useState, useEffect } from 'react';


const ContactSearch = (props) => {

  const [input, setInput] = useState("");
  const { filterContacts } = props;

  useEffect(() => {
    // When search input changes, update the list accordingly
    filterContacts(input);
  }, [input])

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="search in contacts..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div className="search-icon">
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default ContactSearch;
