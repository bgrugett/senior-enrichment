export const removeElement = (array, element) => {
  let index = array.indexOf(element);
  if (index > -1) {
    return array.splice(index, 1);
  } else {
    return array;
  }
};

export const findObjectByName = (arr, name) =>
  arr.find(obj => obj.name === name);

