
import axios from 'axios';

export function requestDeleteContact(id) {
  return axios.request({
      method: 'delete',
      url: `http://localhost:8000/api/contacts/${id}`
  });
}