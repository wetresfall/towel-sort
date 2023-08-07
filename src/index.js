module.exports = (matrix) => {
    if (!matrix || matrix.length === 0) {
      return [];
    }
  
    return matrix.reduce((sortedArray, row, index) => {
      if (index % 2 === 0) {
        return [...sortedArray, ...row];
      } else {
        return [...sortedArray, ...row.reverse()];
      }
    }, []);
  };
