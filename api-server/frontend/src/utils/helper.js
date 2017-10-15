export const sortedArray = (array, sortBy) => {
  if(sortBy.order === 'ascending') {
    return array.sort((a,b) => b[sortBy.prop] > a[sortBy.prop])
  } else {
    return array.sort((a,b) => a[sortBy.prop] > b[sortBy.prop])
  }
}
