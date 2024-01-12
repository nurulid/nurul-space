// capitalize first letter
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// current year
export function currentYear() {
  return new Date().getFullYear();
}
