export const DDMMMYYYY = 'D, MMM YYYY';

export const isValidEmail = (email: string) => {
  var emilValidate = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
  if (!emilValidate.test(email)) {
    return true;
  } //not valid
  else {
    return false;
  }
};

export const isRequired = (value: string | undefined) => {
  if (!value || value === '' || value.toString() === '') {
    return true;
  } else {
    return false;
  }
};

export const removeSpecialCharacter = (text: string) => {
  return text.replace(/<\/?[^>]+(>|$)/g, '').replace(/&amp;/g, '&');
};
