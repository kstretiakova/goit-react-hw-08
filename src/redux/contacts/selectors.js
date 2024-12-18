export const selectContacts = (state) => state.contactsData.contacts.items;
export const selectIsLoading = (state) => state.contactsData.isLoading;
export const selectIsError = (state) => state.contactsData.isError;