/**
 * transform the given string date into a writing date
 * @param { string } dateString 
 * @returns the writing date
 */
function getWritingDate (dateString) {

  let date = new Date(dateString)
  
  let dateLoc = date.toLocaleString('fr-FR', {
    weekday:'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return dateLoc
} 

export {
  getWritingDate
}