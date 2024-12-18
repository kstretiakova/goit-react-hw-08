import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi, setToken } from "../../config/goitApi";



export const fetchContactThunk = createAsyncThunk(
  "fetchContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get("/contacts");
      
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "deleteContact",
  async (id, thunkAPI) => {
    try {
      await goitApi.delete(`/contacts/${id}`);
      
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/contacts", body);
      
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);