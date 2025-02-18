export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }
}

export function validateArrayNotEmpty(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array can not be empty.");
  }
}
