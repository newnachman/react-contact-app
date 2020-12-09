import axios from 'axios';

export function requestAddContact(contact) {
  return axios.request({
      method: 'post',
      url: 'http://localhost:8000/api/contacts',
      data: contact
  });
}