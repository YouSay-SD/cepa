export const orderByNumber = ({ array, orderBy }) => {
  const myNewSort = [...array].sort(function(a, b) {
    return b.attributes[orderBy] - a.attributes[orderBy]
  });

  return myNewSort
}