import React, { useEffect } from 'react';


const ImagePicker = (prop) => {

  const {localContact, setLocalContact, IS_PAGEMODE_ADD, disable} = prop;

  useEffect(() => {
    if (IS_PAGEMODE_ADD) {
      // If the page is 'add' mode, get a random image
      changeAvatar();
    }
  }, [IS_PAGEMODE_ADD]);
  
  // The user clicks to get new random image:
  const changeAvatar = () => {
    // Create random options
    let gender = generateGender();
    let number = Math.floor(Math.random() * 100);
    // Get & set the random image
    let newAvatar = `https://randomuser.me/api/portraits/${gender}/${number}.jpg`;
    setLocalContact({ ...localContact, avatar: newAvatar });
  };

  const generateGender = () => {
    let option = Math.floor(Math.random() * 2).toString();
    if(option === '0') {
      return "men";
    } else {
      return "women";
    }
  }

  return (
    <div className="new-contact-avatar">
      <img src={localContact.avatar ? localContact.avatar : "../images/User-icon.png"} />
      <button disabled={disable} onClick={changeAvatar}><i className="fa fa-refresh" aria-hidden="true"></i></button>
    </div>
  )
}

export default ImagePicker;
