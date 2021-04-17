export default function Validator(inputs) {
  let errors = {};

  // Validate first name
  if (!inputs.firstname.trim()) {
    errors.firstname = "Required";
  } else if (!/^[a-zA-Z\u00c4\u00e4\u00d6\u00f6\u00dc\u00fc\u00df]+$/.test(inputs.firstname)) {
    errors.firstname = "Invalid format";
  } else {
    errors.firstname = "";
  }

  // Validate last name
  if (!inputs.lastname.trim()) {
    errors.lastname = "Required";
  } else if (!/^[a-zA-Z\u00c4\u00e4\u00d6\u00f6\u00dc\u00fc\u00df]+$/.test(inputs.lastname)) {
    errors.lastname = "Invalid format";
  } else {
    errors.lastname = "";
  }

  //Validate email
  if (!inputs.email) {
    errors.email = "Required";
  } else if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(inputs.email)) {
    errors.email = "Invalid email";
  } else {
    errors.email = "";
  }

  //Validate password - must be 8 characters
  if (!inputs.password) {
    errors.password = "Required";
  } else if (inputs.password.length < 8) {
    errors.password = "Must be at least 8 characters";
  } else {
    errors.password = "";
  }

  return errors;
}