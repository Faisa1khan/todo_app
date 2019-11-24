export const intialValue = key => {
  console.log(key);
  return JSON.parse(window.localStorage.getItem(key)) || [];
};
