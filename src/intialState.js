export const intialValue = key => {
  return JSON.parse(window.localStorage.getItem(key)) || [];
};
