
import React from 'react'


// Displays a message:
const Message = (props) => {

  const { message } = props;
  const { text, type } = message;

  return (
    <div className={`message ${type}`}>
      {text}
    </div>
  )
}

export default Message
