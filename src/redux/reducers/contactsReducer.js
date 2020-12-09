
export const SET_ALL_CONTACTS = "contactapp/contacts/setall";
export const GET_ALL_CONTACTS = "contactapp/contacts/getall";

export const SET_ONE_CONTACT = "contactapp/contacts/setone";
export const GET_ONE_CONTACT = "contactapp/contacts/getone";

export const ADD_CONTACT = "contactapp/contacts/add";
export const DELETE_CONTACT = "contactapp/contacts/delete";
export const UPDATE_CONTACT = "contactapp/contacts/update";

const initialState = {
  contactsList: [],
  contactItem: {},
  loading: true
}


// REDUCER 
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CONTACTS:
      return {...state, loading: true }; 
    case SET_ALL_CONTACTS:
      return {...state, contactsList: action.fetchedContactsList, loading: false }; 
    case GET_ONE_CONTACT:
      return {...state, loading: true }; 
    case SET_ONE_CONTACT:
      return {...state, contactItem: action.fetchedContactItem, loading: false }; 
    default:
      return state;
  }
};


// ACTIONS
export const setAllContacts = (fetchedContactsList) => ({       
  type: SET_ALL_CONTACTS,
  fetchedContactsList
})

export const getAllContacts = () => ({                       
  type: GET_ALL_CONTACTS
})

export const setOneContact = (fetchedContactItem) => ({      
  type: SET_ONE_CONTACT,
  fetchedContactItem
})

export const getOneContact = (id) => ({                   
  type: GET_ONE_CONTACT,
  id
})

export const addContact = (contact) => ({                   
  type: ADD_CONTACT,
  contact
})

export const deleteContact = (id) => ({                   
  type: DELETE_CONTACT,
  id
})

export const updateContact = (id, contact) => ({               
  type: UPDATE_CONTACT,
  id,
  contact
})

