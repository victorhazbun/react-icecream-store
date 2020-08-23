import { Redirect } from 'react-router-dom';

export const validateDescription = value =>
  value ? null : 'You must enter a description';

export const validateQuantity = (value, inStock) =>
  inStock && value === '0' ? 'An item in stock should have quantity' : null;

export const validatePrice = value => {
  const regex = /^[0-9]+(\.[0-9][0-9])$/;

  if (!value || value === '0.00') {
    return 'You must enter a price';
  } else if (!regex.test(value.trim())) {
    return 'Please enter a valid price';
  }

  return null;
};
