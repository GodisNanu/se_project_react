export function ValidateTextInput(value) {
  if (value.length < 1) {
    return "Field is required";
  } else if (/\s\s/.test(value)) {
    return "Too many spaces";
  } else if (value.length < 3) {
    return "Too short";
  }
  return true;
}

export function ValidateBasicUrl(url) {
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z]{2,6})([/\w .-]*)*\/?$/;
  if (url.length < 1) {
    return "Field is required";
  } else if (!urlRegex.test(url)) {
    return "Invalid URL format";
  }
}
