import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
  };
  
  const handlePending = (state) => {
      state.isLoading = true
      state.error = ''
  }
  const handleRejected = (state, { payload }) => {
      state.isLoading = false
      state.error = payload
  }
  
  const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState,
    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, handleRejected)
  
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
  
          if (state.items.find(el => el.name === action.payload.name)) {
            alert(`${action.payload.name} is already in contacts`);
            return;
          }
    
          state.items.push(action.payload);
        })
        .addCase(addContact.rejected, handleRejected)
  
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex((contact) => contact.id === action.payload.id);
          state.items.splice(index, 1);
        })
        .addCase(deleteContact.rejected, handleRejected);
    },
       
    

});

export const contactsReducer = contactsSlice.reducer;
export { fetchContacts, addContact, deleteContact };

 // addContact:(state,action) => {
            // if (state.contacts.find(el => el.name === action.payload.name)){
            //     alert(`${action.payload.name} is already in contacts`);
            //     return;
            // }
            

        //     state.contacts.push(action.payload);
        // },
        // deleteContact:(state, action) =>{
            // const idx = state.contacts.findIndex(contact => contact.id === action.payload);
            // state.contacts.splice(idx, 1)

        // },
