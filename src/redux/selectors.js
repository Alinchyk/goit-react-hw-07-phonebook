import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilteredContact = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
