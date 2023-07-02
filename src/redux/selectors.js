import { createSelector } from 'reselect';

export const getFilter = state => state.contacts.filter;
export const getItems = state => state.contacts.items;

export const getVisibleContacts = createSelector(
  [getFilter, getItems],
  (filter, items) => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';
    return items.filter(
      contact =>
        (contact.name &&
          contact.name.toLowerCase().includes(normalizedFilter)) ||
        (contact.number && contact.number.includes(filter))
    );
  }
);
