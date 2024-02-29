const validation = (email, password) => {
  let error = {};
  const checkemail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const checkpassword = /^[a-zA-Z ]+$/.test(password);

  if (checkemail && checkpassword) {
    return null;
  }
  if (!checkemail) {
    error.mail = "Email is in valid";
  }
  if (!checkpassword) {
    error.password = "password is not valid";
  }

  return error;
};

export default validation;
