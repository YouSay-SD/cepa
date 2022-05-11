export const orderAlphabetically = ({ array, orderBy }) => {
  const myNewSort = array.sort((a, b) => {
    if (a.attributes[orderBy] > b.attributes[orderBy]) {
      return 1;
    }
    if (a.attributes[orderBy] < b.attributes[orderBy]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });  

  return myNewSort
}