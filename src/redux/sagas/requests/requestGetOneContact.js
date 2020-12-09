import axios from 'axios';

export function requestGetOneContact(id) {
  return axios.request({
      method: 'get',
      url: `http://localhost:8000/api/contacts/${id}`
  });
}