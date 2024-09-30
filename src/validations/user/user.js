import { validateType, validateEmail } from "../../utils/validator.js";
import ErrorHandler from "../../utils/ErrorHandler.js";

const user_data_validation = ({ username, password, email }) => {
  if (!username) throw new ErrorHandler("username must be filled!");
  if (!validateType(username, "string"))
    throw new ErrorHandler("username must be string!");
  if (!password) throw new ErrorHandler("password must be filled!");
  if (!validateType(password, "string"))
    throw new ErrorHandler("password must be string");
  if (!email) throw new ErrorHandler("email must be filled!");
  if (!validateEmail(email))
    throw new ErrorHandler("email is not valid format!");
  const dataIsValid = {
    username,
    password,
    email,
  };
  return {
    getDataValid: () => dataIsValid,
  };
};

export default user_data_validation;
