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

// Month day format
export function formatMonthDay(dateString) { 
	const date = new Date(dateString); 
	const month = date.toLocaleString('default', { month: 'long' }); 
	const day = date.getDate(); 
	return `${month} ${day}`; 
}

// Time format
export function formatTime(timeString) {
  const time = new Date(timeString);
  const hours = time.getUTCHours();
  const minutes = time.getUTCMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12; // Handle midnight (0 hours) as 12
  const formattedTime = `${formattedHours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
  return formattedTime;
}

// Get first character
export function getFirstCharacter(names) {
  return names
      .split(' ')
      .map(word => word.charAt(0))
      .join('');
}