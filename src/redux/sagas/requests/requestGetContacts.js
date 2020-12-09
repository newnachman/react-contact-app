import axios from 'axios';

export function requestGetContacts() {
  console.log('requester')
  return axios.request({
      method: 'get',
      url: 'http://localhost:8000/api/contacts'
  });
}