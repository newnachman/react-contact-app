

const ContactInput = (props) => {

  const {localContact, setLocalContact, saveData, backToList, disable, setMessage} = props;

  // Handle changes in input fields:
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLocalContact({ ...localContact, [name]: value });
  };

  // Before submiting the form' check validations:
  const checkAndSubmit = () => {
    let allValidated = true;
    let validationMessage = "";

    // Validate phone input
    if (!validatePhone(localContact.phone)) {
      allValidated = false;
      validationMessage += " *Phone* can contain only numbers (0-9) and hyphens (-)."
    }

    // Validate name input
    if (localContact.name.length > 30) {
      allValidated = false;
      validationMessage += " *Name* can't be longer then 30 length."
    }
    // If good to go, all validated - save.
    if (allValidated) {
      saveData(localContact);
    } else {
      // Show message of problem
      setMessage( {
        text: validationMessage,
        type: 'orange-msg'
      });
    }
  }

  // Check special phone validation request:
  const validatePhone = (phoneInput) => {
    // * the request wasn't to alow usual sort of phone numbers 
    // but to accept only num & hyphen (not in specific place).
    let isValidated = "true";
    for (let char of phoneInput){
      if(/([\D])/g.test(char) && /([^-])/g.test(char)){
        // Found char that is not digit & not hyphen.
          isValidated = false;
          break;
      }
    }
    return isValidated;
  }

  return (
    <>
      <div className="new-contact-inputs">
        <div className="new-contact-input">
          <label>Name</label>
          <input
            maxLength="30"
            disabled={disable}
            name='name'
            value={localContact.name}
            onChange={handleChange}
          />
        </div>
        <div className="new-contact-input">
          <label>Phone</label>
          <input
            maxLength="15" // *
            // * due to the request of DB [phone field] to be maximum 15 length
            // i blocked the html input accordingly. 
            disabled={disable}
            name='phone'
            value={localContact.phone}
            onChange={handleChange}
          />
        </div>
        <div className="new-contact-input">
          <label>Title</label>
          <input
            maxLength="10" // *
            // same as phone comment
            disabled={disable}
            name='title'
            value={localContact.title}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="new-contact-buttons">
        <button disabled={disable} onClick={checkAndSubmit} className="button-ok">Update</button>
        <button onClick={backToList} className="button-cancel">Cancel</button>
      </div>
    </>
  )
}

export default ContactInput;
