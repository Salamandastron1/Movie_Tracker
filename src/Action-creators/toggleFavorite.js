export const toggleFavorite = id => {
  console.log(id)
  return {
  type: 'TOGGLE_FAVORITE',
  id,
}}