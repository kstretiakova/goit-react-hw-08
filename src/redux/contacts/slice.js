import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactThunk,
} from "./operations";
import { selectContacts } from "./selectors";
import { selectFilter } from "../filters/selectFilter";
import { logoutThunk } from "../auth/operations";

const initialState = {
  contacts: {
    items: [],
  },
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactThunk.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== action.payload
        );
        state.isLoading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          fetchContactThunk.pending,
          deleteContactThunk.pending,
          addContactThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactThunk.rejected,
          deleteContactThunk.rejected,
          addContactThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) || item.number.includes(filter)
    );
  }
);

export const contactsReducer = slice.reducer;

export const { deleteContact, addContact } = slice.actions;