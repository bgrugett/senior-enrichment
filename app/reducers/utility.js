export const removeElement = (array, element) => {
  let index = array.indexOf(element);
  if (index > -1) {
    return array.splice(index, 1);
  } else {
    return array;
  }
};

export const findObjectByName = (arr, name) => {
  if (!arr) console.error('findObjectByName called with empty array');
  if (!name) console.error('findObjectByName called with no name');
  let returnObject = {here: 'why am I'};
  arr.forEach(function(obj) {
    if (obj.name === name) {
      returnObject = obj;
    }
  });
  return returnObject;
};
