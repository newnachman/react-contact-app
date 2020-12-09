// 

import axios from 'axios';

export function requestUpdateContact(action) {
  const {id, contact} = action;
  return axios.request({
      method: 'put',
      url: `http://localhost:8000/api/contacts/${id}`,
      data: contact
  });
}