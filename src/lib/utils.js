// capitalize first letter
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// name alias
export function nameAlias(str) {
  return str.slice(0,2).toUpperCase();
}

// current year
export function currentYear() {
  return new Date().getFullYear();
}

// website short name
export function websiteShortName(url) {
  const protocolIndex = url.indexOf("://");
  if (protocolIndex !== -1) {
      const startIndex = protocolIndex + 3; // Start after "://"
      const endIndex = url.indexOf("/", startIndex); // Find the next "/"
      if (endIndex !== -1) {
          return url.substring(startIndex, endIndex);
      } else {
          return url.substring(startIndex); // If no "/" found after "://", return the rest of the string
      }
  }
  return null; // Return null if "://" is not found in the URL
}
