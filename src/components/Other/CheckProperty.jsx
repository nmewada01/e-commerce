export const checkFormEmpty = (form) => {
  const {
    firstName,
    lastName,
    addressLine1,
    locality,
    pinCode,
    state,
    country,
    email,
    mobile,
  } = form;
  if (
    !firstName ||
    !lastName ||
    !addressLine1 ||
    !locality ||
    !pinCode ||
    !state ||
    !country ||
    !email ||
    !mobile
  ) {
    return { status: false, message: "Please fill the mandatory details" };
  }
  return { status: true };
};
export const checkMobile = (num) => {
  if (num.length !== 10) {
    return {
      status: false,
      message: "Please provide 10 digit valid mobile number",
    };
  }
  return { status: true };
};
export const checkPinCode = (num) => {
  if (num.length !== 6) {
    return { status: false, message: "Please provide 6 digit valid pincode" };
  }
  return { status: true };
};
export const checkEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return { status: false, message: "Please provide a valid email id" };
  }
  return { status: true };
};
export const checkPassword = (password) => {
  const errors = [];
  if (password.length < 6) {
    errors.push("at least 6 characters");
  }
  if (password.length > 16) {
    errors.push("not more than 16 characters");
  }
  if (password.search(/[a-z]/i) < 0) {
    errors.push("at least one lower case");
  }
  if (password.search(/[A-Z]/i) < 0) {
    errors.push("at least one upper case");
  }
  if (password.search(/[0-9]/) < 0) {
    errors.push("at least one number");
  }
  if (password.search(/[!@#$%^&*]/) < 0) {
    errors.push("at least one special character(! @ # $ % ^ & *)");
  }
  if (errors.length > 0) {
    return { status: false, message: errors.join(", ") };
  }
  return { status: true };
};
export const checkSignupForm = ({
  name,
  username,
  email,
  password,
  mobile,
}) => {
  console.log(name, username, email, password, mobile);
  if (!name || !username || !email || !password || !mobile) {
    return { status: false, message: "Please fill all the details" };
  } else {
    return { status: true };
  }
};
export const checkLoginForm = ({ email, password }) => {
  if (!email || !password) {
    return { status: false, message: "Please fill all the details" };
  }
  return { status: true };
};
export const setToast = (
  toast,
  title,
  status,
  duration = 2000,
  description
) => {
  toast({
    title,
    description,
    status,
    duration,
    isClosable: true,
    position: "top",
  });
};
export const checkCharacter = (str) => {
  if (str[0] !== str[0].toUpperCase()) {
    return {
      status: false,
      message: `First latter should be Capital in "${str}"`,
    };
  }
  return { status: true };
};
