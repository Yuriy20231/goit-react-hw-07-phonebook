import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://6492f3a6428c3d2035d0f9bb.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_,thunkAPI) => {
        try {
            const resp = await axios.get('/contacts')

            return resp.data
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
      
    
        
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact ,thunkAPI) => {
        try {
            const resp = await axios.post('/contacts', contact)

            return resp.data
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
      
    
        
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId ,thunkAPI) => {
        try {
            const resp = await axios.delete(`/contacts/${contactId}`)

            return resp.data
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
      
    
        
    }
);


